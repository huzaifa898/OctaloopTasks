import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

let daffiWalletInstance;

// Function to connect to Daffi Wallet
export const connectToDaffiWallet = async () => {
  try {
    // Initialize WalletConnect connector with the Daffi Wallet bridge and modal
    const connector = new WalletConnect({
      bridge: "https://bridge.walletconnect.org", // WalletConnect bridge
      qrcodeModal: QRCodeModal, // QR code modal for Daffi Wallet
    });

    // Check if the connector is already connected
    if (!connector.connected) {
      // Create a new session if not connected (this triggers the QR code modal)
      await connector.createSession();
    }

    // Store the connector instance for reuse
    daffiWalletInstance = connector;

    // Set up the event listener for disconnect
    connector.on("disconnect", handleDisconnectWalletClick);

    // Retrieve and return connected accounts
    console.log("Connected accounts:", connector.accounts);
    return connector.accounts || [];
  } catch (error) {
    console.error("Error connecting to Daffi Wallet:", error);
    throw error;
  }
};

// Function to handle disconnect event
const handleDisconnectWalletClick = () => {
  console.log("Daffi Wallet disconnected.");
  daffiWalletInstance = null; // Clear the instance
};

// Function to reconnect session when the page is refreshed or revisited
export const reconnectSession = async () => {
  try {
    if (daffiWalletInstance && daffiWalletInstance.connected) {
      console.log("Reconnected accounts:", daffiWalletInstance.accounts);
      return daffiWalletInstance.accounts || [];
    }
    return [];
  } catch (error) {
    console.error("Error reconnecting session:", error);
    throw error;
  }
};

// Function to sign a transaction
export const signTransaction = async (txnGroups) => {
  try {
    if (!daffiWalletInstance) {
      throw new Error("Daffi Wallet is not connected.");
    }

    // Sign the transaction with the Daffi Wallet instance
    const signedTxn = await daffiWalletInstance.signTransaction([txnGroups]);
    console.log("Signed Transaction:", signedTxn);
    return signedTxn;
  } catch (error) {
    console.error("Couldn't sign transaction:", error);
    throw error;
  }
};

// Function to disconnect Daffi Wallet
export const disconnectDaffiWallet = async () => {
  try {
    if (daffiWalletInstance) {
      // Kill the session to disconnect Daffi Wallet
      await daffiWalletInstance.killSession();
      daffiWalletInstance = null; // Clear the instance
      console.log("Daffi Wallet disconnected successfully.");
    }
  } catch (error) {
    console.error("Error disconnecting Daffi Wallet:", error);
    throw error;
  }
};

// Get the Daffi Wallet instance (if needed elsewhere)
export const getDaffiWalletInstance = () => daffiWalletInstance;
