import React, { useState, useEffect, useContext } from 'react';
import logo from '../Images/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { getPeraWalletInstance } from '../utils/peraWallet';
import { connectToWalletConnect } from '../utils/walletConnect';
import { connectToDaffiWallet, reconnectSession, disconnectDaffiWallet } from '../utils/daffiWallet';
import { connectToDeflyWallet } from '../utils/deflyWallet';
import icon1 from "../Images/icon1.png";
import icon2 from "../Images/icon2.png";
import icon3 from "../Images/icon3.png";
import icon4 from "../Images/icon4.png";
import { Web3ReactProvider, useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { DaffiWalletContext, DaffiWalletProvider } from '../context/DaffiWalletContext';
import { Web3Provider } from '@ethersproject/providers';

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42], // Add the supported chain IDs for Daffi Wallet
});

function getLibrary(provider) {
  return new Web3Provider(provider);
}

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [accountAddress, setAccountAddress] = useState('');
  const peraWallet = getPeraWalletInstance();
  const { activate, active, account } = useWeb3React();
  const { connectDaffiWallet } = useContext(DaffiWalletContext);
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  useEffect(() => {
    const reconnect = async () => {
      try {
        const accounts = await reconnectSession();
        if (accounts.length) {
          setAccountAddress(accounts[0]);
        }
      } catch (error) {
        console.error("Failed to reconnect session:", error);
      }
    };
    reconnect();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const connectPeraWallet = async () => {
    try {
      const accounts = await peraWallet.connect();
      console.log('Connected accounts:', accounts);
      setSuccessMessage('Wallet connected successfully!');
      closeModal();
    } catch (error) {
      console.error('Failed to connect to Pera Wallet:', error);
    }
  };

  const connectWalletConnect = async () => {
    try {
      const connector = await connectToWalletConnect();
      if (connector.connected) {
        setSuccessMessage('WalletConnect connected successfully!');
        closeModal();
      }
    } catch (error) {
      console.error('Failed to connect to WalletConnect:', error);
    }
  };

  const handleConnectDaffiWallet = async () => {
    try {
      const accounts = await connectToDaffiWallet(); // Updated to use the improved function
      if (accounts && accounts.length) {
        setAccountAddress(accounts[0]); // Save the first connected account
        setSuccessMessage('Daffi Wallet connected successfully!');
        closeModal(); // Close any connection modal if applicable
        console.log('Connected to Daffi Wallet:', accounts);
      } else {
        console.error('No accounts found after connecting to Daffi Wallet');
      }
    } catch (error) {
      // Handle errors properly
      if (error?.message === "CONNECT_MODAL_CLOSED") {
        setErrorMessage('Connection was canceled by the user.');
      } else {
        setErrorMessage('Failed to connect to Daffi Wallet. Please try again.');
      }
      console.error('Error while connecting to Daffi Wallet:', error);
    }
  };
  

  const handleConnectDeflyWallet = async () => {
    try {
      const accounts = await connectToDeflyWallet();
      if (accounts.length) {
        setAccountAddress(accounts[0]);
        setSuccessMessage('Defly Wallet connected successfully!');
        closeModal();
      }
    } catch (error) {
      console.error('Failed to connect to Defly Wallet:', error);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnectDaffiWallet();
      setAccountAddress('');
      setSuccessMessage('Wallet disconnected successfully!');
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };

  return (
    <div className='container h-'>
      <div className={`flex items-center ${isMenuOpen ? 'fixed top-0 left-0 w-full z-20' : ''} md:fixed top-0 left-0 w-full z-20  bg-opacity-60 backdrop-filter backdrop-blur-lg`}>
        <nav className="flex justify-between background: linear-gradient(to right, rgba(256, 255, 255, 0), rgba(255, 182, 193, 0.5) items-center px-4 py-2 mx-auto w-full max-w-screen-xl lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-[55px] h-[85px] object-contain sm:w-[65px] sm:h-[100px]"
            />
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8 text-gray-800 font-medium">
            <Link to='/' onClick={() => setActiveLink('/')}>
              <li className={`hover:text-red-500 font-apex text-bold ${activeLink === '/' ? 'text-red-600 underline' : ''} cursor-pointer`}>
                Home
              </li>
            </Link>
            <Link to={'/nft'} onClick={() => setActiveLink('/nft')}>
              <li className={`hover:text-red-500 font-apex cursor-pointer ${activeLink === '/nft' ? 'text-red-600 underline' : ''}`}>
                AI NFT Generation
              </li>
            </Link>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-3 lg:space-x-4">
            {accountAddress ? (
              <button
                className="bg-red-500 text-white w-[150px] h-[45px] lg:w-[200px] lg:h-[50px] rounded-md font-apex hover:bg-red-600"
                onClick={handleDisconnect}
              >
                Disconnect
              </button>
            ) : (
              <button
                className="bg-red-500 text-white w-[150px] h-[45px] lg:w-[200px] lg:h-[50px] rounded-md font-apex hover:bg-red-600"
                onClick={openModal}
              >
                Connect Wallet
              </button>
            )}
            <Link to="/nft">
              <button className="border font-apex border-red-500 text-red-500 w-[150px] h-[45px] lg:w-[200px] lg:h-[50px] rounded-md hover:bg-red-500 hover:text-white">
                Create NFT
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden  text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-30`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-800 focus:outline-none"
            onClick={closeMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <ul className="flex flex-col space-y-4 p-6 text-gray-800 font-medium">
            <Link to={'/'}>
            <li
              className="hover:text-red-500 font-apex text-bold text-red-600 underline cursor-pointer"
              onClick={closeMenu}
            >
              Home
            </li>
            </Link>
            <Link to="/nft" onClick={closeMenu}>
              <li className="hover:text-red-500 font-apex cursor-pointer">
                AI NFT Generation
              </li>
            </Link>
            {accountAddress ? (
              <button
                className="bg-red-500 text-white w-full h-[45px] rounded-md font-apex hover:bg-red-600"
                onClick={() => {
                  closeMenu();
                  handleDisconnect();
                }}
              >
                Disconnect
              </button>
            ) : (
              <button
                className="bg-red-500 text-white w-full h-[45px] rounded-md font-apex hover:bg-red-600"
                onClick={() => {
                  closeMenu();
                  openModal();
                }}
              >
                Connect Wallet
              </button>
            )}
            <Link to="/nft" onClick={closeMenu}>
              <button className="border font-apex border-red-500 text-red-500 w-full h-[45px] rounded-md hover:bg-red-500 hover:text-white">
                Create NFT
              </button>
            </Link>
          </ul>
        </div>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="fixed top-0 left-0 w-full bg-green-500 text-white text-center py-2 z-50">
          {successMessage}
        </div>
      )}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-80 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✖
            </button>
            <h1 className="text-lg font-apex mb-4 text-center flex flex-col items-center">
              CONNECT YOUR WALLET
              <img src={logo} alt="Pera Logo" className="h-16 mt-2" />
            </h1>

            <div className="space-y-3">
              <button
                className="w-full flex items-center border-2 border-red-500 rounded-lg py-2 px-4 hover:bg-red-50"
                onClick={connectPeraWallet}
              >
                <img src={icon3} alt="Pera Logo" className="h-6 mr-2" />
                <span className="ml-2">Pera</span>
              </button>
              <button
                className="w-full flex items-center border-2 border-red-500 rounded-lg py-2 px-4 hover:bg-red-50"
                onClick={connectWalletConnect}
              >
                <img src={icon1} alt="WalletConnect Logo" className="h-6 mr-2" />
                <span className="ml-2">WalletConnect</span>
              </button>
              <button
                className="w-full flex items-center border-2 border-red-500 rounded-lg py-2 px-4 hover:bg-red-50"
                onClick={handleConnectDeflyWallet}
              >
                <img src={icon4} alt="Defly Logo" className="h-6 mr-2" />
                <span className="ml-2">Defly</span>
              </button>
              <button
                className="w-full flex items-center border-2 border-red-500 rounded-lg py-2 px-4 hover:bg-red-50"
                onClick={handleConnectDaffiWallet}
              >
                <img src={icon2} alt="Daffi Logo" className="h-6 mr-2" />
                <span className="ml-2">Daffi</span>
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <DaffiWalletProvider>
        <Navbar />
      </DaffiWalletProvider>
    </Web3ReactProvider>
  );
}