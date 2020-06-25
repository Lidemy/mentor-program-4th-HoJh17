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
  for (let i = 1; i < input.length; i += 1) {
    if (Number(input[i]) === 1) {
      console.log('Composite');
    } else if (Number(input[i]) === 2) {
      console.log('Prime');
    } else {
      for (let j = 2; j < Number(input[i]); j += 1) {
        if (Number(input[i]) % j === 0) {
          console.log('Composite');
          break;
        } else if (j === Number(input[i]) - 1) {
          console.log('Prime');
          break;
        }
      }
    }
  }
}

rl.on('close', () => {
  solve(lines);
});
