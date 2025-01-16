import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Nft from './components/Nft';
import VeiwCollection from './components/VeiwCollection';
import ViewAllSeller from './components/ViewAllSeller';
import AuctionPage from './components/AuctionPage';
import Mntnft from './components/Mntnft';
import Nftform from './components/Nftform';
import Chosecollection from './components/Chosecollection';
import Profile from './components/Porfile'
import Setting from './components/Setting'
import Sellmethod from './components/Sellmethod';
import Boostpage from './components/Boostpage'
import Userprofile from './components/Userprofile';
function App() {
  return (
   <Router>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/nft" element={<Nft />} />
       <Route path="/veiwcollection" element={<VeiwCollection />} />
       <Route path="/viewallseller" element={<ViewAllSeller />} />
       <Route path="/auctionpage" element={<AuctionPage />} />
       <Route path="/mntnft" element={<Mntnft />} />
       <Route path="/nftform" element={<Nftform />} />
       <Route path="/choosecollection" element={<Chosecollection />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/setting" element={<Setting />} />
       <Route path="/sellmethod" element={<Sellmethod />} />
       <Route path="/boostpage" element={<Boostpage />} />
       <Route path="/userprofile" element={<Userprofile />} />
     </Routes>
   </Router>
  );
}

export default App;
