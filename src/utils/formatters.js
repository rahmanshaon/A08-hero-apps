export const formatCompactNumber = (num) => {
  if (num >= 1_000_000) {
    // Format number as millions (M)
    return `${(num / 1_000_000).toFixed(0)}M`;
  }
  if (num >= 1_000) {
    // Format number as thousands (K)
    return `${(num / 1_000).toFixed(0)}K`;
  }
  return num.toString();
};
