import { DeflyWallet } from "@deflywallet/connect"; // Replace with actual import if library differs

let walletInstance;

export const connectToDefly = async () => {
  try {
    walletInstance = new DeflyWallet();
    const connected = await walletInstance.connect();
    if (connected) {
      const accounts = walletInstance.accounts;
      console.log("Connected Accounts:", accounts);
      return accounts;
    }
  } catch (error) {
    console.error("Error connecting to Defly Wallet:", error);
    throw error;
  }
};

export const getWalletInstance = () => walletInstance;

export const getDeflyQRCode = () => {
  // Simulate QR code generation
  return 'https://example.com/qrcode';
};
