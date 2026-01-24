import React, { useEffect, useRef } from "react";
import Ball from "../utils/Ball";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    // Context use karne se React mein animation sahi chalti hai
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%", // Jab footer ka top screen ke bilkul neeche ho
          end: "top 50%",
          toggleActions: "play none none reverse",
          // markers: true, // Animation check karne ke liye is line ko uncomment karein
        },
      });

      // 1. Man animation
      tl.from(".man-img", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // 2. Left and Right Plants
      tl.from(".plant-l", { x: -80, opacity: 0, duration: 0.8 }, "-=0.5");
      tl.from(".plant-r", { x: 80, opacity: 0, duration: 0.8 }, "-=0.8");

      // 3. Background Text "love"
      tl.from(".love-bg", { 
        scale: 0.8, 
        opacity: 0, 
        duration: 1 
      }, "-=0.6");

      // 4. Floating Bird & Leaf
      tl.from(".float-item", { 
        y: 30, 
        opacity: 0, 
        stagger: 0.2 
      }, "-=0.4");

    }, footerRef); // scope to footerRef

    return () => ctx.revert(); // cleanup animation on unmount
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="relative w-full h-[350px] flex items-end justify-center overflow-hidden bg-white mt-20"
    >
      
      {/* 1. Background "love" Text */}
      <div className="love-bg absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-10">
        <h1 className="text-[200px] font-serif italic text-gray-400 -translate-x-32">
          love
        </h1>
      </div>

      {/* 2. Left Plant */}
      <img
        src="/plant2.png" 
        alt="Plant Left"
        className="plant-l absolute left-10 bottom-0 h-[250px] object-contain"
      />

      {/* 3. Center Illustration (Man on Bench) */}
      <div className="man-img relative z-10 mb-[-20px] -right-60">
        <img
          src="/footer-man.png"
          alt="Man playing guitar"
          className="h-[280px] object-contain"
        />
        
        {/* Floating Leaf */}
        <div className="float-item absolute -top-9 -left-20">
             <img src="/leaf.png" alt="heart" className="w-16 rotate-12" />
        </div>

        {/* Small Bird */}
        <div className="float-item absolute top-10 -left-40">
             <img src="/bird2.png" alt="bird" className="w-12" />
        </div>
      </div>

      {/* 4. Right Plant */}
      <img
        src="/plant2.png" 
        alt="Plant Right"
        className="plant-r absolute right-10 bottom-0 h-[250px] object-contain scale-x-[-1]" 
      />

      {/* 5. Floating Balls */}
      <div className="float-item"><Ball bgColor="#fce4ec" className="absolute top-10 left-[15%] w-4 h-4" /></div>
      <div className="float-item"><Ball bgColor="#fb6962" className="absolute top-[40%] left-[38%] w-3 h-3 rotate-45" /></div>
      <div className="float-item"><Ball bgColor="#7bdcb5" className="absolute bottom-10 left-[40%] w-3 h-3" /></div>
      <div className="float-item"><Ball bgColor="#fce4ec" className="absolute top-24 right-[18%] w-4 h-4" /></div>
      
    </footer>
  );
};

export default Footer;