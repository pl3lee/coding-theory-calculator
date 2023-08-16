// words: number[][]
export const hammingDistance = (...words) => {
  if (words.length < 2) {
    throw new Error(
      "At least two words are required to calculate Hamming distance."
    );
  }

  // Check if all strings have the same length
  const length = words[0].length;
  const allSameLength = words.every((word) => word.length === length);

  if (!allSameLength) {
    throw new Error(
      "All words must have the same length to calculate Hamming distance."
    );
  }

  let minDistance = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      let distance = 0;
      for (let k = 0; k < length; k++) {
        if (words[i][k] !== words[j][k]) {
          distance++;
        }
      }
      minDistance = Math.min(minDistance, distance);
    }
  }

  return minDistance;
};
