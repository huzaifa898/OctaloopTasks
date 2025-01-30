import React from 'react'
import AuctionHero from '../components/AuctionHero'
import TopListedAuction from '../components/TopListedAuctions'
import LiveAuction from '../components/LiveAuction'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
function AuctionPage() {
  return (
    <div className='bg-gradient-to-b from-red-100 to-white'>
      <Navbar/>
      <AuctionHero/>
      <TopListedAuction/>
      <LiveAuction/>
      <Footer/>
    </div>
  )
}

export default AuctionPage
