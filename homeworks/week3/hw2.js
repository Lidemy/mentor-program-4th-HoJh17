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
  const reg = input[0].split(' ');
  let sum = 0;
  for (let i = Number(reg[0]); i <= Number(reg[1]); i += 1) {
    const arr = [];
    sum = 0;
    for (let j = 0; j < i.toString().length; j += 1) {
      arr.push(i.toString()[j]);
    }
    for (let j = 0; j < i.toString().length; j += 1) {
      sum += Number(arr[j]) ** i.toString().length;
    }
    if (sum === i) {
      console.log(i);
    }
  }
}

rl.on('close', () => {
  solve(lines);
});
