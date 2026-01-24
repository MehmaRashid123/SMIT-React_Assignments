import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Logo = () => {
  const leftWing = useRef(null);
  const rightWing = useRef(null);

  useEffect(() => {
    // 1. LEFT WING - 3D Flap
    gsap.to(leftWing.current, {
      rotateX: -60,         // 3D mein fold hona (upar-neeche flapping)
      rotateZ: -10,        // Halka sa side angle
      duration: 0.4,       // Flap ki speed
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      transformOrigin: "bottom right", // 🔑 Ye corner 'e' ke sath stuck rahega
    });

    // 2. RIGHT WING - 3D Flap (Mirror)
    gsap.to(rightWing.current, {
      rotateX: -50,
      rotateZ: 10,
      duration: 0.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      transformOrigin: "bottom left",  // 🔑 Ye corner stuck rahega
      delay: 0.1,          // Thoda sa gap taake mechanical na lage
    });
  }, []);

  return (
    // 'perspective' se 3D rotation asli wing jaisi lagti hai
    <div style={{ perspective: "1000px" }} className="relative w-12  flex left-8 bottom-2 items-end justify-center">
      
      {/* LEFT WING (Peeche wali patti) */}
      <img
        ref={leftWing}
        src="/single-leaf.png" 
        alt="wing-left"
        className="absolute w-28  h-15 opacity-70"
        style={{ transform: "rotateZ(-25deg)" }} 
      />

{/* LEFT WING (Peeche wali patti) */}
      <img
        ref={rightWing}
        src="/single-leaf.png" 
        alt="wing-left"
        className="absolute w-28 rotate-6 h-15 opacity-70"
        style={{ transform: "rotateZ(25deg)" }} 
      />
     

      

    </div>
  );
};

export default Logo;