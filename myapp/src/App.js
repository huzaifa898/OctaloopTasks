import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Nft from './components/Nft';

function App() {
  return (

     // <Home/>
   <Router>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/nft" element={<Nft />} />
     </Routes>
   </Router>
  );
}

export default App;
