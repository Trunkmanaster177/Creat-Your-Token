import React from 'react';

const LiquidityManager = () => {
  return (
    <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-xl p-6 border border-indigo-500">
      <h2 className="text-2xl font-bold mb-4 text-cyan-300">Liquidity Management</h2>
      <p className="text-gray-300 mb-4">
        Add or remove liquidity from your token pools automatically or manually.
      </p>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
          <span>Auto Liquidity</span>
          <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm">
            Disabled
          </button>
        </div>
        <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
          <span>Manual Add Liquidity</span>
          <button className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg text-sm">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiquidityManager;
