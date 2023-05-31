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
  location: string;
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
  const [filteredCampaigns, setFilteredCampaigns] = useState<Campaign[]>([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedMinAmount, setSelectedMinAmount] = useState<string | null>(null);
  const [selectedMaxAmount, setSelectedMaxAmount] = useState<string | null>(null);
  const [selectedMinDonation, setSelectedMinDonation] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        
        const response = await axios.get<Campaign[]>(
          "https://coin4cause-server.vercel.app/campaigns"
        );
        console.log(response);
        setCampaigns(response.data);
        setFilteredCampaigns(response.data);
        
        
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  // console.log(campaign.ctype)

  useEffect(() => {
    let filtered = [...campaigns];

  // Filter by search term
  filtered = filtered.filter((campaign) =>
    campaign.ctitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter by campaign type
  if (selectedType) {
    console.log(selectedType);
  
    filtered = filtered.filter((campaign) => campaign.ctype === selectedType);
    console.log(filtered);
  }

  // Filter by minimum donation
  if (selectedMinDonation) {
    console.log(selectedMinDonation);
  
    filtered = filtered.filter((campaign) => campaign.mindonation === selectedMinDonation);
    console.log(filtered);
  }

  // Filter by country
  if (selectedCountry) {
    filtered = filtered.filter((campaign) => campaign.location === selectedCountry);
  }

  console.log(campaigns);
   // Filter by range
if (selectedMinAmount || selectedMaxAmount) {
  filtered = filtered.filter((campaign) => {
    const budget = parseFloat(campaign.budget.replace(/[^0-9.-]+/g, ''));
    
    const minAmount = selectedMinAmount ? parseFloat(selectedMinAmount) : Number.MIN_SAFE_INTEGER;
    const maxAmount = selectedMaxAmount ? parseFloat(selectedMaxAmount) : Number.MAX_SAFE_INTEGER;
    
    return budget >= minAmount && budget <= maxAmount;
  });
}

  // Set the filtered campaigns
  setFilteredCampaigns(filtered);
}, [searchTerm, selectedType, selectedMinDonation, selectedCountry, selectedMinAmount, selectedMaxAmount]);
  

  function handleReadMoreClick(campaignId: any, budget: string) {
    navigate(`/donate/${campaignId}?budget=${budget}`);
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
          <CampaingButtonSection
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedMinDonation={selectedMinDonation}
            setSelectedMinDonation={setSelectedMinDonation}
            selectedCountry={selectedCountry} // Add selectedCountry prop
            setSelectedCountry={setSelectedCountry} // Add setSelectedCountry prop
            selectedMinAmount={selectedMinAmount}
            setSelectedMinAmount={setSelectedMinAmount}
            selectedMaxAmount={selectedMaxAmount}
            setSelectedMaxAmount={setSelectedMaxAmount}

          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center gap-16 mt-6">
          {filteredCampaigns.map((campaign) => (
            
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
                  onClick={() => handleReadMoreClick(campaign._id, campaign.budget)}>
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
