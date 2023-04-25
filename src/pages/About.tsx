import React from 'react'
import { AboutHero } from "../components/About/AboutC4C";
import '../components/About/about-styles.css';
import '../Fonts/css/satoshi.css';

type Props = {}

const About = (props: Props) => {
  return (
    <div>
      <AboutHero />
    </div>
  )
}

export default About