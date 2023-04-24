import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { routePaths } from "../../routes/routes";

type Props = {};

const Step5 = (props: Props) => {

  const location = useLocation();

  const { ctype, cdescription,ctitle,orgname,startdate,enddate,email,country,mobilenum,budget,mindonation,currencies} = location.state;
  return (
    <div className="bg-[#EFF4F8]">
      <div className="container mx-auto sm:p-20 p-10 flex flex-col gap-20">
        <div className="text-center sm:text-4xl text-xl font-bold">
          Authenticate the legitimacy of your campaign
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-8 items-start">
          <div className="flex flex-col gap-4 h-full justify-between">
            <span className="text-base font-bold">Personal Identification</span>
            <span>
              Driver's license, passport, or any other government-issued ID to
              verify your identity.
            </span>
            <div className="border border-dashed border-black p-20 rounded-md hover:bg-gray-100 w-full flex mx-auto justify-center group">
              <label
                htmlFor="file-input"
                className="bg-none border border-[#00B5D5] text-[#00B5D5] px-3 py-1 rounded-md group-hover:bg-[#00B5D5] group-hover:text-white cursor-pointer"
              >
                Upload
              </label>
              <input
                type="file"
                accept="image/*"
                id="file-input"
                className="hidden"
                multiple
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-base font-bold">Financial Documents</span>
            <span>
              Depending on the type of crowdfunding you're doing, you may need
              to provide financial documents such as a business plan, financial
              projections, or tax returns.
            </span>
            <div className="border border-dashed border-black p-20 rounded-md hover:bg-gray-100 w-full flex mx-auto justify-center group">
              <label
                htmlFor="file-input"
                className="bg-none border border-[#00B5D5] text-[#00B5D5] px-3 py-1 rounded-md group-hover:bg-[#00B5D5] group-hover:text-white cursor-pointer"
              >
                Upload
              </label>
              <input
                type="file"
                accept="image/*"
                id="file-input"
                className="hidden"
                multiple
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:items-start items-center">
            <span className="text-base font-bold">Verify your email</span>
            <span>
              Before you can start your crowdfunding campaign, please verify
              your email address by clicking the verification link we have sent
              to your inbox.
            </span>
            <button className="bg-none border border-[#00B5D5] text-[#00B5D5] px-3 py-1 rounded-md hover:bg-[#00B5D5] hover:text-white cursor-pointer">
              Verify Email
            </button>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
          <div className="border border-dashed border-black p-20 rounded-md hover:bg-gray-100 w-4/5 flex mx-auto justify-center group">
            <label
              htmlFor="file-input"
              className="bg-none border border-[#00B5D5] text-[#00B5D5] px-3 py-1 rounded-md group-hover:bg-[#00B5D5] group-hover:text-white cursor-pointer"
            >
              Upload
            </label>
            <input
              type="file"
              accept="image/*"
              id="file-input"
              className="hidden"
              multiple
            />
          </div>
        </div> */}
        <div className="flex justify-center items-center">
          <Link to={routePaths.done}>
            <button className="bg-none border border-[#00B5D5] text-[#00B5D5] p-2 rounded-md hover:bg-[#00B5D5] hover:text-white w-2/5">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Step5;
