import React from 'react'
import CollectionHero from './CollectionHero'
import TopCollections from './TopCollections'
import Footer from './Footer'
import Navbar from './Navbar'
function VeiwCollection() {
  return (
    <div className='bg-gradient-to-b from-gray-100 to-pink-200'>
         <Navbar/>
         <CollectionHero/> 
         {/* <TopCollections/> */}
        <Footer/>
    </div>
  )
}

export default VeiwCollection
