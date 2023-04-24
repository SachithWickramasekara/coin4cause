import React from "react";
import { Link } from "react-router-dom";
import { routePaths } from "../../routes/routes";

type Props = {};

const LandingHero = (props: Props) => {
  return (
    <>
      <section className="about-hero bg-no-repeat bg-cover h-screen flex justify-center items-center">
        <div className="container mx-auto text-center mt-[-100px] px-[20%]">
          <h4 className="text-sm text-[#00B5D5]">ABOUT US</h4>
          <h1 className="text-5xl text-[#FFFFFF] my-12 font-bold">
            Empower Your Donations with Blockchain Technology
          </h1>
          <p className="text-xl text-[#FFFFFF]">
            Welcome to Coin4Cause, a trusted and reliable platform for making
            donations to various social, cultural, and environmental causes. Our
            platform is built on blockchain technology, providing transparency,
            immutability, and security to all transactions.
          </p>
        </div>
      </section>

      <section className="bg-white py-[120px] px-[20%] text-center">
        <h2 className="text-sm text-[#00B5D5] mb-[48px]">
          OUR VISION AND MISSION
        </h2>
        <p className="text-xl">
          At Coin4Cause, we believe that everyone has the power to make a
          difference in the world. That's why we provide a secure and efficient
          platform for people to support the causes they care about.{" "}
        </p>
        <br />

        <p className="text-xl">
          Our mission is to empower individuals and organizations to make a
          positive impact on society by streamlining the donation process and
          ensuring that donations go directly to the causes they are intended to
          support.{" "}
        </p>
      </section>

      <section className="bg-[#EFF4F8] py-[120px] columns-2 px-[10%]">
        <div>
          <img src="assets/images/aboutPlatform.png" alt="" />
        </div>
        <div>
          <h4 className="text-sm text-[#00B5D5]">OUR PLATFORM</h4>
          <h2 className="text-[32px] font-bold py-[23px]">
            Global Giving Made <br />
            <span className="text-[#00B5D5]">Secure and Simple.</span>
          </h2>
          <p className="text-sm">
            Our platform is designed to provide a seamless user experience for
            making donations. Using blockchain technology, we ensure that all
            transactions are transparent, secure, and immutable. Donors can
            easily create and fund donation campaigns for various causes, track
            their contributions, and verify that their donations are being used
            for their intended purpose.{" "}
          </p>
          <br />

          <p className="text-sm">
            Our platform is accessible worldwide, making it easy for people to
            support causes from anywhere in the world. We believe that
            technology has the power to connect people and create a more
            compassionate world, and we strive to make that vision a reality
            through our platform.{" "}
          </p>
        </div>
      </section>
    </>
  );
};

export default LandingHero;
