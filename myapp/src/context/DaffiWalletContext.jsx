import React, { createContext, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

export const DaffiWalletContext = createContext();

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42], // Add the supported chain IDs for Daffi Wallet
});

export const DaffiWalletProvider = ({ children }) => {
  const { activate, active, account } = useWeb3React();
  const [connected, setConnected] = useState(false);

  const connectDaffiWallet = async () => {
    try {
      await activate(injected);
      setConnected(true);
    } catch (error) {
      console.error('Failed to connect to Daffi Wallet:', error);
    }
  };

  return (
    <DaffiWalletContext.Provider value={{ connectDaffiWallet, connected, account }}>
      {children}
    </DaffiWalletContext.Provider>
  );
};
