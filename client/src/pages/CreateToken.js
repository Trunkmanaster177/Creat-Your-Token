import React, { useState } from 'react';
import { useWallet } from '../hooks/useSolana';

const CreateToken = () => {
  const { walletAddress, createToken } = useWallet();
  const [tokenData, setTokenData] = useState({
    name: '',
    symbol: '',
    decimals: 9,
    initialSupply: '',
    description: '',
    image: ''
  });
  const [isCreating, setIsCreating] = useState(false);

  const handleChange = (e) => {
    setTokenData({
      ...tokenData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!walletAddress) {
      alert('Please connect your wallet first');
      return;
    }
    
    setIsCreating(true);
    try {
      await createToken(tokenData);
      alert('Token created successfully!');
    } catch (error) {
      console.error('Error creating token:', error);
      alert('Failed to create token. Please try again.');
    }
    setIsCreating(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Create Your Token</h1>
      
      {!walletAddress ? (
        <div className="bg-red-900 bg-opacity-50 border border-red-500 rounded-xl p-6 text-center">
          <p className="text-xl mb-4">Please connect your wallet to create a token</p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg">
            Connect Wallet
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-black bg-opacity-30 backdrop-blur-md rounded-xl p-8 border border-indigo-500">
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Token Name</label>
            <input
              type="text"
              name="name"
              value={tokenData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="e.g., My Awesome Token"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Token Symbol</label>
            <input
              type="text"
              name="symbol"
              value={tokenData.symbol}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="e.g., MAT"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Decimals</label>
            <select
              name="decimals"
              value={tokenData.decimals}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value={9}>9 (Standard for most tokens)</option>
              <option value={6}>6</option>
              <option value={8}>8</option>
              <option value={18}>18 (Ethereum-like)</option>
            </select>
          </div>
          
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Initial Supply</label>
            <input
              type="number"
              name="initialSupply"
              value={tokenData.initialSupply}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="e.g., 1000000"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Description (Optional)</label>
            <textarea
              name="description"
              value={tokenData.description}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Describe your token..."
              rows={3}
            />
          </div>
          
          <div className="mb-8">
            <label className="block text-lg font-medium mb-2">Token Image URL (Optional)</label>
            <input
              type="url"
              name="image"
              value={tokenData.image}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="https://example.com/token-image.png"
            />
          </div>
          
          <div className="bg-gray-900 bg-opacity-50 rounded-lg p-4 mb-6">
            <h3 className="font-bold text-lg mb-2">Fee Information</h3>
            <p className="text-cyan-300">0.1 SOL will be charged for token creation</p>
          </div>
          
          <button
            type="submit"
            disabled={isCreating}
            className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
              isCreating 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105'
            }`}
          >
            {isCreating ? 'Creating Token...' : 'Create Token (0.1 SOL)'}
          </button>
        </form>
      )}
    </div>
  );
};

export default CreateToken;
