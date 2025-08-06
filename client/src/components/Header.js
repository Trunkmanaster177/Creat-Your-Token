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
    <header className="bg-black bg-opacity-30 backdrop-blur-md border-b border-indigo-500 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          SolanaTokenCreator
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="hover:text-cyan-300 transition-colors font-medium">Home</a>
          <a href="/create" className="hover:text-cyan-300 transition-colors font-medium">Create Token</a>
          <a href="/manage" className="hover:text-cyan-300 transition-colors font-medium">Manage</a>
        </nav>
        {walletAddress ? (
          <div className="flex items-center space-x-4">
            <span className="bg-gray-800 px-3 py-1 rounded-full text-sm font-mono">
              {shortenAddress(walletAddress)}
            </span>
            <button 
              onClick={disconnectWallet}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-2 px-4 rounded-lg transition-all transform hover:scale-105"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <button 
            onClick={handleConnect}
            disabled={isConnecting}
            className={`bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-all transform hover:scale-105 ${isConnecting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isConnecting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Connecting...
              </span>
            ) : 'Connect Wallet'}
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
