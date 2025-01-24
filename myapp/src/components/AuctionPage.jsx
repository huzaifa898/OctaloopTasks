import React from 'react'
import AuctionHero from './AuctionHero'
import TopListedAuction from './TopListedAuctions'
import LiveAuction from './LiveAuction'
import Footer from './Footer'
import Navbar from './Navbar'
function AuctionPage() {
  return (
    <div className='bg-gradient-to-b from-gray-100 to-pink-200'>
      <Navbar/>
      <AuctionHero/>
      <TopListedAuction/>
      <LiveAuction/>
      <Footer/>
    </div>
  )
}

export default AuctionPage
