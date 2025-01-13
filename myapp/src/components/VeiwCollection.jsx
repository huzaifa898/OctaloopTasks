import React from 'react'
import CollectionHero from './CollectionHero'
import TopCollections from './TopCollections'
import Footer from './Footer'
function VeiwCollection() {
  return (
    <div className='bg-gradient-to-b from-gray-100 to-pink-200'>
         <CollectionHero/> 
         <TopCollections/>
        <Footer/>
    </div>
  )
}

export default VeiwCollection
