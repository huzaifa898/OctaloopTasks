import { DeflyWalletConnect } from "@blockshake/defly-connect";

let deflyWalletInstance;

export const connectToDeflyWallet = async () => {
  try {
    deflyWalletInstance = new DeflyWalletConnect();
    const connected = await deflyWalletInstance.connect();
    if (connected) {
      const accounts = deflyWalletInstance.accounts;
      console.log("Connected Accounts:", accounts);
      return accounts;
    }
  } catch (error) {
    console.error("Error connecting to Defly Wallet:", error);
    throw error;
  }
};

export const getDeflyWalletInstance = () => deflyWalletInstance;

export const getDeflyQRCode = () => {
  // Simulate QR code generation
  return 'https://example.com/qrcode';
};
