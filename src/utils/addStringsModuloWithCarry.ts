export const addStringsModuloWithCarry = (str1, str2, modulo) => {
  const n = Math.max(str1.length, str2.length);
  let carry = 0;
  let result = "";

  for (let i = 1; i <= n; i++) {
    const digit1 = parseInt(str1[str1.length - i] || "0", 10);
    const digit2 = parseInt(str2[str2.length - i] || "0", 10);

    const sum = digit1 + digit2 + carry;
    carry = Math.floor(sum / modulo);
    const remainder = sum % modulo;

    result = remainder.toString() + result;
  }

  if (carry > 0) {
    result = carry.toString() + result;
  }

  return result;
};
