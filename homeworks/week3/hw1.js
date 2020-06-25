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
  let sum = '';
  for (let i = 1; i <= Number(input[0]); i += 1) {
    for (let j = 0; j < i; j += 1) {
      sum += '*';
    }
    console.log(sum);
  }
}

rl.on('close', () => {
  solve(lines);
});
