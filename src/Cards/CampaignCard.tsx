import React from 'react'
import { CampaignCardDataType } from '../Constants/coin4causeTypes'



const CampaignCard = ({data}:{data:CampaignCardDataType}) => {
  return (
    <div className="bg-[#EFF4F8] rounded-3xl flex flex-col items-center  px-4 text-center h-[501px] lg:w-[363px] justify-around py-4">
      <div>
        <img src={data.path} alt={data.name} className="" />
      </div>
      <div className="text-xl font-bold w-[248px]">{data.name}</div>
      <div
        className="text-[10px] font-bold"
        style={{ color: `${data.textColor}` }}
      >
        {data.status}
      </div>
      <div className="text-sm font-normal">{data.desc}</div>
      <div>
        <button className="text-[#00B5D5] border border-[#00B5D5] p-2 rounded-md">
          Read More
        </button>
      </div>
    </div>
  );
}

export default CampaignCard

//