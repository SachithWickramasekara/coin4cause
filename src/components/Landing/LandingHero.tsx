import React from "react";
import { Link } from "react-router-dom";
import { routePaths } from "../../routes/routes";

type Props = {};

const LandingHero = (props: Props) => {
  return (
    <section className="">
      <div className="container mx-auto flex sm:px-20 px-10 py-24 flex-col lg:flex-row justify-center items-center">
        <div className="flex flex-col gap-4 xl:p-20 ">
          <div className="text-3xl sm:text-5xl text-center lg:text-left font-bold xl:pr-40 leading-relaxed">
            Fundraising for the people and causes <br />{" "}
            <span className="text-[#00B5D5]"> you care about.</span>
          </div>
          <div className="text-xl font-normal text-center lg:text-left xl:pr-16">
            We provide a secure and a reliable channel for people worldwide to
            create and fund donation campaigns for various social, cultural and
            environmental causes
          </div>
          <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start py-4 pb-10 ">
            <Link to={routePaths.step1}>
              <button className=" bg-none text-[#00B5D5] p-2 rounded-md hover:bg-[#00B5D5] hover:text-white border border-[#00B5D5] w-full lg:w-auto">
                Start a Campaign
              </button>
            </Link>
            <button className="bg-none text-[#00B5D5] p-2 rounded-md hover:bg-[#00B5D5] hover:text-white border border-[#00B5D5] w-full lg:w-auto">
              Donate 💙
            </button>
          </div>
        </div>
        {/* lg:max-w-lg lg:w-full md:w-1/2 w-5/6 */}

        <div className=" lg:max-w-lg lg:w-full ">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="assets/images/LandingHero.png"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
