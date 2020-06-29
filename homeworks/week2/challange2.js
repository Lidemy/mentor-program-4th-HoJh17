/* eslint-disable linebreak-style */
/* eslint-disable no-bitwise */
/* eslint-disable no-unused-vars */
function add(a, b) {
  const carrier = (a & b) << 1;
  if (carrier === 0) {
    return a ^ b;
  }
  return add(a ^ b, carrier);
}
