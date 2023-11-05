import React from 'react'
import HeroSection from '../components/heroSection/HeroSection'
import bannerimage from '../assets/images/programming.svg'

const Home = () => {
  const data = {
    heroHeading: "Abdullah Bin Sufyan",
    heroDesc:
      "I craft interactive and responsive web applications using the power of React. With a keen eye for detail and a commitment to clean code, I bring ideas to life with the art of web development. Let's build the future together.",
    heroImage:bannerimage
  };
  return (
    <>
      <HeroSection {...data} />
    </>
  )
}

export default Home
