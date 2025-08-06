import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
              A platform that allows anyone to create their own Solana-based tokens without any coding knowledge.
            </p>
          </div>
          
          <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-colors">
            <h3 className="font-bold text-xl text-cyan-300 mb-2">How do I create a token?</h3>
            <p className="text-gray-300">
              Connect your wallet, fill in token details, pay the 0.1 SOL fee, and click create.
            </p>
          </div>
          
          <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-colors">
            <h3 className="font-bold text-xl text-cyan-300 mb-2">Are there any fees?</h3>
            <p className="text-gray-300">
              Yes, there is a 0.1 SOL fee for each token creation to cover network and platform costs.
            </p>
          </div>
          
          <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-colors">
            <h3 className="font-bold text-xl text-cyan-300 mb-2">How does liquidity management work?</h3>
            <p className="text-gray-300">
              You can add or remove liquidity manually at any time, or set up automatic liquidity management based on token price.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Ready to Launch Your Token?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Join thousands of creators who have launched their tokens on Solana
        </p>
        <Link 
          to="/create"
          className="group relative inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-5 px-10 rounded-full text-xl transition-all transform hover:scale-110 hover:shadow-2xl shadow-pink-500/30 duration-300 overflow-hidden"
        >
          <span className="relative z-10">Create Your Token Now</span>
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
