export const hammingDistance = (...strings) => {
  // Check if there are at least two strings to compare
  if (strings.length < 2) {
    throw new Error(
      "At least two strings are required to calculate Hamming distance."
    );
  }

  // Check if all strings have the same length
  const length = strings[0].length;
  const allSameLength = strings.every((str) => str.length === length);

  if (!allSameLength) {
    throw new Error(
      "All strings must have the same length to calculate Hamming distance."
    );
  }

  let minDistance = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < strings.length; i++) {
    for (let j = i + 1; j < strings.length; j++) {
      let distance = 0;
      for (let k = 0; k < length; k++) {
        if (strings[i][k] !== strings[j][k]) {
          distance++;
        }
      }
      minDistance = Math.min(minDistance, distance);
    }
  }

  return minDistance;
};
