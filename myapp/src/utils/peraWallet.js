import { PeraWalletConnect } from '@perawallet/connect';

let peraWalletInstance = null;

export const getPeraWalletInstance = () => {
  if (!peraWalletInstance) {
    peraWalletInstance = new PeraWalletConnect();
  }
  return peraWalletInstance;
};
