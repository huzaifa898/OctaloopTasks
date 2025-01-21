let daffiWalletInstance;

// Function to connect to Daffi Wallet
export const connectToDaffiWallet = async () => {
  try {
    // Mock implementation of Daffi wallet connection
    daffiWalletInstance = {
      connect: async () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(['daffi-account-1']);
          }, 1000);
        });
      },
      reconnectSession: async () => {
        // Simulate reconnecting to the session (e.g., on page refresh)
        return ['daffi-account-1']; // Assuming the wallet is still connected
      },
      connector: {
        on: (event, callback) => {
          if (event === 'disconnect') {
            // Mock disconnect listener
            callback();
          }
        }
      },
      accounts: ['daffi-account-1'],
    };

    // Connect to Daffi wallet and get the account information
    const accounts = await daffiWalletInstance.connect();
    console.log("Connected Accounts:", accounts);

    // Setup disconnect event listener
    daffiWalletInstance.connector?.on('disconnect', handleDisconnectWalletClick);

    return accounts;
  } catch (error) {
    console.error("Error connecting to Daffi Wallet:", error);
    throw error;
  }
};

// Function to handle disconnect event (for cleanup)
const handleDisconnectWalletClick = () => {
  console.log("Wallet disconnected.");
  // Handle any necessary cleanup after disconnect
};

// Function to reconnect session when the page is refreshed
export const reconnectSession = async () => {
  try {
    const accounts = await daffiWalletInstance.reconnectSession();
    console.log("Reconnected Accounts:", accounts);

    // Setup disconnect event listener after reconnecting
    daffiWalletInstance.connector?.on('disconnect', handleDisconnectWalletClick);

    return accounts;
  } catch (error) {
    console.error("Error reconnecting session:", error);
    throw error;
  }
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

// Simulate QR code generation (assuming it's a URL for now)
export const getDaffiQRCode = () => {
  return 'https://web.daffiwallet.app/';
};
