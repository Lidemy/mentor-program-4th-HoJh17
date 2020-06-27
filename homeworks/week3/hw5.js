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
  for (let i = 1; i <= Number(input[0]); i += 1) {
    const reg = input[i].split(' ');
    if (Number(reg[2]) === 1) {
      if (reg[0].length > reg[1].length) {
        console.log('A');
      } else if (reg[0].length < reg[1].length) {
        console.log('B');
      } else {
        for (let j = 0; j < reg[0].length; j += 1) {
          if (Number(reg[0][j]) > Number(reg[1][j])) {
            console.log('A');
            break;
          } else if (Number(reg[0][j]) < Number(reg[1][j])) {
            console.log('B');
            break;
          }
          if (j === reg[0].length - 1) {
            console.log('DRAW');
          }
        }
      }
    } else if (Number(reg[2]) === -1) {
      if (reg[0].length > reg[1].length) {
        console.log('B');
      } else if (reg[0].length < reg[1].length) {
        console.log('A');
      } else {
        for (let k = 0; k < reg[0].length; k += 1) {
          if (Number(reg[0][k]) > Number(reg[1][k])) {
            console.log('B');
            break;
          } else if (Number(reg[0][k]) < Number(reg[1][k])) {
            console.log('A');
            break;
          }
          if (k === reg[0].length - 1) {
            console.log('DRAW');
          }
        }
      }
    }
  }
}


rl.on('close', () => {
  solve(lines);
});
