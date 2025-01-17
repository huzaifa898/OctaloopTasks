import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

let connector;

export const connectToWalletConnect = async () => {
  try {
    connector = new WalletConnect({
      bridge: "https://bridge.walletconnect.org",
    });

    // Check if connection is already established
    if (!connector.connected) {
      // Create a new session
      await connector.createSession();
    }

    // Subscribe to connection events
    connector.on("connect", (error, payload) => {
      if (error) {
        throw error;
      }

      // Get provided accounts and chainId
      const { accounts, chainId } = payload.params[0];
      console.log("Connected Accounts:", accounts);
      console.log("Connected ChainId:", chainId);
      QRCodeModal.close(); // Close the QR code modal on successful connection
    });

    connector.on("session_update", (error, payload) => {
      if (error) {
        throw error;
      }

      // Get updated accounts and chainId
      const { accounts, chainId } = payload.params[0];
      console.log("Updated Accounts:", accounts);
      console.log("Updated ChainId:", chainId);
    });

    connector.on("disconnect", (error, payload) => {
      if (error) {
        throw error;
      }

      // Delete connector
      connector = null;
    });

    // Display QR Code modal
    QRCodeModal.open(connector.uri, () => {
      console.log("QR Code Modal closed");
    });

    return connector;
  } catch (error) {
    console.error("Error connecting to WalletConnect:", error);
    throw error;
  }
};

export const getWalletConnectInstance = () => connector;
