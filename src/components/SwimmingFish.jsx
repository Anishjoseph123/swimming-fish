import { motion } from "framer-motion";
import fish from "../assets/fish.png";

export default function SwimmingFish() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-blue-300 via-blue-500 to-blue-900">
      {/* Fish */}
      <motion.img
        src={fish}
        alt="fish"
        className="absolute w-24"
        initial={{ x: -150, y: 200 }}
        animate={{
          x: ["0%", "100%"],
          y: [200, 180, 220, 200],
        }}
        transition={{
          x: {
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Bubbles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 w-3 h-3 bg-white rounded-full opacity-70"
          style={{ left: `${Math.random() * 100}%` }}
          animate={{
            y: [-20, -600],
            opacity: [0.7, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}
