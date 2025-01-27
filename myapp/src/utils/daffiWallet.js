import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

let daffiWalletInstance;

// Function to connect to Daffi Wallet
export const connectToDaffiWallet = async () => {
  const connector = new WalletConnect({
    bridge: "https://bridge.walletconnect.org", // Required
    qrcodeModal: QRCodeModal,
  });

  // Check if connection is already established
  if (!connector.connected) {
    // Create a new session
    await connector.createSession();
  }

  daffiWalletInstance = connector;

  // Setup disconnect event listener
  connector.on("disconnect", handleDisconnectWalletClick);

  return connector.accounts || [];
};

// Function to handle disconnect event (for cleanup)
const handleDisconnectWalletClick = () => {
  console.log("Wallet disconnected.");
  // Handle any necessary cleanup after disconnect
};

// Function to reconnect session when the page is refreshed
export const reconnectSession = async () => {
  if (daffiWalletInstance && daffiWalletInstance.connected) {
    return daffiWalletInstance.accounts || [];
  }
  return [];
};

// Function to sign a transaction (single transaction example)
export const signTransaction = async (txnGroups) => {
  try {
    const signedTxn = await daffiWalletInstance.signTransaction([txnGroups]);
    console.log("Signed Transaction:", signedTxn);
    return signedTxn;
  } catch (error) {
    console.log("Couldn't sign transaction:", error);
    throw error;
  }
};

// Get the Daffi Wallet instance (if needed elsewhere)
export const getDaffiWalletInstance = () => daffiWalletInstance;
