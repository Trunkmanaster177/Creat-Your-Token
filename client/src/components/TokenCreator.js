import React from 'react';

const TokenCreator = () => {
  return (
    <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-xl p-6 border border-indigo-500">
      <h2 className="text-2xl font-bold mb-4 text-cyan-300">Create New Token</h2>
      <p className="text-gray-300 mb-4">
        Launch your own Solana token in seconds with our easy-to-use interface.
      </p>
      <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all">
        Create Token
      </button>
    </div>
  );
};

export default TokenCreator;
