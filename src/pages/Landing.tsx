import React from "react";
import {
  LandingHero,
  LandingOffer,
  LandingHowItWorks,
} from "../components/Landing/Index";

type Props = {};

const Landing = (props: Props) => {
  return (
    <div>
      <LandingHero />
      <LandingOffer />
      <LandingHowItWorks />
    </div>
  );
};

export default Landing;
