import React from "react";

type Props = {};

const LandingHero = (props: Props) => {
  return (
    <section className="">
      <div className="container mx-auto flex px-20 py-24 flex-col lg:flex-row justify-center items-center">
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
          <div></div>
        </div>
        {/* lg:max-w-lg lg:w-full md:w-1/2 w-5/6 */}

        <div className=" lg:max-w-lg lg:w-full">
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
