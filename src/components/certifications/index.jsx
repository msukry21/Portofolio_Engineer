"use client";
import { motion } from "framer-motion";
import CertificationLayout from "./CertificationLayout";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

const CertificationList = ({ certifications }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
    >
      {certifications.map((cert, index) => {
        return <CertificationLayout key={index} {...cert} />;
      })}
    </motion.div>
  );
};

export default CertificationList;
