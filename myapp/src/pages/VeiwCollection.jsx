import React from 'react'
import CollectionHero from '../components/CollectionHero'
import TopCollections from '../components/TopCollections'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
function VeiwCollection() {
  return (
    <div className='bg-gradient-to-b from-gray-100 to-pink-200'>
         <Navbar/>
         <CollectionHero/> 
          <TopCollections/>
        <Footer/>
    </div>
  )
}

export default VeiwCollection
