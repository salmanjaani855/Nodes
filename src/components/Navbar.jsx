import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import dot from '../assets/dot.svg'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center relative text-gainsboro-200 font-inter w-full">
      {/* Background Box */}
      <div className="absolute top-[1.75rem] shadow-[0px_50.83258056640625px_72.99px_-46.92px_rgba(255,_255,_255,_0.5)_inset,_0px_-16.94419288635254px_11.73px_-18.25px_rgba(255,_255,_255,_0.56)_inset,_0px_9.123798370361328px_14.34px_-5.21px_rgba(255,_255,_255,_0.45)_inset] [backdrop-filter:blur(50px)] rounded-lg bg-silver w-[66rem] h-[4.25rem] max-w-[90%] pointer-events-none" />

      {/* Hamburger Icon */}
      <div
        className="absolute top-[2.5rem] right-6 sm:right-10 z-50 cursor-pointer md:hidden pointer-events-auto"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </div>

      {/* Home + arrow */}
      <div className="absolute top-[3rem] left-1/2 -translate-x-[27rem] sm:-translate-x-[22rem] md:-translate-x-[24rem] lg:-translate-x-[27rem] text-center z-10 pointer-events-auto">
        <a href="/" className="tracking-tight leading-[1rem] font-medium hover:text-green-600">Home</a>
        <img src={dot} className="mt-1 mx-auto w-[0.5rem] h-[0.5rem]" alt="" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex absolute top-[3.375rem] left-1/2 -translate-x-1/2 gap-[3.8rem] z-10 pointer-events-auto">

        <a href="#partner" className="relative font-medium text-center transition-all duration-300 hover:text-green-500 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-2 after:w-2 after:bg-green-500 after:rounded-full after:opacity-0 hover:after:opacity-100 hover:underline underline-offset-4">Partners</a>

        <a href="#about" className="relative font-medium text-center transition-all duration-300 hover:text-green-500 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-2 after:w-2 after:bg-green-500 after:rounded-full after:opacity-0 hover:after:opacity-100 hover:underline underline-offset-4">About</a>

        <a href="#pricing" className="relative font-medium text-center transition-all duration-300 hover:text-green-500 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-2 after:w-2 after:bg-green-500 after:rounded-full after:opacity-0 hover:after:opacity-100 hover:underline underline-offset-4">Pricing</a>

        <a href="#testimonials" className="relative font-medium text-center transition-all duration-300 hover:text-green-500 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-2 after:w-2 after:bg-green-500 after:rounded-full after:opacity-0 hover:after:opacity-100 hover:underline underline-offset-4">Testimonials</a>

        <a href="#whatsinside" className="relative font-medium text-center transition-all duration-300 hover:text-green-500 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-2 after:w-2 after:bg-green-500 after:rounded-full after:opacity-0 hover:after:opacity-100 hover:underline underline-offset-4">What'sinside</a>

        <a href="#faq" className="relative font-medium text-center transition-all duration-300 hover:text-green-500 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-2 after:w-2 after:bg-green-500 after:rounded-full after:opacity-0 hover:after:opacity-100 hover:underline underline-offset-4">F.A.Q</a>

      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[5.5rem] left-0 w-full bg-gray-400/70 backdrop-blur-md flex flex-col items-center py-4 gap-4 font-medium text-white z-40 md:hidden">
          <a href="#home" onClick={() => setOpen(false)} className="hover:text-gray-200">Home</a>
          <a href="#partner" onClick={() => setOpen(false)} className="hover:text-gray-200">Partners</a>
          <a href="#about" onClick={() => setOpen(false)} className="hover:text-gray-200">About</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="hover:text-gray-200">Pricing</a>
          <a href="#testimonials" onClick={() => setOpen(false)} className="hover:text-gray-200">Testimonials</a>
          <a href="#whatsinside" onClick={() => setOpen(false)} className="hover:text-gray-200">What's inside</a>
          <a href="#faq" onClick={() => setOpen(false)} className="hover:text-gray-200">F.A.Q</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;