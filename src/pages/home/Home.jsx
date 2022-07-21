import React from 'react'
import HeroSection from '../../component/heroSection/HeroSection';
import HeroSectionImg from '../../component/heroSectionImg/HeroSectionImg';
import Product from '../../component/product/Product';
import "./home.css"


const Home = () => {
  return (
    <div>
      <HeroSection />
      <HeroSectionImg/>
      <Product/>
    </div>
  )
}

export default Home