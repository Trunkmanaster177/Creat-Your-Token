import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL
} from '@solana/web3.js';

// Create context
const WalletContext = createContext();

// Provider component
export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    const conn = new Connection("https://api.mainnet-beta.solana.com");
    setConnection(conn);
  }, []);

  const connectWallet = async () => {
    if (window.solana) {
      try {
        const response = await window.solana.connect();
        setWalletAddress(response.publicKey.toString());
      } catch (err) {
        console.error("Failed to connect wallet:", err);
      }
    } else {
      alert("Please install Phantom wallet!");
    }
  };

  const disconnectWallet = () => {
    if (window.solana) {
      window.solana.disconnect();
      setWalletAddress(null);
    }
  };

  const createToken = async (tokenData) => {
    // This is a simplified version - in reality, you would interact with your Solana program
    console.log("Creating token with ", tokenData);
    
    // Simulate the token creation process
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, tokenId: "mock-token-id" });
      }, 2000);
    });
  };

  return (
    <WalletContext.Provider value={{
      walletAddress,
      connectWallet,
      disconnectWallet,
      createToken
    }}>
      {children}
    </WalletContext.Provider>
  );
};

// Custom hook to use wallet context
export const useWallet = () => {
  return useContext(WalletContext);
};
