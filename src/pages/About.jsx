import React from 'react'
import HeroSection from '../components/heroSection/HeroSection'
import bannerimage from '../assets/images/about.png'

const About = () => {
  const data = {
    heroHeading: "Web Developer",
    heroDesc:`"As a MERN stack web developer, I specialize in creating dynamic and responsive web applications that harness the power of MongoDB, Express, React, and Node.js. With a passion for crafting seamless user experiences and a commitment to cutting-edge technologies, I bring your digital ideas to life, delivering web solutions that are both functional and visually captivating. Let's collaborate to turn your visions into engaging, high-performance web applications."`,
    heroImage:bannerimage
  };
  return (
    <>
      <HeroSection {...data}/>
    </>
  )
}

export default About
