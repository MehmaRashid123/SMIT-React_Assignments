import { motion } from "framer-motion";

// 1. "className" prop add kiya taaki bahar se position de sakein
export default function Ball({ bgColor = "#7bdcb5", className }) { 
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            // Scale ko 1 rakhein taaki ball poori dikhe, 0.2 bahut chota ho jayega
            animate={{ opacity: 0.3, scale: 1 }} 
            transition={{
                duration: 0.8,
                scale: { type: "spring", bounce: 0.5 },
            }}
            // 2. `${className}` add kiya aur "absolute" default rakha
            className={`absolute rounded-full animate-pulse ${className}`}
            style={{
                width: 20,  // Size thoda bada rakha hai taaki glow dikhe
                height: 20,
                backgroundColor: bgColor, 
            }}
        />
    )
}