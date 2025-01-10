import React from 'react'
import AuctionHero from './AuctionHero'
import TopListedAuction from './TopListedAuctions'
import LiveAuction from './LiveAuction'
import Footer from './Footer'
function AuctionPage() {
  return (
    <div className='bg-gradient-to-b from-gray-100 to-pink-200'>
      <AuctionHero/>
      <TopListedAuction/>
      <LiveAuction/>
      <Footer/>
    </div>
  )
}

export default AuctionPage
