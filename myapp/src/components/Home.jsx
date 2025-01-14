import React from 'react'
import HomeHero from './HomeHero'
import Collection from './Collection'
import Trending from './Trending'
import Seller from './Seller'
import Aucations from './Aucations'
import TopCollection from './TopCollection'
import Sold from './Sold'
 import Bost from './Bost'
 import Faq from './Faq'
import Footer from './Footer'
function Home() {
  return (
    <div className='bg-gradient-to-b from-white to-pink-100'>
         <HomeHero/>
         <Collection/>
         <Trending/>
         <Seller/>
         <Aucations/>
         <TopCollection/>
        <Sold/>
        
        <Bost/> 
        <Faq/>
        <Footer/>
    </div>
  )
}

export default Home
