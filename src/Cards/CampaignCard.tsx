import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CampaignCardDataType } from '../Constants/coin4causeTypes'

interface CampaignCard {
  _id: string;
  email: string;
  ctype: string;
  cdescription: string;
  ctitle: string;
  orgname: string;
  startdate: string;
  enddate: string;
  mobilenum: string;
  budget: string;
  mindonation: string;
  currency: string;
  Active: boolean;
  __v: number;
}

const CampaignCard = ({data}:{data:CampaignCardDataType}) => {
  const [campaigns, setCampaigns] = useState<CampaignCard[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<CampaignCard[]>('https://coin4cause-server.vercel.app/campaigns');
        console.log(response);
        setCampaigns(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

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

export default CampaignCard;

