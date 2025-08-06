import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trendingTokens, setTrendingTokens] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock trending tokens data (in a real app, you'd fetch this from an API)
  useEffect(() => {
    const mockTokens = [
      { id: 1, name: 'DogeCoin', symbol: 'DOGE', price: '0.08', change: '+12.5%' },
      { id: 2, name: 'ShibaInu', symbol: 'SHIB', price: '0.000009', change: '+8.3%' },
      { id: 3, name: 'PepeCoin', symbol: 'PEPE', price: '0.0000012', change: '+22.1%' },
      { id: 4, name: 'Floki', symbol: 'FLOKI', price: '0.00015', change: '+5.7%' },
      { id: 5, name: 'Bonk', symbol: 'BONK', price: '0.000023', change: '+15.2%' },
      { id: 6, name: 'Wen', symbol: 'WEN', price: '0.00034', change: '+3.8%' },
    ];
    setTimeout(() => {
      setTrendingTokens(mockTokens);
      setLoading(false);
    }, 1000);
  }, []);

  const refreshTokens = () => {
    setLoading(true);
    setTimeout(() => {
      const mockTokens = [
        { id: 1, name: 'DogeCoin', symbol: 'DOGE', price: '0.082', change: '+14.2%' },
        { id: 2, name: 'ShibaInu', symbol: 'SHIB', price: '0.0000092', change: '+9.1%' },
        { id: 3, name: 'PepeCoin', symbol: 'PEPE', price: '0.0000013', change: '+25.7%' },
        { id: 4, name: 'Floki', symbol: 'FLOKI', price: '0.000155', change: '+6.3%' },
        { id: 5, name: 'Bonk', symbol: 'BONK', price: '0.000024', change: '+17.8%' },
        { id: 6, name: 'Wen', symbol: 'WEN', price: '0.00035', change: '+4.5%' },
      ];
      setTrendingTokens(mockTokens);
      setLoading(false);
    }, 800);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Hero Section */}
      <div className="text-center py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 opacity-70 rounded-3xl transform rotate-1 scale-105"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            LAUNCH YOUR COIN
          </h1>
          <div className="text-3xl md:text-5xl font-extrabold mb-8 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              FAST ⚡
            </span>
          </div>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-medium">
            Launch your own token on Solana in seconds. No coding required.
          </p>
          <Link 
            to="/create"
            className="group relative inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-5 px-10 rounded-full text-xl md:text-2xl transition-all transform hover:scale-110 hover:shadow-2xl shadow-cyan-500/30 duration-300 overflow-hidden"
          >
            <span className="relative z-10">Create Token Now</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
          </Link>
        </div>
      </div>

      {/* Mobile Instructions */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-6 mb-16 border-2 border-yellow-400 shadow-lg">
        <div className="flex items-start">
          <span className="text-2xl mr-3">📱</span>
          <div>
            <h3 className="text-xl font-bold mb-2 text-white">Mobile Users</h3>
            <p className="text-white font-medium">
              To use this app on mobile devices:
            </p>
            <ol className="list-decimal list-inside mt-2 space-y-1 text-white">
              <li>Install the Phantom Wallet app from your app store</li>
              <li>Open this website in your mobile browser (Safari/Chrome)</li>
              <li>Click "Connect Wallet" and select Phantom from the options</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-indigo-500 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group">
          <div className="text-cyan-400 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
          <h3 className="text-2xl font-bold mb-3 text-white">Instant Launch</h3>
          <p className="text-gray-300">
            Create your token in seconds with our streamlined process. No technical knowledge required.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-indigo-500 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group">
          <div className="text-purple-400 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💰</div>
          <h3 className="text-2xl font-bold mb-3 text-white">Liquidity Management</h3>
          <p className="text-gray-300">
            Add or remove liquidity manually or set up automatic management based on token price.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-indigo-500 hover:border-pink-400 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 group">
          <div className="text-pink-400 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
          <h3 className="text-2xl font-bold mb-3 text-white">0.1 SOL Fee</h3>
          <p className="text-gray-300">
            Transparent pricing with only a 0.1 SOL fee per token creation. No hidden costs.
          </p>
        </div>
      </div>

      {/* Trending Tokens Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 mb-16 border border-indigo-500">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Trending Tokens from Pump.fun
          </h2>
          <button 
            onClick={refreshTokens}
            className="flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-4 rounded-lg transition-all transform hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
            Refresh
          </button>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingTokens.map((token) => (
              <div key={token.id} className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-white">{token.name}</h3>
                    <p className="text-gray-400">{token.symbol}</p>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(token.symbol)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    title="Copy symbol"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                      <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                    </svg>
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-300">Price: <span className="font-bold text-white">{token.price}</span></p>
                    <p className={`font-bold ${token.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {token.change}
                    </p>
                  </div>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition-all transform hover:scale-105">
                    Trade
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Liquidity Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 mb-16 border border-indigo-500">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Add Liquidity via Raydium
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gray-800 bg-opacity-50 rounded-xl p-8 border border-gray-700 mb-8">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Easy Liquidity Management</h3>
            <p className="text-gray-300 mb-6">
              Add liquidity to your token pools with just a few clicks. Our integration with Raydium makes it simple to provide liquidity and earn trading fees.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-700 bg-opacity-50 rounded-lg p-4">
                <p className="text-cyan-400 font-bold">Step 1</p>
                <p className="text-white">Connect Wallet</p>
              </div>
              <div className="bg-gray-700 bg-opacity-50 rounded-lg p-4">
                <p className="text-cyan-400 font-bold">Step 2</p>
                <p className="text-white">Select Token</p>
              </div>
              <div className="bg-gray-700 bg-opacity-50 rounded-lg p-4">
                <p className="text-cyan-400 font-bold">Step 3</p>
                <p className="text-white">Add Liquidity</p>
              </div>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105">
              Add Liquidity Now
            </button>
          </div>
        </div>
      </div>

      {/* How to Use Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 mb-16 border border-indigo-500">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          How to use Solana Token Creator
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="flex items-start group">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Connect Wallet</h3>
                <p className="text-gray-300">
                  Connect your Solana wallet (Phantom, Solflare, etc.) to get started.
                </p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Token Details</h3>
                <p className="text-gray-300">
                  Fill in your token details (name, symbol, supply) with our easy form.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start group">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Pay Fee</h3>
                <p className="text-gray-300">
                  Pay the 0.1 SOL fee to cover network and platform costs.
                </p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Launch Instantly</h3>
                <p className="text-gray-300">
                  Launch your token instantly and start trading on Solana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 mb-16 border border-indigo-500">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-colors">
            <h3 className="font-bold text-xl text-cyan-300 mb-2">What is Solana Token Creator?</h3>
            <p className="text-gray-300">
              A platform that allows anyone to create their own
