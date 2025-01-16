import React from 'react'
import Boostpagenavbar from './Boostpagenavbar'
import Boostcontent from './Boostcontent'
import TrendingNFTs from './Trending'
import Footer from './Footer'
function Boostpage() {
  return (
    <div>
      <Boostpagenavbar/>
      <Boostcontent/>
      <TrendingNFTs heading="View Other Collections"/>
      <Footer/>
    </div>
  )
}

export default Boostpage
