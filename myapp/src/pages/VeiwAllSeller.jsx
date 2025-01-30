import React from 'react'
import SellerHero from '../components/SellerHero'
import AllSeller from '../components/AllSeller'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
function TopSeller() {
  return (
    <div className='bg-gradient-to-b from-gray-100 to-pink-200'>
         <Navbar/>
         <SellerHero/>
         <AllSeller/>
         <Footer/>
    </div>
  )
}

export default TopSeller
