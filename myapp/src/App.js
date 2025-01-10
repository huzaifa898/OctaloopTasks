import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Nft from './components/Nft';
import VeiwCollection from './components/VeiwCollection';
import ViewAllSeller from './components/ViewAllSeller';
function App() {
  return (
   <Router>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/nft" element={<Nft />} />
       <Route path="/veiwcollection" element={<VeiwCollection />} />
       <Route path="/viewallseller" element={<ViewAllSeller />} />
     </Routes>
   </Router>
  );
}

export default App;
