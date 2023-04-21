import React from 'react'

type Props = {}

const StepDone = (props: Props) => {
  return (
    <div className="done h-full">
      <div className="container mx-auto flex justify-center lg:p-40 p-20">
        <div className="bg-white rounded-lg flex flex-col gap-8 justify-center text-center items-center p-8 sm:p-16">
          <img
            src="assets/icons/done.png"
            alt="StepDone"
            className="object-cover w-10"
          />
          <div className="text-4xl font-bold w-[308px]">
            Campaign Created Successfully!
          </div>
          <div className="text-[#6C6C6C] text-sm font-normal">
            View your Campaign Live by clicking the button below.
          </div>
          <button className="text-[#00B5D5] bg-none border border-[#00B5D5] p-2 rounded-sm hover:bg-[#00B5D5] hover:text-white">
            View Campaign
          </button>
        </div>
      </div>
    </div>
  );
}

export default StepDone