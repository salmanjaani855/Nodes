import express from "express";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// Allow frontend domain
app.use(cors({
  origin: "*"
}));

app.use(express.json());

// Stripe secret key (from Render ENV)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create Checkout Session
app.post("/create-checkout-session", async (req, res) => {
  const { planType } = req.body;

  let planData = {};

  // Plan Pricing
  if (planType === "basic") {
    planData = { name: "Basic Plan", amount: 5400 };
  } else if (planType === "platinum") {
    planData = { name: "Platinum Plan", amount: 9900 };
  } else if (planType === "pro") {
    planData = { name: "Pro Business Plan", amount: 7900 };
  } else {
    return res.status(400).json({ error: "Invalid plan type!" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            recurring: { interval: "month" },
            unit_amount: planData.amount,
            product_data: {
              name: planData.name,
            },
          },
          quantity: 1,
        },
      ],

      // **IMPORTANT** — Change these after Vercel deploy
      success_url: process.env.SUCCESS_URL,
      cancel_url: process.env.CANCEL_URL,
    });

    res.json({ url: session.url });

  } catch (err) {
    console.log("Stripe Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Render assigns PORT automatically
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
