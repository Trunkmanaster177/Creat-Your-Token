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
  const [isConnecting, setIsConnecting] = useState(false);

  const connectWallet = async () => {
    setIsConnecting(true);
    
    try {
      // Check for Phantom wallet
      if (window.solana && window.solana.isPhantom) {
        console.log("Phantom wallet detected");
        try {
          const response = await window.solana.connect();
          setWalletAddress(response.publicKey.toString());
          console.log("Connected to wallet:", response.publicKey.toString());
        } catch (err) {
          console.error("Failed to connect wallet:", err);
          // Try manual connection for mobile
          if (/Android|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) {
            handleMobileConnection();
          } else {
            alert("Failed to connect to Phantom wallet. Please make sure it's installed and unlocked.");
          }
        }
      } 
      // Check for generic Solana provider
      else if (window.solana) {
        console.log("Generic Solana provider detected");
        try {
          const response = await window.solana.connect();
          setWalletAddress(response.publicKey.toString());
          console.log("Connected to wallet:", response.publicKey.toString());
        } catch (err) {
          console.error("Failed to connect wallet:", err);
          alert("Failed to connect to wallet. Please make sure it's installed and unlocked.");
        }
      }
      // Mobile deep linking for Phantom
      else if (/Android|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) {
        handleMobileConnection();
      }
      else {
        alert("Please install Phantom wallet browser extension!");
      }
    } finally {
      setIsConnecting(false);
    }
  };

  const handleMobileConnection = () => {
    console.log("Handling mobile connection");
    
    // Try to open Phantom app via deep link
    const appUrl = `phantom://v1/connect?dapp_encryption_public_key=&cluster=mainnet-beta&app_url=${encodeURIComponent(window.location.origin)}&redirect_link=${encodeURIComponent(window.location.href)}`;
    
    // For iOS, we need to use a different approach
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if (isIOS) {
      // Try to open in the same window for iOS
      window.location.href = appUrl;
    } else {
      // For Android, try both iframe and window.open
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = appUrl;
      document.body.appendChild(iframe);
      
      // Also try to open in new tab (fallback)
      setTimeout(() => {
        window.open(appUrl, '_blank');
      }, 500);
      
      // Remove iframe after a short delay
      setTimeout(() => {
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe);
        }
      }, 2000);
    }
    
    alert("If Phantom app doesn't open automatically:\n1. Open the Phantom app manually\n2. Return to this browser tab\n3. Try connecting again");
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
      isConnecting,
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
