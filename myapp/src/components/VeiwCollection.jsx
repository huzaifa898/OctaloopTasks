import React from 'react'
import CollectionHero from './CollectionHero'
import TopCollections from './TopCollections'
import Footer from './Footer'
function VeiwCollection() {
  return (
    <div className='bg-gradient-to-b from-white to-pink-100'>
         <CollectionHero/> 
         <TopCollections/>
         <Footer/>
    </div>
  )
}

export default VeiwCollection
