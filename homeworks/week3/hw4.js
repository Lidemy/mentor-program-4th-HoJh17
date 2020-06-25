/* eslint-disable linebreak-style */
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

function solve(input) {
  let str = '';
  for (let i = input[0].length - 1; i >= 0; i -= 1) {
    str += input[0][i];
  }
  if (input[0] === str) {
    console.log('True');
  } else {
    console.log('False');
  }
}

rl.on('close', () => {
  solve(lines);
});
