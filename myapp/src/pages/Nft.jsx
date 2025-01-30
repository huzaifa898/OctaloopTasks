import React from 'react'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
function Nft() {
  return (
    <div className=" bg-gradient-to-b from-white to-pink-200">
      <Navbar/>
        <Hero/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default Nft
