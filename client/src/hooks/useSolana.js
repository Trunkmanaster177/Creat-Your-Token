import React, { createContext, useContext, useState } from 'react';
import {
  Connection,
  PublicKey,
  Transaction,
  SystemProgram
} from '@solana/web3.js';

// Create context
const WalletContext = createContext();

// Provider component
export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    // Check for Phantom wallet
    if (window.solana && window.solana.isPhantom) {
      try {
        const response = await window.solana.connect();
        setWalletAddress(response.publicKey.toString());
      } catch (err) {
        console.error("Failed to connect wallet:", err);
        alert("Failed to connect to Phantom wallet. Please make sure it's installed and unlocked.");
      }
    } 
    // Check for generic Solana provider (mobile wallets)
    else if (window.solana) {
      try {
        const response = await window.solana.connect();
        setWalletAddress(response.publicKey.toString());
      } catch (err) {
        console.error("Failed to connect wallet:", err);
        alert("Failed to connect to wallet. Please make sure it's installed and unlocked.");
      }
    }
    // Mobile deep linking for Phantom
    else if (/Android|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) {
      // Try to open Phantom app via deep link
      const deepLink = `phantom://v1/connect?dapp_encryption_public_key=&cluster=mainnet-beta&app_url=${encodeURIComponent(window.location.origin)}&redirect_link=${encodeURIComponent(window.location.href)}`;
      
      // Create an iframe to trigger the deep link (some mobile browsers require this)
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = deepLink;
      document.body.appendChild(iframe);
      
      // Also try to open in new tab (fallback)
      setTimeout(() => {
        window.open(deepLink, '_blank');
      }, 500);
      
      // Remove iframe after a short delay
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 2000);
      
      alert("If Phantom app doesn't open automatically, please open it manually and try connecting again.");
    }
    else {
      // Provide instructions for mobile users
      if (/Android|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) {
        alert("To use this app on mobile, please:\n1. Install the Phantom Wallet app\n2. Open this website in your mobile browser (not within the Phantom app)\n3. Try connecting again");
      } else {
        alert("Please install Phantom wallet browser extension!");
      }
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
