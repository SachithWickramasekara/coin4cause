 import React from 'react'
import { routePaths } from '../../routes/routes';
import { Link } from 'react-router-dom';
 
 interface Props {
    
 }
 
 const Step4 = (props: Props) => {
    return (
      <div className="text-black">
        <div className="container mx-auto flex flex-col gap-8 justify-center text-center items-center lg:px-80 md:p-20 p-6 lg:py-20">
          <div className="text-4xl font-bold">Add Photos or Videos</div>
          <div className="text-base font-medium ">
            Including compelling images in your campaign is an excellent way to
            visually communicate your message and capture the attention of
            potential donors.
          </div>
          <div className="text-sm font-normal text-[#777777]">
            Images can help to convey the urgency of your cause, demonstrate the
            impact of donations, and establish an emotional connection with your
            audience. By using high-quality images that are relevant to your
            campaign, you can create a compelling narrative that inspires people
            to support your cause.
          </div>
          <div className="border border-dashed  border-black p-20 rounded-md hover:bg-gray-100">
            <button className="bg-none border border-[#00B5D5] text-[#00B5D5] px-3 py-1 rounded-md hover:bg-[#00B5D5] hover:text-white">
              Upload
            </button>
          </div>
          <div className="w-3/5">
            <Link to={routePaths.done}>
            <button className="bg-none border border-[#00B5D5] text-[#00B5D5] w-full p-2 rounded-md hover:bg-[#00B5D5] hover:text-white">
              Next
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
 }
 
 export default Step4
 