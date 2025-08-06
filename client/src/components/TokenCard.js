import React from 'react';

const TokenCard = ({ token }) => {
  return (
    <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-xl p-6 border border-indigo-500 hover:border-cyan-400 transition-colors">
      <div className="flex items-center mb-4">
        <div className="bg-gray-700 rounded-full w-12 h-12 mr-4"></div>
        <div>
          <h3 className="font-bold text-lg">{token.name}</h3>
          <p className="text-gray-400 text-sm">{token.symbol}</p>
        </div>
      </div>
      
      <div className="space-y-2 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-400">Price:</span>
          <span>{token.price || '0.00'} SOL</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Liquidity:</span>
          <span>{token.liquidity || '0.00'} SOL</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Market Cap:</span>
          <span>{token.marketCap || '0.00'} SOL</span>
        </div>
      </div>
      
      <div className="flex space-x-2">
        <button className="flex-1 bg-cyan-600 hover:bg-cyan-700 py-2 rounded-lg text-sm">
          Trade
        </button>
        <button className="flex-1 bg-purple-600 hover:bg-purple-700 py-2 rounded-lg text-sm">
          Manage
        </button>
      </div>
    </div>
  );
};

export default TokenCard;
