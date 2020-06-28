/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
function padEnd(arr, str) {
  for (let i = 0; i < arr.length; i += 1) {
    const reg = arr[i].length;
    for (let j = 1; j <= arr[0].length - reg; j += 1) {
      arr[i].push(str);
    }
  }
  return arr;
}

function isArr(arr) {
  let check = true;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== 0) {
      check = false;
    }
  }
  return check;
}

function add(num, carrier) {
  const total = [];
  const carr = [0];
  for (let p = 0; p < num.length; p += 1) {
    total.push((num[p] + carrier[p]) % 10);
    carr.push(Math.floor((num[p] + carrier[p]) / 10));
  } if (isArr(carrier)) {
    return num;
  }
  return add(total, carr);
}

function mutiply(a, b) {
  const a_temp = a.split('');
  const b_temp = b.split('');
  let reg = [];
  let total = [];
  const total_plus = [];
  const carrier = [0];
  for (let i = 0; i < a_temp.length; i += 1) {
    const carrier_muti = [0];
    const number_muti = [];
    const carrier_plus = [0];
    const number_final = [];
    for (let j = b_temp.length - 1; j >= 0; j -= 1) {
      carrier_muti.push(Math.floor(((Number(a_temp[i]) * Number(b_temp[j])) / 10)));
      number_muti.push((Number(a_temp[i]) * Number(b_temp[j])) % 10);
    }
    number_muti.push(0);
    for (let k = 0; k < carrier_muti.length; k += 1) {
      carrier_plus.push(Math.floor((number_muti[k] + carrier_muti[k]) / 10));
      number_muti[k] = (number_muti[k] + carrier_muti[k]) % 10;
      number_final.push(number_muti[k] + carrier_plus[k]);
    }
    for (let m = 1; m < a_temp.length - i; m += 1) {
      number_final.unshift(0);
    }
    reg.push(number_final);
  }
  reg = padEnd(reg, 0);
  for (let p = 0; p < reg[0].length; p += 1) {
    let sum = 0;
    for (let q = 0; q < reg.length; q += 1) {
      sum += reg[q][p];
    }
    total_plus.push(sum % 10);
    carrier.push(Math.floor(sum / 10));
  }
  total_plus.push(0);
  total = add(total_plus, carrier);
  while (total[total.length - 1] === 0) {
    total.splice(total.length - 1, 1);
  }
  console.log(total.reverse().join(''));
}
