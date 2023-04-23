import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import CampaingButtonSection from '../components/Campaign/CampaingButtonSection';
import { Link } from 'react-router-dom';
import { routePaths } from '../routes/routes';

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
}

function CampaignsCard() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<Campaign[]>('https://coin4cause-server.vercel.app/campaigns');
        console.log(response);
        setCampaigns(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <div className="container mx-auto flex flex-col gap-8 p-8 lg:p-20 justify-center items-center">
        <motion.div
          className="text-xl lg:text-3xl font-bold lg:w-[450px] text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
        >
          Join <span className="text-[#00B5D5]">Coin4Cause</span> and Make a
          Difference Today
        </motion.div>
        <motion.div
          className="lg:text-2xl text-base font-normal text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.4 },
          }}
        >
          Browse Our List of Impactful Donation Campaigns!
        </motion.div>
        <div>
          <CampaingButtonSection />
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center gap-16 mt-6"
          initial="hidden"
          animate="visible"
        >
          {campaigns.map((campaign) => (
            <motion.div
              key={campaign._id}
              className=" text-center bg-[#EFF4F8] p-20 rounded-xl flex flex-col gap-3"
              variants={cardVariants}
            >
              <motion.div
                className="text-xl font-bold"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.6 },
                }}
              >
                {campaign.ctitle}
              </motion.div>
              <motion.div
                className="text-center font-normal text-base"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.8 },
                }}
              >
                {campaign.cdescription}
              </motion.div>
              <motion.div
                className="text-base font-normal"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.6 },
                }}
              >
                {campaign.orgname}
              </motion.div>
              <motion.div
                className="text-base font-normal"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.6 },
                }}
              >
                {campaign.budget}
              </motion.div>
              <motion.div
                className="text-base font-normal"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.6 },
                }}
              >
                {campaign.startdate}
              </motion.div>
              <motion.div
                className="text-base font-normal"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.6 },
                }}
              >
                {campaign.enddate}
              </motion.div>
              <Link to={routePaths.donate}>
                <div>
                  <button className="text-[#00B5D5] font-bold border border-[#00B5D5] p-2 rounded-md hover:bg-[#00B5D5] hover:text-white">
                    {" "}
                    Read More{" "}
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default CampaignsCard;
