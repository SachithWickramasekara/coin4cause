import React from 'react'
import OfferCard from '../../Cards/OfferCard';
import { offercardData } from '../../Constants/coin4causeData';

const LandingOffer = () => {
  return (
    <div>
      <div className="container mx-auto flex-col gap-4 justify-center items-center px-8 ">
        <div className="text-[#00B5D5] font-medium text-sm flex mx-auto justify-center items-center">
          WHAT WE OFFER
        </div>
        <div className="text-3xl font-bold xl:w-[450px] text-center flex mx-auto justify-center items-center">
          Charitable donations at your fingertips
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 sm:px-20 gap-8 px-86">
            {offercardData.map((items, i) => (
              <OfferCard data={items} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingOffer