import React from 'react';
import { useWallet } from '../hooks/useSolana';

const Header = () => {
  const { connectWallet, disconnectWallet, walletAddress, isConnecting } = useWallet();

  const handleConnect = async () => {
    // Check if on mobile device
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile && !window.solana) {
      const confirmed = window.confirm(
        "To use this app on mobile:\n" +
        "1. Install the Phantom Wallet app from your app store\n" +
        "2. Open this website in your mobile browser (Safari/Chrome)\n" +
        "3. Try connecting again\n\n" +
        "Press OK to continue with connection attempt."
      );
      
      if (!confirmed) return;
    }
    
    await connectWallet();
  };

  // Function to shorten wallet address
  const shortenAddress = (address) => {
    if (!address) return '';
    return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
  };

  return (
    <header className="bg-black bg-opacity-30 backdrop-blur-md border-b border-indigo-500">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          SolanaTokenCreator
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="hover:text-cyan-300 transition-colors">Home</a>
          <a href="/create" className="hover:text-cyan-300 transition-colors">Create Token</a>
          <a href="/manage" className="hover:text-cyan-300 transition-colors">Manage</a>
        </nav>
        {walletAddress ? (
          <div className="flex items-center space-x-4">
            <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
              {shortenAddress(walletAddress)}
            </span>
            <button 
              onClick={disconnectWallet}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <button 
            onClick={handleConnect}
            disabled={isConnecting}
            className={`bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-4 py-2 rounded-lg transition-all ${isConnecting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isConnecting ? 'Connecting...' : 'Connect Wallet'}
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
