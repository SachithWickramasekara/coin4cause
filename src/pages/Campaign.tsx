import React from 'react'
import CampaingButtonSection from '../components/Campaign/CampaingButtonSection';
import { CampaignCardData } from '../Constants/coin4causeData';
import CampaignCard from '../Cards/CampaignCard';

type Props = {}

const Campaign = (props: Props) => {
  return (
    <div>
      <div className="container mx-auto flex flex-col gap-8 p-8 lg:p-20 justify-center items-center">
        <div className="text-xl lg:text-3xl font-bold lg:w-[450px] text-center">
          Join <span className="text-[#00B5D5]">Coin4Cause</span> and Make a
          Difference Today
        </div>
        <div className='lg:text-2xl text-base font-normal text-center'>Browse Our List of Impactful Donation Campaigns!</div>
        <div>
          <CampaingButtonSection/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-16 mt-6'>
          {CampaignCardData.map((items,i)=>(
            <CampaignCard key={i} data={items}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Campaign