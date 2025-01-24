import React from 'react'
import SellerHero from './SellerHero'
import AllSeller from './AllSeller'
import Footer from './Footer'
import Navbar from './Navbar'
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
