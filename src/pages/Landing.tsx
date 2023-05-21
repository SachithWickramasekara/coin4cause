import React from "react";
import {
  LandingHero,
  LandingOffer,
  LandingHowItWorks,
} from "../components/Landing/Index";
import Navbar from "../layout/Navbar";

interface LandingProps {
  isLoggedIn: boolean;
}

const Landing = (props: LandingProps) => {
  return (
    <div>
       <LandingHero isLoggedIn={props.isLoggedIn} />
      <LandingOffer />
      <LandingHowItWorks />
    </div>
  );
};

export default Landing;
