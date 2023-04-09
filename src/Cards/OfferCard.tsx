import React from "react";
import { OfferCardDataType } from "../Constants/coin4causeTypes";


const OfferCard = ({ data }: { data: OfferCardDataType }) => {
  return (
    <div className="text-center flex flex-col gap-4 justify-center items-center lg:h-[464px] md:h-auto ">
      <div>
        <img src={data.path} alt={data.name} />
      </div>
      <div className="text-xl font-bold">{data.name}</div>
      <div>{data.desc}</div>
    </div>
  );
};

export default OfferCard;
