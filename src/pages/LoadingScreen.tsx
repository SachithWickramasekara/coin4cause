import React from "react";
import { motion } from "framer-motion";
import Lottie from  "react-lottie"
import animationData from "../Lottie/Coin.json";

type Props = {};

const LoadingScreen = (props: Props) => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-4 items-center justify-center h-screen body text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        className="text-white text-3xl font-semibold flex flex-col lg:flex-row gap-2 items-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Lottie options={options} height={200} width={200} />
        Loading.......
      </motion.div>
      <motion.p
        style={{
          margin: "0.5rem 0",
          fontSize: 16,
          fontWeight: 300,
        }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      ></motion.p>
    </motion.div>
  );
};


export default LoadingScreen;
