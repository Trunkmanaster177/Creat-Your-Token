import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center py-12">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Launch Your Own Coin FAST ⚡
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Launch your own token on Solana in seconds. No coding required.
        </p>
        <Link 
          to="/create"
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 inline-block"
        >
          Create Token Now
        </Link>
      </div>

      {/* Mobile Instructions */}
      <div className="bg-yellow-900 bg-opacity-50 border border-yellow-500 rounded-xl p-6 mt-8">
        <h3 className="text-xl font-bold mb-2 text-yellow-300">📱 Mobile Users</h3>
        <p className="text-gray-200">
          To use this app on mobile devices:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1 text-gray-300">
          <li>Install the Phantom Wallet app from your app store</li>
          <li>Open this website in your mobile browser (Safari/Chrome)</li>
          <li>Click "Connect Wallet" and select Phantom from the options</li>
        </ol>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-16">
        <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-xl p-6 border border-indigo-500">
          <h2 className="text-2xl font-bold mb-4 text-cyan-300">How to use Solana Token Creator</h2>
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="bg-cyan-500 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
              <span>Connect your Solana wallet (Phantom, Solflare, etc.)</span>
            </li>
            <li className="flex items-start">
              <span className="bg-cyan-500 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
              <span>Fill in your token details (name, symbol, supply)</span>
            </li>
            <li className="flex items-start">
              <span className="bg-cyan-500 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
              <span>Pay 0.1 SOL fee</span>
            </li>
            <li className="flex items-start">
              <span className="bg-cyan-500 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">4</span>
              <span>Launch your token instantly</span>
            </li>
          </ol>
        </div>

        <div className="space-y-8">
          <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-xl p-6 border border-indigo-500">
            <h2 className="text-2xl font-bold mb-4 text-cyan-300">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg">What is Solana Token Creator?</h3>
                <p className="text-gray-300">
                  A platform that allows anyone to create their own Solana-based tokens without any coding knowledge.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg">How do I create a token?</h3>
                <p className="text-gray-300">
                  Connect your wallet, fill in token details, pay the 0.1 SOL fee, and click create.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg">Are there any fees?</h3>
                <p className="text-gray-300">
                  Yes, there is a 0.1 SOL fee for each token creation to cover network and platform costs.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg">How does liquidity management work?</h3>
                <p className="text-gray-300">
                  You can add or remove liquidity manually at any time, or set up automatic liquidity management based on token price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
