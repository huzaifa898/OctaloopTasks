import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Nft from './pages/Nft';
import VeiwCollection from './pages/VeiwCollection';
import ViewAllSeller from './pages/VeiwAllSeller';
import AuctionPage from './pages/Auction';
import Mntnft from './components/Mntnft';
import Nftform from './components/Nftform';
import Chosecollection from './components/Chosecollection';
import Profile from './components/Porfile'
import Setting from './components/Setting'
import Sellmethod from './components/Sellmethod';
import Boostpage from './components/Boostpage'
import Userprofile from './components/Userprofile';
import Jocab from './components/Jocab';
import ScrollToTop from './components/ScrollToTop';
import PxoCards from './components/PxoCards';
import BatchCollection from './components/BatchCollection';
import CreateCollection from './components/CreateCollection';
function App() {
  return (
   <Router>
    <ScrollToTop />
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
       <Route path="/jocab" element={<Jocab />} />
       <Route path="/pxocards" element={<PxoCards />} />
       <Route path="/collection" element={<BatchCollection />} />
       <Route path="/newcollection" element={<CreateCollection/>} />
     </Routes>
   </Router>
  );
}

export default App;
