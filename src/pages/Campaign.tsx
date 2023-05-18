import React, { useState, useEffect } from "react";
import axios from "axios";
import CampaingButtonSection from "../components/Campaign/CampaingButtonSection";
import { Link, useNavigate } from "react-router-dom";
import { routePaths } from "../routes/routes";


interface Campaign {
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
  base64: string;
  id: string;
  financedocs: string;
}

function CampaignsCard() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<Campaign[]>(
          "https://coin4cause-server.vercel.app/campaigns"
        );
        console.log(response);
        setCampaigns(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  function handleReadMoreClick(campaignId: any) {
    navigate(`/donate/${campaignId}`);
  }


  return (
    <div>
      <div className="container mx-auto flex flex-col gap-8 p-8 lg:p-20 justify-center items-center">
        <div className="text-xl lg:text-3xl font-bold lg:w-[450px] text-center">
          Join <span className="text-[#00B5D5]">Coin4Cause</span> and Make a
          Difference Today
        </div>
        <div className="lg:text-2xl text-base font-normal text-center">
          Browse Our List of Impactful Donation Campaigns!
        </div>
        <div>
          <CampaingButtonSection />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center gap-16 mt-6">
          {campaigns.map((campaign) => (
            <div
              key={campaign._id}
              className=" text-center bg-[#EFF4F8] p-5 rounded-xl flex flex-col gap-3"
            >
              <div className="h-[200px] lg:h-[170px] md:h-[220px]">
                <img
                  src={campaign.base64}
                  alt={campaign.ctitle}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
              <div className="text-xl font-bold">{campaign.ctitle}</div>
              <div className="text-center font-normal text-base">
                {campaign.cdescription}
              </div>
              <div className="text-base font-normal">{campaign.orgname}</div>
              <div className="text-base font-normal">{campaign.budget}</div>
              <div className="text-base font-normal">{campaign.startdate}</div>
              <div className="text-base font-normal">{campaign.enddate}</div>

                <div>
                  <button className="text-[#00B5D5] font-bold border border-[#00B5D5] p-2 rounded-md"
                  onClick={() => handleReadMoreClick(campaign._id)}>
                    {" "}
                    Read More{" "}
                    
                  </button>
                </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CampaignsCard;
