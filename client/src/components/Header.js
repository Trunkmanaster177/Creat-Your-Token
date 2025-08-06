import React from 'react';
import { useWallet } from '../hooks/useSolana';

const Header = () => {
  const { connectWallet, disconnectWallet, walletAddress } = useWallet();

  const handleConnect = async () => {
    // Check if on mobile device
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile && !window.solana) {
      const confirmed = window.confirm(
        "To use this app on mobile:\n" +
        "1. Install the Phantom Wallet app\n" +
        "2. Open this website in your mobile browser (not within the Phantom app)\n" +
        "3. Try connecting again\n\n" +
        "Press OK to continue with connection attempt."
      );
      
      if (!confirmed) return;
    }
    
    await connectWallet();
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
          <button 
            onClick={disconnectWallet}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
          >
            Disconnect
          </button>
        ) : (
          <button 
            onClick={handleConnect}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-4 py-2 rounded-lg transition-all"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
