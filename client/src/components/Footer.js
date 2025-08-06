import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-30 backdrop-blur-md border-t border-indigo-500 py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-300">
          © {new Date().getFullYear()} Solana Token Creator. All rights reserved.
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Launch your own Solana token in seconds. No coding required.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
