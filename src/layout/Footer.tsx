import React from "react";
import { Link } from "react-router-dom";
import { routePaths } from "../routes/routes";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-[#08415C]">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 md:gap-0 p-10 text-white items-center justify-between">
        <div className="lg:w-1/2 sm:p-10">
          <img src="assets/icons/Logo.png" alt="logo" />
          <span>
            If you have any questions or concerns, please don't hesitate to
            contact us. You can reach our customer support team by email at
            support@coin4cause.com or by phone at +1 (555) 123-4567.
          </span>
        </div>
        <div className="w-full sm:p-10 flex lg:flex-row flex-col gap-8">
          <div className="flex flex-col w-1/2">
            <span>About</span>
            <span>Services</span>
          </div>
          <div className="w-full flex flex-col ">
            <div>Campaigns</div>
            <div>Recent Campaigns</div>
            <div>Upcoming Campaigns</div>
          </div>
          <div className="w-full flex flex-col gap-4 justify-center items-start">
            <Link to={routePaths.step1}>
              <button className=" bg-none text-[#00B5D5] p-2 rounded-md hover:bg-[#00B5D5] hover:text-white border border-[#00B5D5] w-full lg:w-full">
                Start a Campaign
              </button>
            </Link>
            <Link to={routePaths.donate}>
              <button className="bg-none text-[#00B5D5] p-2 rounded-md hover:bg-[#00B5D5] hover:text-white border border-[#00B5D5] w-full lg:w-full">
                Donate 💙
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
