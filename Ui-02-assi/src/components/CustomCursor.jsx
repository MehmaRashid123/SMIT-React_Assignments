import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Spring animation cursor ko smooth banati hai
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      // Mouse ki position update karna (10 minus kiya hai taake ball center mein rahe)
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
        backgroundColor: "#7bdcb5", // Mint color
      }}
      className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_#7bdcb5]"
      animate={{
        scale: [1, 1.1, 1], // Pulse effect
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    />
  );
};

export default CustomCursor;