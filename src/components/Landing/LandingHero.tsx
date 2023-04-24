import React from "react";
import { Link } from "react-router-dom";
import { routePaths } from "../../routes/routes";

import { motion } from "framer-motion";

type Props = {};

const LandingHero = (props: Props) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 0.5,
        stiffness: 120,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: "-100px",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: 1,
        stiffness: 120,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        delay: 1.5,
        stiffness: 120,
      },
    },
  };

  return (
    <motion.section
      className=""
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto flex sm:px-20 px-10 py-24 flex-col lg:flex-row justify-center items-center">
        <motion.div
          className="flex flex-col gap-4 xl:p-20 "
          variants={textVariants}
        >
          <motion.div
            className="text-3xl sm:text-5xl text-center lg:text-left font-bold xl:pr-40 leading-relaxed"
            variants={textVariants}
          >
            Fundraising for the people and causes <br />{" "}
            <span className="text-[#00B5D5]"> you care about.</span>
          </motion.div>
          <motion.div
            className="text-xl font-normal text-center lg:text-left xl:pr-16"
            variants={textVariants}
          >
            We provide a secure and a reliable channel for people worldwide to
            create and fund donation campaigns for various social, cultural and
            environmental causes
          </motion.div>
          <motion.div
            className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start py-4 pb-10 "
            variants={buttonVariants}
          >
            <Link to={routePaths.step1}>
              <motion.button
                className=" bg-none text-[#00B5D5] p-2 rounded-md hover:bg-[#00B5D5] hover:text-white border border-[#00B5D5] w-full lg:w-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Start a Campaign
              </motion.button>
            </Link>
            <Link to={routePaths.campaings}>
              <motion.button
                className="bg-none text-[#00B5D5] p-2 rounded-md hover:bg-[#00B5D5] hover:text-white border border-[#00B5D5] w-full lg:w-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Donate 💙
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
        {/* lg:max-w-lg lg:w-full md:w-1/2 w-5/6 */}
        <motion.div className=" lg:max-w-lg lg:w-full ">  
          <img className="object-cover object-center rounded" alt="hero" src="assets/images/LandingHero.png" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LandingHero;

