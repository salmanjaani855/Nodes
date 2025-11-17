import React, { useState, useEffect, useRef } from 'react'
import leftImage from './assets/Left.png'
import right from './assets/right.png'
import amazon from './assets/amazon.svg'
import apple from './assets/apple.svg'
import airbnb from './assets/airbnb.svg'
import facebook from './assets/facebook.svg'
import google from './assets/google.svg'
import paypal from './assets/paypal.svg'
import react from './assets/react.svg'
import square from './assets/square.svg'
import vscode from './assets/vscode.svg'
import weebly from './assets/weebly.svg'
import youtube from './assets/youtube.svg'
import videoplayback from './assets/videoplayback.mp4'
import song from './assets/song.mp4'
import video from './assets/video.jpg'
import checkmark from './assets/checkmark.svg'

import ryan from './assets/ryan.svg'
import behance from './assets/behance.svg'

import search from './assets/search.svg'
import git from './assets/git.svg'
import file from './assets/File.svg'
import plugins from './assets/plugins.svg'
import file1 from './assets/file1.svg'
import files from './assets/files.svg'
import wispy from './assets/wispy.svg'
import greater from './assets/greater.svg'
import down from './assets/down.svg'
import rights from './assets/rights.svg'

import Squares from './Squares';




const Home = () => {
  const [activeCard, setActiveCard] = useState(1);

  const testimonials = [
    {
      id: 0,
      name: "Rayna Torff",
      role: "Lead, Design Systems",
      text: "Run Node scripts. Install packages easily. Execute commands fast. Debug code efficiently. Learn JavaScript basics. Automate repetitive tasks. Manage dependencies smoothly. Explore Node modules. Build powerful apps. Run Node scripts."
    },
    {
      id: 1,
      name: "Marcus Dorwart",
      role: "VP, Operations",
      text: "Run Node scripts easily, manage packages efficiently. Debug code fast, automate repetitive tasks smoothly. Build useful apps, explore modules quickly. Test code thoroughly, deploy apps safely."
    },
    {
      id: 2,
      name: "Gustavo Workman",
      role: "Head, Product Design",
      text: "Initialize project folder quickly, install required modules smoothly. Configure environment variables properly, execute scripts reliably, monitor performance closely."
    }
  ];

  const getCardPosition = (cardIndex) => {
    if (cardIndex === activeCard) return 1; // center
    if ((activeCard === 0 && cardIndex === 2) || (cardIndex === activeCard - 1)) return 0; // left
    return 2; // right
  };

  const handlePrev = () => {
    setActiveCard((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleNext = () => {
    setActiveCard((prev) => (prev === 2 ? 0 : prev + 1));
  };



  const handleSubscribe = async (planType) => {
    const res = await fetch("http://localhost:5000/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ planType }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      console.log("Stripe error:", data);
    }
  };


  const typeRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const word = "Automation";
    let i = 0;
    let isDeleting = false;

    function type() {
      const el = typeRef.current;
      if (!el) return;

      let speed = isDeleting ? 80 : 150; // professional smooth speed

      el.textContent = word.substring(0, i);

      if (!isDeleting && i < word.length) {
        i++;
      } else if (isDeleting && i > 0) {
        i--;
      }

      if (i === word.length) {
        setTimeout(() => (isDeleting = true), 900); // premium pause
      } else if (i === 0) {
        isDeleting = false;
      }

      setTimeout(type, speed);
    }

    type();
  }, []);



  return (
    <>




      <div>
        <div className="relative w-full flex justify-center items-center overflow-hidden px-4 sm:px-6 md:px-0">

          {/* 🎨 BACKGROUND SQUARES LAYER (BEHIND EVERYTHING) */}
          <div className="absolute inset-0 -z-10 w-full h-full">
            <Squares
              speed={0.5}
              squareSize={50}
              direction="diagonal"
              borderColor="green"
              hoverFillColor="#222"
            />
          </div>

          {/* ================== MAIN SECTION ================== */}

          {/* Container for video and side images */}
          <div className="absolute top-[33rem] md:top-[33rem] left-1/2 -translate-x-1/2 w-[90%] md:w-[75rem] flex justify-center items-center">

            {/* Left Image */}
            <img
              className="absolute left-0 w-[10rem] md:w-[16.5rem] h-auto object-contain"
              alt=""
              src={leftImage}
            />

            {/* Video */}
            <video
              className="rounded-xl w-[90%] md:w-[42.375rem] h-[23.688rem] object-cover mx-auto"
              src={song}
              autoPlay
              loop
              muted
              playsInline
            />

            {/* Right Image */}
            <img
              className="absolute right-0 w-[10rem] md:w-[16.5rem] h-auto object-cover"
              alt=""
              src={right}
            />
          </div>

          {/* Center Icon */}
          {/* <img
    className="absolute top-[43.313rem] md:top-[43.313rem] left-1/2 -translate-x-1/2 w-[3.125rem] h-[3.125rem] z-10"
    alt=""
    src={play}
  /> */}

          {/* Heading */}
          <b className="absolute top-[9rem] md:top-[9rem] left-1/2 -translate-x-1/2 text-[2rem] sm:text-[2.5rem] md:text-[3.75rem] tracking-num--0_03 leading-[2.5rem] sm:leading-[3rem] md:leading-[3.75rem] text-gray-100 text-center">
            Node CLI
          </b>

          {/* TYPEWRITER TITLE */}
          <div className="absolute top-[13.25rem] md:top-[13.25rem] left-1/2 -translate-x-1/2 w-[80%] sm:w-[60%] md:w-[20.625rem] text-center text-[2rem] sm:text-[2.5rem] md:text-[3.75rem]">

            {/* Text */}
            <b
              ref={typeRef}
              className="tracking-num--0_03 leading-[3rem] sm:leading-[3.5rem] md:leading-[3.75rem]
      text-transparent !bg-clip-text
      [background:linear-gradient(92.14deg,#4ade80,#6ee7b7)]
      [-webkit-background-clip:text]
      [-webkit-text-fill-color:transparent]"
            ></b>

            {/* Cursor */}
            <span
              className="inline-block ml-1 w-[2px] h-[1.1em] bg-[#4ade80] animate-pulse"
              ref={cursorRef}
            ></span>

            {/* Blur Glow */}
            <b
              className="absolute inset-0 tracking-num--0_03 leading-[3rem] sm:leading-[3.5rem] md:leading-[3.75rem]
      text-transparent !bg-clip-text
      [background:linear-gradient(92.14deg,rgba(74,222,128,0.75),rgba(110,231,183,0.75))]
      [-webkit-background-clip:text]
      [-webkit-text-fill-color:transparent]
      [filter:blur(10px)]"
            >
              Automation
            </b>
          </div>

          {/* Description */}
          <div className="absolute top-[17.75rem] md:top-[17.75rem] left-1/2 -translate-x-1/2 text-[1.2rem] sm:text-[1.35rem] md:text-[1.5rem] font-medium text-center text-gray-100">
            without wasting a thousand hours
          </div>

          <div className="absolute top-[20.813rem] md:top-[20.813rem] left-1/2 -translate-x-1/2 leading-[150%] text-darkgray-100 text-center w-[85%] sm:w-[80%] md:w-[39rem]">
            Most screencasts are boring, but you won't find a robotic voice here.
            I'll walk you through every piece of my VS Code set up as if we were
            sitting next to each other.
          </div>

          {/* Button */}
          <a href="#pricing">
            <div className="absolute top-[25.813rem] md:top-[25.813rem] left-1/2 -translate-x-1/2 w-[12rem] sm:w-[14rem] md:w-[16.688rem] h-[3.25rem] text-[1.1rem] sm:text-[1.2rem] md:text-[1.25rem] text-white cursor-pointer active:translate-y-[5px] transition-all duration-200">

              {/* Back Gradient */}
              <div className="absolute inset-0 rounded-num-4 bg-[linear-gradient(92.14deg,#4ade80,#6ee7b7)]" />

              {/* Glow */}
              <div className="absolute inset-0 blur-[10px] rounded-num-4 bg-[linear-gradient(92.14deg,#4ade80,#6ee7b7)] transition-all duration-300 shadow-[0_10px_0_0_#22c55e]"></div>

              {/* Text */}
              <b className="absolute top-[1rem] left-1/2 -translate-x-1/2 tracking-num--0_03 leading-[1.25rem] select-none">
                Get Pro access
              </b>
            </div>
          </a>

          {/* Spacer (same as original) */}
          <div className="h-[60rem] sm:h-[58rem] md:h-[55rem]"></div>
        </div>









        <div id='partner' className="w-full text-center relative mt-17">
          {/* Heading */}
          <div className="text-[2rem] md:text-[3rem] tracking-tight leading-[3rem] text-gray-100 flex justify-center">
            <b>Our Trusted</b>
            <span className="font-semibold">&nbsp;Partners</span>
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[2rem] md:text-[3rem] tracking-tight leading-[3rem] text-gray-1300 [filter:blur(10px)] whitespace-nowrap">
            <b>Our Trusted</b>
            <span className="font-semibold">&nbsp;Partners</span>
          </div>

          {/* Partner Logos */}
          <div className="mt-12 flex flex-col items-center gap-8 md:gap-10 px-4 max-w-[80rem] mx-auto">
            {/* Top Row (5 logos) */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              <img src={amazon} className="h-[2rem] md:h-[2.063rem] object-contain" alt="Amazon" />
              <img src={apple} className="h-[2.875rem] object-contain" alt="Apple" />
              <img src={facebook} className="h-[1.563rem] object-contain" alt="Facebook" />
              <img src={square} className="h-[2.063rem] object-contain" alt="Square" />
              <img src={google} className="h-[2.375rem] object-contain" alt="Google" />
            </div>

            {/* Bottom Row (6 logos) */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              <img src={airbnb} className="h-[2.75rem] object-contain" alt="Airbnb" />
              <img src={paypal} className="h-[3.375rem] object-contain" alt="Paypal" />
              <img src={react} className="h-[3.25rem] object-contain" alt="React" />
              <img src={weebly} className="h-[3.375rem] object-contain" alt="Weebly" />
              <img src={vscode} className="h-[2.875rem] object-contain" alt="VS Code" />
              <img src={youtube} className="h-[3.75rem] object-contain" alt="YouTube" />
            </div>
          </div>
        </div>















        {/* Container */}
        <div className="relative w-full px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">

              {/* Left Column - Author Info */}
              <div className="flex flex-col space-y-4 md:space-y-6">
                {/* Heading with Blur Effect */}
                <div className="relative">
                  <h2 className="relative z-10 text-gray-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3rem] tracking-tight leading-tight font-semibold">
                    Meet the Author
                  </h2>
                  {/* Blur Effect Behind */}
                  <h2 className="absolute top-0 left-0 text-neutral-50/75 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3rem] tracking-tight leading-tight font-semibold blur-[10px] pointer-events-none">
                    Meet the Author
                  </h2>
                </div>

                {/* Paragraphs */}
                <p className="text-darkgray-100 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  Node CLI tools allow quick script execution for everyday tasks without heavy setups. Simple commands help automate repeated work and improve workflow speed across different projects easily.
                </p>

                <p className="text-darkgray-100 text-sm sm:text-base md:text-lg leading-relaxed">
                  Node CLI commands make project setup faster and more controlled using basic terminal input. Developers create scripts for file handling, automation, testing, and configuration. This workflow helps keep tasks simple while ensuring efficient performance for everyday development routines.
                </p>


                {/* Gradient Box & Read More */}
                <a
                  href='https://youtu.be/2x2eIhn2BJM?si=WvoH87EVnoeww-qQ'
                  target='_blank'
                  className="pt-4 md:pt-6"
                >
                  <div className="relative w-full max-w-[18.688rem]">

                    {/* Animated Border */}
                    <div className="relative w-full h-[3rem] rounded-lg p-[2px] animated-green-border">

                      {/* Inner Box */}
                      <div className="w-full h-full rounded-lg bg-gradient-to-r from-green-400/20 to-emerald-300/20 flex items-center justify-center">

                        <div className="relative">
                          <div className="text-green-400 text-sm sm:text-base font-medium whitespace-nowrap">
                            Read more about the author
                          </div>
                          <div className="absolute top-0 left-0 text-green-400 text-sm sm:text-base font-medium blur-sm pointer-events-none whitespace-nowrap">
                            Read more about the author
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </a>

              </div>

              {/* Right Column - Video */}
              <div className="flex flex-col space-y-3 md:space-y-4">
                <div className="relative w-full aspect-video max-w-full lg:max-w-[32.188rem] mx-auto lg:mx-0">
                  {/* Green glow - top right */}
                  <div className="absolute -top-8 -right-8 w-40 h-40 bg-green-400/40 rounded-full filter blur-3xl z-0"></div>

                  {/* Blur background */}
                  <div className="absolute inset-0 rounded-lg filter blur-lg bg-gray-800/30 z-5"></div>

                  {/* Video */}
                  <video
                    src={videoplayback}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={video}
                    className="relative z-10 rounded-lg w-full h-full object-cover shadow-lg bg-black/30 border border-green-400/25"
                  />
                </div>

                {/* Video Label */}
                <div className="text-gainsboro-100 text-xs sm:text-sm md:text-base leading-relaxed text-center lg:text-left">
                  <i>Introduction Video ( </i>
                  <span>2:49 </span>
                  <i>)</i>
                </div>
              </div>

            </div>
          </div>
        </div>











        {/* Pricing Section */}
        <div id='pricing' className="relative w-full px-4 sm:px-6 md:px-10 lg:px-20 py-12 md:py-16 lg:py-20">
          <div className="max-w-[90rem] mx-auto">

            {/* Section Heading with Blur Effect */}
            <div className="relative text-center mb-12 md:mb-16 lg:mb-20">
              <h2 className="relative z-10 text-gray-100 text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] tracking-tight leading-tight">
                <b>Choose Your</b>
                <span className="font-semibold"> Plan</span>
              </h2>
              {/* Blur Effect */}
              <h2 className="absolute top-0 left-1/2 -translate-x-1/2 text-gray-1300 text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] tracking-tight leading-tight blur-[10px] pointer-events-none">
                <b>Choose Your</b>
                <span className="font-semibold"> Plan</span>
              </h2>
            </div>

            {/* Pricing Cards Container */}
            <div className="relative flex flex-col lg:flex-row justify-center items-start lg:items-center gap-6 lg:gap-8">

              {/* Basic Plan Card */}
              <div className="relative rounded-lg bg-gray-1200 border border-darkslategray-100 w-full max-w-[25.313rem] h-auto lg:h-[23.375rem] p-6 lg:p-8 flex flex-col mx-auto lg:mx-0 lg:mt-12">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-whitesmoke text-xl lg:text-2xl font-bold mb-2">Basic</h3>
                    <p className="text-gray-100 text-sm font-light">Starter</p>
                  </div>

                  {/* Price positioned on the right */}
                  <div className="text-gray-100 text-right">
                    <span className="text-2xl lg:text-[1.875rem] font-medium">$54/</span>
                    <span className="text-base lg:text-[1rem] font-light">month</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="flex-1 space-y-4 mb-6 text-sm">
                  <div className="flex items-start gap-3">
                    <img className="w-4 h-4 mt-0.5 flex-shrink-0" alt="" src={checkmark} />
                    <span className="text-gray-100 leading-relaxed">Donec sed elit tortor tempor sit.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <img className="w-4 h-4 mt-0.5 flex-shrink-0" alt="" src={checkmark} />
                    <span className="text-gray-100 leading-relaxed">Donec sed elit tortor.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <img className="w-4 h-4 mt-0.5 flex-shrink-0" alt="" src={checkmark} />
                    <span className="text-gray-100 leading-relaxed">Donec sed elit.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <img className="w-4 h-4 mt-0.5 flex-shrink-0" alt="" src={checkmark} />
                    <span className="text-gray-100 leading-relaxed">Donec sed elit tortor tempor sit.</span>
                  </div>
                </div>

                {/* Choose Button */}
                <button
                  onClick={() => handleSubscribe("basic")}
                  className="relative w-full lg:w-[20.313rem] h-[3rem] rounded-num-4 border border-mediumspringgreen-100 bg-gradient-to-r from-green-400/20 to-emerald-300/20 font-medium text-lg flex items-center justify-center mx-auto overflow-hidden group cursor-pointer"
                >
                  {/* Animated background overlay */}
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-green-400/60 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease-in-out"></span>

                  {/* Button text */}
                  <span className="relative text-white transition duration-300 group-hover:text-black ease-in-out bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 text-transparent">
                    Choose
                  </span>
                </button>

              </div>

              {/* Platinum Plan Card (Featured - Higher Position with Shadow, No Border) */}
              <div className="relative w-full max-w-[25.313rem] h-auto lg:h-[27.875rem] mx-auto lg:mx-0 lg:-mt-8">
                {/* Green Shadow Behind - Multiple Layers */}
                <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-green-400/40 to-emerald-300/40 blur-3xl -z-10" />
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-400/30 to-emerald-300/30 blur-2xl -z-10" />

                <div className="relative rounded-lg bg-gray-1200 p-6 lg:p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-whitesmoke text-xl lg:text-2xl font-bold mb-2">Platinum</h3>
                      <p className="text-gray-100 text-sm font-light">Go all in</p>
                    </div>

                    {/* Price positioned on the right */}
                    <div className="text-gray-100 text-right">
                      <span className="text-3xl lg:text-[2.5rem] font-medium">$99/</span>
                      <span className="text-xl lg:text-[1.5rem] font-light">month</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="flex-1 space-y-4 mb-6 text-sm">
                    <div className="flex items-start gap-3">
                      <img className="w-4 h-4 mt-0.5 flex-shrink-0" alt="" src={checkmark} />
                      <span className="text-gray-100 leading-relaxed">Donec sed elit tortor tempor sit.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <img className="w-4 h-4 mt-0.5 flex-shrink-0" alt="" src={checkmark} />
                      <span className="text-gray-100 leading-relaxed">Donec sed elit tortor.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <img className="w-4 h-4 mt-0.5 flex-shrink-0" alt="" src={checkmark} />
                      <span className="text-gray-100 leading-relaxed">Donec sed elit.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <img className="w-4 h-4 mt-0.5 flex-shrink-0" alt="" src={checkmark} />
                      <span className="text-gray-100 leading-relaxed">Donec sed elit.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <img className="w-4 h-4 mt-0.5 flex-shrink-0" alt="" src={checkmark} />
                      <span className="text-gray-100 leading-relaxed">Donec sed elit tortor tempor sit.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <img className="w-4 h-4 mt-0.5 flex-shrink-0" alt="" src={checkmark} />
                      <span className="text-gray-100 leading-relaxed">Donec sed elit tortor tempor sit.</span>
                    </div>
                  </div>

                  {/* Choose Button (Featured Style) */}
                  <button
                    onClick={() => handleSubscribe("platinum")}
                    className="relative w-full lg:w-[20.313rem] h-[3rem] rounded-num-4 overflow-hidden mx-auto cursor-pointer"
                  >
                    <div className="absolute inset-0 rounded-num-4 bg-gradient-to-r from-green-400 to-emerald-300 blur-[10px]" />
                    <div className="absolute inset-0 rounded-num-4 bg-gradient-to-r from-green-400 to-emerald-300 border border-mediumspringgreen-100" />
                    <span className="relative z-10 text-white font-bold text-lg">Choose</span>
                  </button>
                </div>
              </div>

              {/* Pro Business Card */}
              <div className="relative rounded-lg bg-gray-1200 border border-darkslategray-100 w-full max-w-[25.313rem] h-auto lg:h-[23.375rem] p-6 lg:p-8 flex flex-col mx-auto lg:mx-0 lg:mt-12">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-whitesmoke text-xl lg:text-2xl font-bold mb-2">Pro Business</h3>
                    <p className="text-gray-100 text-sm font-light">Better Results</p>
                  </div>

                  {/* Price positioned on the right */}
                  <div className="text-gray-100 text-right">
                    <span className="text-2xl lg:text-[1.875rem] font-medium">$79/</span>
                    <span className="text-base lg:text-[1rem] font-light">month</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="flex-1 space-y-4 mb-6 text-sm">
                  <div className="flex items-start gap-3">
                    <img className="w-4 h-4 mt-0.5 flex-shrink-0" alt="" src={checkmark} />
                    <span className="text-gray-100 leading-relaxed">Donec sed elit tortor tempor sit.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <img className="w-4 h-4 mt-0.5 flex-shrink-0" alt="" src={checkmark} />
                    <span className="text-gray-100 leading-relaxed">Donec sed elit tortor.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <img className="w-4 h-4 mt-0.5 flex-shrink-0" alt="" src={checkmark} />
                    <span className="text-gray-100 leading-relaxed">Donec sed elit.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <img className="w-4 h-4 mt-0.5 flex-shrink-0" alt="" src={checkmark} />
                    <span className="text-gray-100 leading-relaxed">Donec sed elit tortor tempor sit.</span>
                  </div>
                </div>

                {/* Choose Button */}
                <button
                  onClick={() => handleSubscribe("pro")}
                  className="relative w-full lg:w-[20.313rem] h-[3rem] rounded-num-4 border border-mediumspringgreen-100 bg-gradient-to-r from-green-400/20 to-emerald-300/20 font-medium text-lg flex items-center justify-center mx-auto overflow-hidden group cursor-pointer"
                >
                  {/* Animated background overlay */}
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-green-400/60 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease-in-out"></span>

                  {/* Button text */}
                  <span className="relative text-white transition duration-300 group-hover:text-black ease-in-out bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 text-transparent">
                    Choose
                  </span>
                </button>


              </div>

            </div>
          </div>
        </div>











        <div className="w-full min-h-[29.75rem] relative text-left text-base text-gainsboro font-inter px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
          <div className="max-w-[90rem] mx-auto relative h-full flex flex-col lg:flex-row lg:items-start lg:justify-between">

            {/* Left Side - Testimonial Cards Stack */}
            <div className="relative w-full lg:w-[45%] mt-10 lg:mt-0 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[35rem] min-h-[26rem]">
                {testimonials.map((testimonial, index) => {
                  const position = getCardPosition(index);
                  const isCenter = position === 1;
                  const isLeft = position === 0;
                  const isRight = position === 2;

                  return (
                    <div
                      key={testimonial.id}
                      className={`absolute transition-all duration-500 ease-in-out ${isCenter ? 'z-20 scale-105' : 'z-10 scale-95'}`}
                      style={{
                        left: isLeft ? '0%' : isCenter ? '25%' : '50%',
                        top: 0,
                        width: isCenter ? '80%' : '70%',
                        maxWidth: isCenter ? '20.5rem' : '17.875rem',
                      }}
                    >
                      <div className="relative pt-[1.5rem]">
                        {isCenter && (
                          <div className="absolute top-[1.5rem] left-0 blur-[50px] rounded bg-gray-300 w-full h-[22.75rem]"></div>
                        )}
                        <div className={`relative rounded bg-gray-200 border-darkslategray border-solid border ${isCenter ? 'p-6' : 'p-5'}`}>
                          <img
                            src={behance} // yahan apni image ka path ya variable daal do
                            alt="icon"
                            className={`absolute -top-[1.5rem] left-1/2 -translate-x-1/2 rounded-full object-cover ${isCenter ? 'w-[3rem] h-[3rem]' : 'w-[2.619rem] h-[2.613rem]'
                              }`}
                          />

                          <div className={`${isCenter ? 'mt-6' : 'mt-4'} leading-[150%] ${isCenter ? 'text-base' : 'text-[0.873rem]'}`}>
                            {testimonial.text}
                          </div>
                          <div className={`mt-${isCenter ? '10' : '8'} flex items-center gap-${isCenter ? '4' : '3'}`}>
                            <img
                              src={ryan} // yahan image ka source daal do
                              alt="center icon"
                              className={`rounded-full flex-shrink-0 object-cover ${isCenter ? 'w-[2.5rem] h-[2.5rem]' : 'w-[2.181rem] h-[2.175rem]'
                                }`}
                            />

                            <div className={`flex flex-col gap-[${isCenter ? '0.5rem' : '0.437rem'}]`}>
                              <div className={`${isCenter ? 'text-[1.125rem] leading-[1.125rem]' : 'text-[0.981rem] leading-[0.981rem]'} font-medium text-gray-100`}>
                                {testimonial.name}
                              </div>
                              <div className={`${isCenter ? 'text-[0.875rem] leading-[0.875rem]' : 'text-[0.763rem] leading-[0.763rem]'} text-darkgray-100`}>
                                {testimonial.role}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Slider Controls */}
                {/* Slider Controls */}
                <div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:left-[13.5rem] lg:transform-none flex items-center gap-4 mt-8 z-50"
                >
                  {/* Prev Button */}
                  <div
                    onClick={handlePrev}
                    className="relative w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#4ADE80] cursor-pointer transition-colors hover:bg-white"
                  >
                    <svg
                      className="w-6 h-6 text-green-500 pointer-events-none "  // <- yahan pointer-events-none important hai
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>

                  {/* Next Button */}
                  <div
                    onClick={handleNext}
                    className="relative w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#4ADE80] cursor-pointer transition-colors"
                  >
                    <svg
                      className="w-6 h-6 text-green-500 pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Side Content */}
            <div id='about' className="w-full lg:w-[48%] mb-12 lg:mb-0 flex flex-col items-center lg:items-start">
              {/* Heading Section */}
              <div className="relative w-full mb-6 lg:mb-8 max-w-[40rem] text-center lg:text-left">
                <div className="relative text-[2rem] sm:text-[2.5rem] md:text-[3rem] leading-[3.2rem] text-gray-100 font-bold">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:left-0 lg:translate-x-0 blur-[10px] text-gray-100/40">
                    <b>Loved By Industry</b>
                    <span className="font-semibold"> Leaders</span>
                  </div>
                  <div className="relative">
                    <b>Loved By Industry</b>
                    <span className="font-semibold"> Leaders</span>
                  </div>
                </div>

                {/* First Description */}
                <div className="mt-4 lg:mt-6 text-base sm:text-lg lg:text-xl leading-[150%] text-darkgray-100 max-w-full lg:max-w-[39rem] mx-auto lg:mx-0">
                  Node CLI scripts run fast in terminal environments, allowing developers to automate repeated tasks, manage files, configure projects, and test code efficiently across multiple environments.
                </div>

              </div>

              {/* Second Description */}
              <div className="mt-6 lg:mt-8 leading-[150%] text-darkgray-100 max-w-full lg:max-w-[39rem] mx-auto lg:mx-0 text-center lg:text-left">
                Node CLI workflow allows developers to run scripts for automation, file handling, testing, and project configuration. It simplifies repeated tasks while maintaining efficiency, speed, and control across different terminal environments.
              </div>

            </div>
          </div>
        </div>












        <div id='whatsinside' className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            {/* Heading - Always Centered */}
            <div className="relative mb-12 lg:mb-16 text-center">
              <h2 className="relative z-10 text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[3rem] font-bold leading-[1.1] text-gray-100">
                What’s Inside
              </h2>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[3rem] font-bold leading-[1.1] text-gray-100/70 blur-[10px]">
                What’s Inside
              </div>
            </div>


            {/* Main Grid - Stack on mobile, side by side on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">

              {/* Left Card - Design Info */}
              <div className="w-full">
                <div className="relative h-[11.5rem]">
                  {/* Gradient Text with Blur */}
                  <div className="absolute top-0 left-0">
                    <b className="relative z-10 text-[2.25rem] leading-[2.25rem] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                      Design
                    </b>
                    <b className="absolute top-0 left-0 text-[2.25rem] leading-[2.25rem] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 blur-[7px] opacity-75">
                      Design
                    </b>
                  </div>

                  {/* Subtitle */}
                  <div className="absolute top-[3rem] left-0 text-[1.25rem] leading-[1.25rem] font-medium text-gainsboro text-[#E5E5E5]">
                    interactive & responsive prototypes
                  </div>

                  {/* Description */}
                  <div className="absolute top-[5.5rem] left-0 text-[1rem] leading-[150%] whitespace-pre-wrap text-darkgray inline-block w-full max-w-[32.188rem] text-[#A3A3A3]">
                    Node CLI tools let developers run scripts for automation, testing, file handling, and project setup. They simplify repetitive tasks and help maintain workflow efficiency across terminal environments.
                  </div>
                </div>
              </div>

              {/* Right Card - Code Editor */}
              <div className="w-full">
                <div className="w-full max-w-full lg:max-w-2xl xl:max-w-3xl mx-auto lg:ml-auto shadow-[0px_5px_8px_rgba(0,0,0,0.15)] rounded-[4.22px] overflow-hidden bg-gray-200">
                  <div className="flex flex-col sm:flex-row h-auto sm:h-[22.375rem] lg:h-[25rem] xl:h-[28rem]">

                    {/* Sidebar */}
                    <div className="w-full sm:w-32 md:w-36 lg:w-40 backdrop-blur-[26px] bg-darkslategray flex flex-col">
                      {/* Header */}
                      <div className="flex items-center justify-between sm:justify-start py-2 px-3 gap-2 border-b border-gray-700">
                        <div className="flex items-center gap-1">
                          <div className="h-2 w-2 rounded-full bg-tomato" />
                          <div className="h-2 w-2 rounded-full bg-gold" />
                          <div className="h-2 w-2 rounded-full bg-forestgreen" />
                        </div>
                        <b className="text-xs sm:text-sm text-white">Editor</b>
                      </div>

                      {/* Icons Column - Vertical Layout like VS Code */}
                      <div className="flex flex-row items-center py-2 px-0 gap-3 border-b border-gray-700">
                        <img className="h-6 w-6 lg:h-7 lg:w-7 cursor-pointer hover:opacity-80" alt="" src={file} />
                        <img className="h-6 w-6 lg:h-7 lg:w-7 cursor-pointer hover:opacity-80" alt="" src={git} />
                        <img className="h-6 w-6 lg:h-7 lg:w-7 cursor-pointer hover:opacity-80" alt="" src={search} />
                        <img className="h-6 w-6 lg:h-7 lg:w-7 cursor-pointer hover:opacity-80" alt="" src={plugins} />

                      </div>

                      {/* File Tree */}
                      <div className="flex-1 flex flex-col py-2 text-xs sm:text-sm overflow-y-auto">
                        <div className="flex items-center py-1.5 px-3 gap-2 text-white hover:bg-gray-700 cursor-pointer">
                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={wispy} />

                          <span className="font-bold truncate">wispy</span>
                        </div>
                        <div className="flex items-center py-1.5 px-3 gap-2 text-white hover:bg-gray-700 cursor-pointer">
                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={greater} />
                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={files} />
                          <span className="font-medium truncate">.github</span>
                        </div>
                        <div className="flex items-center py-1.5 px-3 gap-2 text-white hover:bg-gray-700 cursor-pointer">
                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={greater} />
                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={files} />
                          <span className="font-medium truncate">node_modules</span>
                        </div>
                        <div className="flex items-center py-1.5 px-3 gap-2 text-white hover:bg-gray-700 cursor-pointer">
                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={down} />
                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={wispy} />
                          <span className="font-medium truncate">src</span>
                        </div>
                        <div className="flex items-center py-1.5 px-3 gap-2 text-white hover:bg-gray-700 cursor-pointer">

                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={file1} />
                          <span className="font-medium truncate">.gitignore</span>
                        </div>
                        <div className="flex items-center py-1.5 px-3 gap-2 bg-gray-600 text-white cursor-pointer">

                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={file1} />
                          <span className="font-medium truncate">index.js</span>
                        </div>
                        <div className="flex items-center py-1.5 px-3 gap-2 text-white hover:bg-gray-700 cursor-pointer">

                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={file1} />
                          <span className="font-medium truncate">README.md</span>
                        </div>
                      </div>
                    </div>

                    {/* Main Editor Area */}
                    <div className="flex-1 flex flex-col bg-gray-200">
                      {/* Tabs */}
                      <div className="flex items-center bg-gr-200 text-xs sm:text-sm overflow-x-auto">
                        <div className="flex items-center py-2 px-3 gap-2 bg-gray-300 text-white border-r border-gray-500 flex-shrink-0">
                          <img className="h-3.5 w-3.5 lg:h-4 lg:w-4" alt="" src={file1} />

                          <span className="font-medium">index.js</span>
                        </div>
                        <div className="flex items-center py-2 px-3 gap-2 text-white hover:bg-gray-300 flex-shrink-0 cursor-pointer">
                          <img className="h-3.5 w-3.5 lg:h-4 lg:w-4" alt="" src={file1} />

                          <span className="font-medium">README.md</span>
                        </div>

                      </div>

                      {/* Code Content */}
                      <div className="text-lightskyblue flex-1 flex p-3 sm:p-4 lg:p-5 gap-3 sm:gap-4 overflow-auto text-xs sm:text-sm font-mono bg-[#171717]">
                        {/* Line Numbers */}
                        <div className="text-gray-300 font-bold select-none flex-shrink-0 pr-3 border-r border-gray-300">
                          <div>1</div>
                          <div>2</div>
                          <div>3</div>
                          <div>4</div>
                          <div className="text-gray-100">5</div>
                          <div>6</div>
                          <div>7</div>
                          <div>8</div>
                          <div>9</div>
                          <div>10</div>
                          <div>11</div>
                          <div>12</div>
                          <div>13</div>
                          <div>14</div>
                          <div>15</div>
                          <div>16</div>
                          <div>17</div>
                          <div>18</div>
                          <div>19</div>
                          <div>20</div>
                          <div>21</div>
                        </div>

                        {/* Code */}
                        <div className="flex-1 text-gray-100 font-medium overflow-x-auto">
                          <div className="text-mediumseagreen">// Imports</div>
                          <div><span className="text-orchid">import</span> <span className="text-lightskyblue">mongoose</span>, &#123; <span className="text-lightskyblue">Schema</span> &#125; <span className="text-orchid">from</span> 'mongoose'</div>
                          <div>&nbsp;</div>
                          <div className="text-mediumseagreen">// Collection name</div>
                          <div><span className="text-orchid">export const</span> <span className="text-lightskyblue">collection</span> = 'Product'|</div>
                          <div>&nbsp;</div>
                          <div className="text-mediumseagreen">// Schema</div>
                          <div><span className="text-orchid">const</span> <span className="text-lightskyblue">schema</span> = <span className="text-orchid">new</span> Schema(&#123;</div>
                          <div>&nbsp;&nbsp;<span className="text-lightskyblue">name</span>: &#123;</div>
                          <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-lightskyblue">type</span>: String,</div>
                          <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-lightskyblue">required</span>: true</div>
                          <div>&nbsp;&nbsp;&#125;,</div>
                          <div>&nbsp;</div>
                          <div>&nbsp;&nbsp;<span className="text-lightskyblue">description</span>: &#123;</div>
                          <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-lightskyblue">type</span>: String</div>
                          <div>&nbsp;&nbsp;&#125;</div>
                          <div>&#125;, &#123;<span className="text-lightskyblue">timestamps</span>: true&#125;)</div>
                          <div>&nbsp;</div>
                          <div className="text-mediumseagreen">// Model</div>
                          <div><span className="text-orchid">export default</span> mongoose.model(<span className="text-lightskyblue">collection</span>, <span className="text-lightskyblue">schema</span>, <span className="text-lightskyblue">collection</span>)</div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="bg-gray-300 flex items-center justify-end py-1.5 px-3 gap-3 text-[0.5rem] sm:text-xs text-gray-100 overflow-x-auto border-t border-gray-400">
                        <span className="font-medium flex-shrink-0">LF</span>
                        <span className="font-medium flex-shrink-0">Line 5:36</span>
                        <span className="font-medium flex-shrink-0">UTF8</span>
                        <span className="font-medium flex-shrink-0">2 spaces</span>
                        <div className="flex items-center flex-shrink-0 gap-1.5">
                          <img className="h-3 w-3" alt="" src={git} />
                          <b className="font-bold">main</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

















        <div className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            {/* Main Grid - Stack on mobile, side by side on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">

              {/* 1. Code Editor (Ab Left par hai) */}
              <div className="w-full">
                {/* Alignment change: lg:ml-auto se lg:mr-auto kiya */}
                <div className="bg-gray-200 w-full max-w-full lg:max-w-2xl xl:max-w-3xl mx-auto lg:mr-auto shadow-[0px_5px_8px_rgba(0,0,0,0.15)] rounded-[4.22px] overflow-hidden">
                  <div className="flex flex-col sm:flex-row h-auto sm:h-[22.375rem] lg:h-[25rem] xl:h-[28rem]">

                    {/* Sidebar */}
                    <div className="w-full sm:w-32 md:w-36 lg:w-40 backdrop-blur-[26px] bg-darkslategray flex flex-col">
                      {/* Header */}
                      <div className="flex items-center justify-between sm:justify-start py-2 px-3 gap-2 border-b border-gray-700">
                        <div className="flex items-center gap-1">
                          <div className="h-2 w-2 rounded-full bg-tomato" />
                          <div className="h-2 w-2 rounded-full bg-gold" />
                          <div className="h-2 w-2 rounded-full bg-forestgreen" />
                        </div>
                        <b className="text-xs sm:text-sm text-gray-100">Editor</b>
                      </div>

                      {/* Icons Column - Vertical Layout like VS Code */}
                      <div className="flex flex-row items-center py-2 px-0 gap-3 border-b border-gray-700">
                        <img className="h-6 w-6 lg:h-7 lg:w-7 cursor-pointer hover:opacity-80" alt="" src={file} />
                        <img className="h-6 w-6 lg:h-7 lg:w-7 cursor-pointer hover:opacity-80" alt="" src={git} />
                        <img className="h-6 w-6 lg:h-7 lg:w-7 cursor-pointer hover:opacity-80" alt="" src={search} />
                        <img className="h-6 w-6 lg:h-7 lg:w-7 cursor-pointer hover:opacity-80" alt="" src={plugins} />

                      </div>

                      {/* File Tree */}
                      <div className="flex-1 flex flex-col py-2 text-xs sm:text-sm overflow-y-auto">
                        <div className="flex items-center py-1.5 px-3 gap-2 text-white hover:bg-gray-700 cursor-pointer">

                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={wispy} />
                          <span className="font-bold truncate">wispy</span>
                        </div>
                        <div className="flex items-center py-1.5 px-3 gap-2 text-white hover:bg-gray-700 cursor-pointer">
                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={greater} />
                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={files} />
                          <span className="font-medium truncate">.github</span>
                        </div>
                        <div className="flex items-center py-1.5 px-3 gap-2 text-white hover:bg-gray-700 cursor-pointer">
                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={greater} />
                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={files} />
                          <span className="font-medium truncate">node_modules</span>
                        </div>
                        <div className="flex items-center py-1.5 px-3 gap-2 text-white hover:bg-gray-700 cursor-pointer">
                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={down} />
                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={wispy} />
                          <span className="font-medium truncate">src</span>
                        </div>
                        <div className="flex items-center py-1.5 px-3 gap-2 text-white hover:bg-gray-700 cursor-pointer">

                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={file1} />
                          <span className="font-medium truncate">.gitignore</span>
                        </div>
                        <div className="flex items-center py-1.5 px-3 gap-2 bg-gray-600 text-gray-100 cursor-pointer">

                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={file1} />
                          <span className="font-medium truncate">index.js</span>
                        </div>
                        <div className="flex items-center py-1.5 px-3 gap-2 text-white hover:bg-gray-700 cursor-pointer">

                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={file1} />
                          <span className="font-medium truncate">README.md</span>
                        </div>
                      </div>
                    </div>

                    {/* Main Editor Area */}
                    <div className="flex-1 flex flex-col bg-gray-200">
                      {/* Tabs */}
                      <div className="flex items-center bg-gray-200 text-xs sm:text-sm overflow-x-auto">
                        <div className="flex items-center py-2 px-3 gap-2 bg-gray-200 text-gray-100 border-r border-gray-500 flex-shrink-0">
                          <img className="h-3.5 w-3.5 lg:h-4 lg:w-4" alt="" src={file1} />

                          <span className="font-medium">index.js</span>
                        </div>
                        <div className="flex items-center py-2 px-3 gap-2 text-gray-100 hover:bg-gray-300 flex-shrink-0 cursor-pointer">
                          <img className="h-3.5 w-3.5 lg:h-4 lg:w-4" alt="" src={file1} />

                          <span className="font-medium">README.md</span>
                        </div>

                      </div>

                      {/* Code Content */}
                      <div className="bg-[#171717] flex-1 flex p-3 sm:p-4 lg:p-5 gap-3 sm:gap-4 overflow-auto text-xs sm:text-sm font-mono">
                        {/* Line Numbers */}
                        <div className="text-gray-200 font-bold select-none flex-shrink-0 pr-3 border-r border-gray-300">
                          <div>1</div>
                          <div>2</div>
                          <div>3</div>
                          <div>4</div>
                          <div className="text-gray-100">5</div>
                          <div>6</div>
                          <div>7</div>
                          <div>8</div>
                          <div>9</div>
                          <div>10</div>
                          <div>11</div>
                          <div>12</div>
                          <div>13</div>
                          <div>14</div>
                          <div>15</div>
                          <div>16</div>
                          <div>17</div>
                          <div>18</div>
                          <div>19</div>
                          <div>20</div>
                          <div>21</div>
                        </div>

                        {/* Code */}
                        <div className=" flex-1 text-gray-100 font-medium overflow-x-auto">
                          <div className="text-mediumseagreen">// Imports</div>
                          <div><span className="text-orchid">import</span> <span className="text-lightskyblue">mongoose</span>, &#123; <span className="text-lightskyblue">Schema</span> &#125; <span className="text-orchid">from</span> 'mongoose'</div>
                          <div>&nbsp;</div>
                          <div className="text-mediumseagreen">// Collection name</div>
                          <div><span className="text-orchid">export const</span> <span className="text-lightskyblue">collection</span> = 'Product'|</div>
                          <div>&nbsp;</div>
                          <div className="text-mediumseagreen">// Schema</div>
                          <div><span className="text-orchid">const</span> <span className="text-lightskyblue">schema</span> = <span className="text-orchid">new</span> Schema(&#123;</div>
                          <div>&nbsp;&nbsp;<span className="text-lightskyblue">name</span>: &#123;</div>
                          <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-lightskyblue">type</span>: String,</div>
                          <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-lightskyblue">required</span>: true</div>
                          <div>&nbsp;&nbsp;&#125;,</div>
                          <div>&nbsp;</div>
                          <div>&nbsp;&nbsp;<span className="text-lightskyblue">description</span>: &#123;</div>
                          <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-lightskyblue">type</span>: String</div>
                          <div>&nbsp;&nbsp;&#125;</div>
                          <div>&#125;, &#123;<span className="text-lightskyblue">timestamps</span>: true&#125;)</div>
                          <div>&nbsp;</div>
                          <div className="text-mediumseagreen">// Model</div>
                          <div><span className="text-orchid">export default</span> mongoose.model(<span className="text-lightskyblue">collection</span>, <span className="text-lightskyblue">schema</span>, <span className="text-lightskyblue">collection</span>)</div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="bg-gray-300 flex items-center justify-end py-1.5 px-3 gap-3 text-[0.5rem] sm:text-xs text-gray-100 overflow-x-auto border-t border-gray-400">
                        <span className="font-medium flex-shrink-0">LF</span>
                        <span className="font-medium flex-shrink-0">Line 5:36</span>
                        <span className="font-medium flex-shrink-0">UTF8</span>
                        <span className="font-medium flex-shrink-0">2 spaces</span>
                        <div className="flex items-center flex-shrink-0 gap-1.5">
                          <img className="h-3 w-3" alt="" src={git} />
                          <b className="font-bold">main</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. "Code" Content (Ab Right par hai aur Responsive hai) */}
              <div className="w-full text-left font-inter">
                {/* Responsive structure using flexbox */}
                <div className="flex flex-col gap-3 sm:gap-4">

                  {/* Heading with responsive text */}

                  {/* Heading with glow effect */}
                  <div className="relative inline-block">
                    {/* Blurred glow layer */}
                    <b className="absolute top-0 left-0 text-3xl sm:text-4xl lg:text-[2.25rem] leading-tight 
     text-green-400 blur-[8px] opacity-70 select-none">
                      Code
                    </b>

                    {/* Sharp gradient text */}
                    <b className="relative text-3xl sm:text-4xl lg:text-[2.25rem] leading-tight 
     text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                      Code
                    </b>
                  </div>









                  {/* Subtitle with responsive text */}
                  <div className="text-lg sm:text-xl lg:text-[1.25rem] leading-snug font-medium text-gainsboro text-[#E5E5E5]">
                    quickly with developer-friendly code
                  </div>

                  {/* Description with responsive text and max-width */}
                  <div className="text-base sm:text-lg leading-relaxed text-darkgray max-w-lg text-[#A3A3A3]">
                    Node CLI scripts allow developers to automate tasks, handle files, configure projects, and test code quickly while keeping workflows efficient and consistent across different environments.
                  </div>


                </div>
              </div>

            </div>
          </div>
        </div>













        <div className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">



            {/* Main Grid - Stack on mobile, side by side on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">

              {/* Left Card - Design Info */}
              <div className="w-full">
                <div className="relative h-[11.5rem]">
                  {/* Gradient Text with Blur */}
                  <div className="absolute top-0 left-0">
                    <b className="relative z-10 text-[2.25rem] leading-[2.25rem] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                      Collaborate
                    </b>
                    <b className="absolute top-0 left-0 text-[2.25rem] leading-[2.25rem] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 blur-[7px] opacity-75">
                      Collaborate
                    </b>
                  </div>

                  {/* Subtitle */}
                  <div className="absolute top-[3rem] left-0 text-[1.25rem] leading-[1.25rem] font-medium text-gainsboro text-[#E5E5E5]">
                    in real-time & save time
                  </div>

                  {/* Description */}
                  <div className="absolute top-[5.5rem] left-0 text-[1rem] leading-[150%] whitespace-pre-wrap text-darkgray inline-block w-full max-w-[32.188rem] text-[#A3A3A3]">
                    Node CLI commands let developers run scripts for automation, file management, testing, and project setup. They simplify repeated tasks while keeping workflows fast and efficient.
                  </div>

                </div>
              </div>

              {/* Right Card - Code Editor */}
              <div className="bg-gray-200 w-full">
                <div className="w-full max-w-full lg:max-w-2xl xl:max-w-3xl mx-auto lg:ml-auto shadow-[0px_5px_8px_rgba(0,0,0,0.15)] rounded-[4.22px] overflow-hidden">
                  <div className="flex flex-col sm:flex-row h-auto sm:h-[22.375rem] lg:h-[25rem] xl:h-[28rem]">

                    {/* Sidebar */}
                    <div className="w-full sm:w-32 md:w-36 lg:w-40 backdrop-blur-[26px] bg-darkslategray flex flex-col">
                      {/* Header */}
                      <div className="flex items-center justify-between sm:justify-start py-2 px-3 gap-2 border-b border-gray-700">
                        <div className="flex items-center gap-1">
                          <div className="h-2 w-2 rounded-full bg-tomato" />
                          <div className="h-2 w-2 rounded-full bg-gold" />
                          <div className="h-2 w-2 rounded-full bg-forestgreen" />
                        </div>
                        <b className="text-xs sm:text-sm text-gray-100">Editor</b>
                      </div>

                      {/* Icons Column - Vertical Layout like VS Code */}
                      <div className="flex flex-row items-center py-2 px-0 gap-3 border-b border-gray-700">
                        <img className="h-6 w-6 lg:h-7 lg:w-7 cursor-pointer hover:opacity-80" alt="" src={file} />
                        <img className="h-6 w-6 lg:h-7 lg:w-7 cursor-pointer hover:opacity-80" alt="" src={git} />
                        <img className="h-6 w-6 lg:h-7 lg:w-7 cursor-pointer hover:opacity-80" alt="" src={search} />
                        <img className="h-6 w-6 lg:h-7 lg:w-7 cursor-pointer hover:opacity-80" alt="" src={plugins} />

                      </div>

                      {/* File Tree */}
                      <div className=" flex-1 flex flex-col py-2 text-xs sm:text-sm overflow-y-auto">
                        <div className="flex items-center py-1.5 px-3 gap-2 text-white hover:bg-gray-700 cursor-pointer">

                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={wispy} />
                          <span className="font-bold truncate">wispy</span>
                        </div>
                        <div className="flex items-center py-1.5 px-3 gap-2 text-gray-100 hover:bg-gray-700 cursor-pointer">
                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={greater} />
                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={files} />
                          <span className="font-medium truncate">.github</span>
                        </div>
                        <div className="flex items-center py-1.5 px-3 gap-2 text-gray-100 hover:bg-gray-700 cursor-pointer">
                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={greater} />
                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={files} />
                          <span className="font-medium truncate">node_modules</span>
                        </div>
                        <div className="flex items-center py-1.5 px-3 gap-2 text-gray-100 hover:bg-gray-700 cursor-pointer">
                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={down} />
                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={wispy} />
                          <span className="font-medium truncate">src</span>
                        </div>
                        <div className="flex items-center py-1.5 px-3 gap-2 text-gray-100 hover:bg-gray-700 cursor-pointer">

                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={file1} />
                          <span className="font-medium truncate">.gitignore</span>
                        </div>
                        <div className="flex items-center py-1.5 px-3 gap-2 bg-gray-600 text-gray-100 cursor-pointer">

                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={file1} />
                          <span className="font-medium truncate">index.js</span>
                        </div>
                        <div className="flex items-center py-1.5 px-3 gap-2 text-gray-100 hover:bg-gray-700 cursor-pointer">

                          <img className="h-4 w-4 lg:h-5 lg:w-5" alt="" src={file1} />
                          <span className="font-medium truncate">README.md</span>
                        </div>
                      </div>
                    </div>

                    {/* Main Editor Area */}
                    <div className="flex-1 flex flex-col bg-gray-100">
                      {/* Tabs */}
                      <div className="flex items-center bg-gray-200 text-xs sm:text-sm overflow-x-auto">
                        <div className="flex items-center py-2 px-3 gap-2 bg-gray-600 text-gray-100 border-r border-gray-500 flex-shrink-0">
                          <img className="h-3.5 w-3.5 lg:h-4 lg:w-4" alt="" src={file1} />

                          <span className="font-medium">index.js</span>
                        </div>
                        <div className="flex items-center py-2 px-3 gap-2 text-gray-100 hover:bg-gray-300 flex-shrink-0 cursor-pointer">
                          <img className="h-3.5 w-3.5 lg:h-4 lg:w-4" alt="" src={file1} />

                          <span className="font-medium">README.md</span>
                        </div>

                      </div>

                      {/* Code Content */}
                      <div className="flex-1 flex p-3 sm:p-4 lg:p-5 gap-3 sm:gap-4 overflow-auto text-xs sm:text-sm font-mono bg-[#171717]">
                        {/* Line Numbers */}
                        <div className="text-gray-200 font-bold select-none flex-shrink-0 pr-3 border-r border-gray-300">
                          <div>1</div>
                          <div>2</div>
                          <div>3</div>
                          <div>4</div>
                          <div className="text-gray-100">5</div>
                          <div>6</div>
                          <div>7</div>
                          <div>8</div>
                          <div>9</div>
                          <div>10</div>
                          <div>11</div>
                          <div>12</div>
                          <div>13</div>
                          <div>14</div>
                          <div>15</div>
                          <div>16</div>
                          <div>17</div>
                          <div>18</div>
                          <div>19</div>
                          <div>20</div>
                          <div>21</div>
                        </div>

                        {/* Code */}
                        <div className=" flex-1 text-gray-100 font-medium overflow-x-auto">
                          <div className="text-mediumseagreen">// Imports</div>
                          <div><span className="text-orchid">import</span> <span className="text-lightskyblue">mongoose</span>, &#123; <span className="text-lightskyblue">Schema</span> &#125; <span className="text-orchid">from</span> 'mongoose'</div>
                          <div>&nbsp;</div>
                          <div className="text-mediumseagreen">// Collection name</div>
                          <div><span className="text-orchid">export const</span> <span className="text-lightskyblue">collection</span> = 'Product'|</div>
                          <div>&nbsp;</div>
                          <div className="text-mediumseagreen">// Schema</div>
                          <div><span className="text-orchid">const</span> <span className="text-lightskyblue">schema</span> = <span className="text-orchid">new</span> Schema(&#123;</div>
                          <div>&nbsp;&nbsp;<span className="text-lightskyblue">name</span>: &#123;</div>
                          <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-lightskyblue">type</span>: String,</div>
                          <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-lightskyblue">required</span>: true</div>
                          <div>&nbsp;&nbsp;&#125;,</div>
                          <div>&nbsp;</div>
                          <div>&nbsp;&nbsp;<span className="text-lightskyblue">description</span>: &#123;</div>
                          <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-lightskyblue">type</span>: String</div>
                          <div>&nbsp;&nbsp;&#125;</div>
                          <div>&#125;, &#123;<span className="text-lightskyblue">timestamps</span>: true&#125;)</div>
                          <div>&nbsp;</div>
                          <div className="text-mediumseagreen">// Model</div>
                          <div><span className="text-orchid">export default</span> mongoose.model(<span className="text-lightskyblue">collection</span>, <span className="text-lightskyblue">schema</span>, <span className="text-lightskyblue">collection</span>)</div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="bg-gray-300 flex items-center justify-end py-1.5 px-3 gap-3 text-[0.5rem] sm:text-xs text-gray-100 overflow-x-auto border-t border-gray-400">
                        <span className="font-medium flex-shrink-0">LF</span>
                        <span className="font-medium flex-shrink-0">Line 5:36</span>
                        <span className="font-medium flex-shrink-0">UTF8</span>
                        <span className="font-medium flex-shrink-0">2 spaces</span>
                        <div className="flex items-center flex-shrink-0 gap-1.5">
                          <img className="h-3 w-3" alt="" src={git} />
                          <b className="font-bold">main</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>















        {/* FAQ Section */}
        <div id='faq' className="relative w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-16 text-center">

          {/* Heading */}
          <div className="relative mb-16 flex flex-col items-center justify-center max-w-4xl mx-auto">
            <b className="block text-[2rem] sm:text-[2.5rem] md:text-[3rem] leading-[3rem] text-gray-100 text-center">
              Frequently Asked Questions
            </b>
            <b className="absolute text-[2rem] sm:text-[2.5rem] md:text-[3rem] leading-[3rem] text-gray-1300 blur-[10px] opacity-50 text-center">
              Frequently Asked Questions
            </b>
          </div>

          {/* Questions Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-16 md:gap-y-12 max-w-6xl mx-auto">

            {/* Q1 — Text Glow Added */}
            <div className="text-gray-100 max-w-md mx-auto md:mx-0">
              <b className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300 text-[1.3rem] sm:text-[1.5rem] leading-[1.5rem] mb-2 text-center md:text-left drop-shadow-[0_0_12px_rgba(74,222,128,0.8)]">
                What if I don't like it?
              </b>
              <div className="text-[1rem] leading-[150%] text-center md:text-left">
                Node CLI tools allow developers to automate scripts, manage files, test code, and configure projects efficiently. They simplify repetitive tasks while keeping workflows consistent and fast.
              </div>

            </div>

            {/* Q2 */}
            <div className="text-darkgray-100 max-w-md mx-auto md:mx-0">
              <b className="block text-gainsboro-200 text-[1.3rem] sm:text-[1.5rem] leading-[1.5rem] mb-2 text-center md:text-left">
                Is there a way I can talk to someone if I get stuck?
              </b>
              <div className="text-[1rem] leading-[150%] text-center md:text-left">
                Node CLI scripts let developers automate tasks, manage files, test code, and configure projects quickly. They make repeated work easier while keeping workflows efficient and reliable.
              </div>

            </div>

            {/* Q3 */}
            <div className="text-darkgray-100 max-w-md mx-auto md:mx-0">
              <b className="block text-gainsboro-200 text-[1.3rem] sm:text-[1.5rem] leading-[1.5rem] mb-2 text-center md:text-left">
                What if I fall behind?
              </b>
              <div className="text-[1rem] leading-[150%] text-center md:text-left">
                Node CLI commands allow developers to automate scripts, handle files, run tests, and configure projects efficiently. They simplify repetitive work and speed up daily development tasks.
              </div>

            </div>

            {/* Q4 */}
            <div className="text-darkgray-100 max-w-md mx-auto md:mx-0">
              <b className="block text-gainsboro-200 text-[1.3rem] sm:text-[1.5rem] leading-[1.5rem] mb-2 text-center md:text-left">
                What if I don't have a design background?
              </b>
              <div className="text-[1rem] leading-[150%] text-center md:text-left">
                Node CLI scripts help developers automate tasks, manage files, run tests, and set up projects efficiently. They make repetitive work simpler and speed up daily development workflows.
              </div>

            </div>
          </div>
        </div>













        {/* //Authentiction */}


        <div id='testimonials' className="relative flex flex-col items-center justify-center my-20 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto">
          {/* Title */}
          <div className="relative text-center">
            <b className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] text-gray-100 leading-[2.5rem] md:leading-[3.5rem] tracking-[-0.03em]">
              Lightning fast
            </b>
            <b className="absolute inset-0 text-[2rem] sm:text-[2.5rem] md:text-[3rem] text-gray-1300 leading-[2.5rem] md:leading-[3.5rem] tracking-[-0.03em] filter blur-[10px]">
              Lightning fast
            </b>
          </div>
          {/* Description */}
          <p className="mt-6 text-center text-base sm:text-lg md:text-xl text-gray-100 leading-[1.5] max-w-3xl">
            Node CLI scripts allow developers to automate tasks efficiently. <br /> They manage files, run tests, and configure projects quickly. <br /> Scripts simplify repetitive work for faster development.
          </p>

          {/* Form */}
          <form className="mt-10 flex flex-col sm:flex-row items-center w-full max-w-2xl gap-0">
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 w-full sm:w-auto h-14 px-5 rounded-t-md sm:rounded-l-md sm:rounded-tr-none border border-green-400 bg-darkslategray-100 text-white placeholder-gray-400 placeholder:text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="w-full sm:w-40 h-14 rounded-b-md sm:rounded-r-md sm:rounded-bl-none bg-gradient-to-r from-green-400 to-green-300 text-gray-100 font-medium flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 transition-opacity"
            >
              <span>Subscribe</span>
              <img src={rights} alt="" className="w-4 h-4" />
            </button>
          </form>
        </div>







        {/* Footer */}

        <div className="w-full bg-gray-200 text-darkgray font-inter py-10 px-6 md:px-16 lg:px-20 mt-40">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">

            {/* Left Section */}
            <div className="w-full md:w-1/3">
              <h2 className="text-5xl sm:text-6xl font-bold text-green-500 bg-transparent text-center md:text-left">
                Node CLI
              </h2>

              <p className="text-sm mt-4 text-darkgray leading-relaxed text-gray-100">
                Node CLI commands help automate tasks, manage files, run tests, and configure projects efficiently for developers working across different terminal-based development workflows.
              </p>

            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-3 gap-10 text-gray-100">
              <div>
                <h3 className="text-lg font-medium mb-4">Product</h3>
                <ul className="space-y-2 text-darkgray">
                  <li>Proin.</li>
                  <li>Mattis.</li>
                  <li>Nunc.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Plan</h3>
                <ul className="space-y-2 text-darkgray">
                  <li>Proin.</li>
                  <li>Mattis.</li>
                  <li>Nunc.</li>
                  <li>Mattis.</li>
                  <li>Nunc.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Services</h3>
                <ul className="space-y-2 text-darkgray">
                  <li>Proin.</li>
                  <li>Mattis.</li>
                  <li>Nunc.</li>
                  <li>Mattis.</li>
                  <li>Nunc.</li>
                  <li>Mattis.</li>
                </ul>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-[12.5rem] text-gray-100">
              <b className="block text-lg mb-4">Follow me</b>
              <div className="flex gap-4">
                {/* Facebook */}
                <a href="http://www.facebook.com" target="_blank" className="hover:scale-110 transition-transform duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 text-blue-600" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495v-9.294H9.691V11.07h3.129V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.919.001c-1.505 0-1.797.716-1.797 1.765v2.316h3.59l-.467 3.637h-3.123V24h6.116C23.406 24 24 23.406 24 22.676V1.325C24 .593 23.406 0 22.675 0z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a href="http://www.instagram.com" target="_blank" className="hover:scale-110 transition-transform duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 text-pink-500" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.246 2.427.415a4.92 4.92 0 011.675 1.09 4.92 4.92 0 011.09 1.675c.169.457.359 1.257.415 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.246 1.97-.415 2.427a4.92 4.92 0 01-1.09 1.675 4.92 4.92 0 01-1.675 1.09c-.457.169-1.257.359-2.427.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.246-2.427-.415a4.92 4.92 0 01-1.675-1.09 4.92 4.92 0 01-1.09-1.675c-.169-.457-.359-1.257-.415-2.427C2.175 15.787 2.163 15.407 2.163 12s.012-3.584.07-4.85c.056-1.17.246-1.97.415-2.427A4.92 4.92 0 013.738 3.048a4.92 4.92 0 011.675-1.09c.457-.169 1.257-.359 2.427-.415C8.416 1.013 8.796 1 12 1s3.584.012 4.85.07zM12 0C8.741 0 8.332.014 7.052.072 5.773.13 4.73.342 3.89.708A6.88 6.88 0 001.635 2.96c-.366.84-.578 1.883-.636 3.162C.942 7.402.928 7.811.928 11.07v1.86c0 3.259.014 3.668.071 4.948.058 1.279.27 2.322.636 3.162a6.88 6.88 0 002.255 2.252c.84.366 1.883.578 3.162.636C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.071c1.279-.058 2.322-.27 3.162-.636a6.88 6.88 0 002.252-2.255c.366-.84.578-1.883.636-3.162.058-1.28.072-1.689.072-4.948v-1.86c0-3.259-.014-3.668-.072-4.948-.058-1.279-.27-2.322-.636-3.162A6.88 6.88 0 0020.11.708c-.84-.366-1.883-.578-3.162-.636C15.668.014 15.259 0 12 0z" />
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.163a4.001 4.001 0 110-8.002 4.001 4.001 0 010 8.002zM18.406 4.594a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>

                {/* Twitter/X */}
                <a href="http://www.twitter.com" target="_blank" className="hover:scale-110 transition-transform duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 text-sky-500" viewBox="0 0 24 24">
                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.932 4.932 0 002.163-2.723 9.86 9.86 0 01-3.127 1.195A4.916 4.916 0 0016.616 3c-2.717 0-4.924 2.206-4.924 4.923 0 .39.045.765.127 1.124C7.728 8.832 4.1 6.864 1.67 3.905a4.822 4.822 0 00-.666 2.475 4.92 4.92 0 002.188 4.1 4.903 4.903 0 01-2.23-.616v.062c0 2.385 1.693 4.374 3.946 4.827a4.935 4.935 0 01-2.224.084 4.926 4.926 0 004.6 3.417A9.867 9.867 0 010 21.543a13.91 13.91 0 007.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href="http://www.linkdin.com" target="_blank" className="hover:scale-110 transition-transform duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 text-blue-700" viewBox="0 0 24 24">
                    <path d="M20.447 20.452H17.21V14.87c0-1.332-.027-3.047-1.857-3.047-1.858 0-2.143 1.45-2.143 2.948v5.681h-3.236V9h3.104v1.561h.045c.434-.823 1.494-1.688 3.072-1.688 3.285 0 3.89 2.163 3.89 4.977v6.602zM5.337 7.433a1.88 1.88 0 110-3.759 1.88 1.88 0 010 3.759zm1.616 13.019H3.721V9h3.232v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>


          </div>

          <div className="border-t border-gray-100 mt-10 pt-6 text-center text-sm text-gray-100">
            © 2025 Nexa | All rights reserved.
          </div>
        </div>








      </div>
    </>
  )
}

export default Home
