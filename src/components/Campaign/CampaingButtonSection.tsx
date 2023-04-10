import React from 'react'

type Props = {}

const CampaingButtonSection = (props: Props) => {
  return (
    <div>
      <div className="container mx-auto flex flex-col gap-4 lg:px-20 px-4">
        <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-4 ">
          <input
            type="search"
            className="border border-[#777777] rounded-md text-[#777777] p-2 outline-none w-full md:w-[600px] lg:w-[1034px] "
            placeholder="Search campaign ID or name "
          />
          <button className="border border-[#00B5D5] p-1 lg:p-2 text-xs lg:text-base">
            Search
          </button>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div className="flex flex-col gap-4">
            <span className='text-sm font-bold'>Type</span>
            <button className="border border-[#777777]  rounded-3xl p-1">All</button>
          </div>
          <div className="flex flex-col gap-4">
            <span className='text-sm font-bold'>Total Fund</span>
            <div className="flex flex-col xl:flex-row gap-2 w-full items-center">
              <button className="border border-[#777777] w-full  rounded-3xl p-1">
                $ 10,000
              </button>
              <span>to</span>
              <button className="border border-[#777777] w-full  rounded-3xl p-1">
                $ 100,000
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className='text-sm font-bold'>Minimum Donation</span>
            <button className="border border-[#777777] rounded-3xl p-1">$ 10,000</button>
          </div>
          <div className="flex flex-col gap-4">
            <span className='text-sm font-bold'>Location</span>
            <button className="border border-[#777777] rounded-3xl p-1">All</button>
          </div>
          <div className="flex flex-col gap-4">
            <span className='text-sm font-bold'>Other</span>
            <button className="border border-[#777777] rounded-3xl p-1">All</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaingButtonSection