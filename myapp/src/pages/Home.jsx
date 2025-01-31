import React from 'react'
import Navbar from '../components/Navbar'
import HomeHero from '../components/HomeHero'
import Collection from '../components/Collection'
import Trending from '../components/Trending'
import Seller from '../components/Seller'
import Aucations from '../components/Aucations'
import TopCollection from '../components/TopCollection'
import Sold from '../components/Sold'
//  import Bost from '../components/Bost'
 import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Assets from '../components/Assets'
function Home() {
  return (
    <div className='bg-gradient-to-b from-white to-pink-200'>
          <Navbar/>
          <HomeHero/>
           <Collection/>
          <Trending/>
          <Seller/>
          <Aucations/>
          <TopCollection/>  
          <Sold/>
          {/* <Bost/> */}
          <Assets/>
          <Faq/>
          <Footer/>
    </div> 
  )
}

export default Home
