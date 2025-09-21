import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaFire, FaCheck, FaMobileAlt } from "react-icons/fa";

const LogoSection = () => {
  const highlights = [
    { text: "10+ Years of Excellence", icon: <FaStar size={32} /> },
    { text: "99% Success Rate", icon: <FaFire size={32} /> },
    { text: "50+ Thriving Projects", icon: <FaCheck size={32} /> },
    { text: "Focused on immersive user experiences", icon: <FaMobileAlt size={32} /> },
  ];

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
    hover: { scale: 1.05, boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)" },
  };

  return (
    <section className="w-full py-12 text-white">
      <div className="px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold">
              Innovate, Elevate , Dominate
            </h2>
            <p className="text-gray-400 mt-2 max-w-[600px] text-sm">
              Discover the expertise and innovation that drive our cutting-edge solutions.
            </p>
          </motion.div>

          {/* Grid layout for highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover="hover"
                className="rounded-full p-4 flex flex-col items-center space-y-2 border border-gray-500/50  transition-colors duration-300"
              >
                <div className="text-white">{item.icon}</div>
                <p className="text-sm font-medium text-gray-200">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action Button */}
          
        </div>
      </div>
    </section>
  );
};

export default LogoSection;