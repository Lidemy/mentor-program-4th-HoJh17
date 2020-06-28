/* eslint-disable linebreak-style */
/* eslint-disable no-else-return */
/* eslint-disable camelcase */
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

function search(arr, num) {
  let L_index = 0;
  let R_index = arr.length - 1;
  while (L_index <= R_index) {
    const M_index = Math.floor((L_index + R_index) / 2);
    if (arr[M_index] === num) {
      return M_index;
    } else if (arr[M_index] < num) {
      L_index = M_index + 1;
    } else {
      R_index = M_index - 1;
    }
  }
  return -1;
}

function solve(input) {
  const temp = input[0].split(' ');
  const arr = [];
  for (let i = 1; i <= Number(temp[0]); i += 1) {
    arr.push(Number(input[i]));
  }
  for (let j = Number(temp[0]) + 1; j < input.length; j += 1) {
    console.log(search(arr, Number(input[j])));
  }
}

rl.on('close', () => {
  solve(lines);
});
