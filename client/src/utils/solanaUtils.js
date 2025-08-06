// Utility functions for Solana interactions
export const formatSolAmount = (lamports) => {
  if (!lamports) return '0 SOL';
  return `${(lamports / 1000000000).toFixed(4)} SOL`;
};

export const shortenAddress = (address, chars = 4) => {
  if (!address) return '';
  return `${address.substring(0, chars)}...${address.substring(address.length - chars)}`;
};

export const isValidSolanaAddress = (address) => {
  try {
    // Basic validation - in a real app, you'd use @solana/web3.js PublicKey
    return address.length === 44;
  } catch {
    return false;
  }
};
