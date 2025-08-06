import React from 'react';

const ManageToken = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Manage Your Tokens</h1>
      
      <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-xl p-8 border border-indigo-500">
        <p className="text-center text-xl">
          Connect your wallet to view and manage your created tokens
        </p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for token cards */}
          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 text-center">
            <div className="bg-gray-700 rounded-full w-16 h-16 mx-auto mb-4"></div>
            <h3 className="font-bold text-lg">Your Tokens</h3>
            <p className="text-gray-400 text-sm mt-2">Connect wallet to see your tokens</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageToken;
