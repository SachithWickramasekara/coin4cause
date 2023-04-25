import React from "react";
import { motion } from "framer-motion";

type Props = {};

const LandingHowItWorks = (props: Props) => {
  const imageVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section className="body-font bg-[#EFF4F8]">
      <div className="container mx-auto flex lg:px-20 px-8 py-24 md:flex-col lg:flex-row flex-col items-center">
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="assets/images/HowItWorks.png"
          />
        </motion.div>
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pl-24 flex flex-col md:items-center lg:items-start  md:text-center lg:text-left items-center text-center"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-[#00B5D5] font-medium md:pt-6">HOW IT WORKS</div>
          <h1 className=" sm:text-3xl text-2xl mb-4 font-medium lg:w-[456px]">
            Using{" "}
            <span className="text-[#00B5D5]">
              distributed ledger technology{" "}
            </span>{" "}
            to enhance the process of tracking donations
          </h1>
          <p className="mb-8 leading-relaxed">
            Every transaction on our platform is recorded on the blockchain,
            which means that it is immutable and cannot be altered. This creates
            a secure and transparent record of all donations, making it easier
            for donors to track their contributions and ensure that they are
            being used for their intended purpose. Our use of distributed ledger
            technology also enables us to streamline the donation process,
            making it more efficient and cost-effective. By eliminating the need
            for intermediaries and reducing transaction costs, we can ensure
            that more of your donation goes directly to the cause you care
            about.
          </p>
          <motion.div
            className="flex justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button className="inline-flex text-[#00B5D5] bg-none border border-[#00B5D5] py-2 px-6 focus:outline-none hover:bg-[#00B5D5] hover:text-white rounded text-lg">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingHowItWorks;
