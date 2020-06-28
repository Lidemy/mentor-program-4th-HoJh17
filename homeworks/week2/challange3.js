/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
function padEnd(arr, str) { // 將陣列內每個元素的長度填成相同
  for (let i = 0; i < arr.length; i += 1) {
    const reg = arr[i].length;
    for (let j = 1; j <= arr[0].length - reg; j += 1) {
      arr[i].push(str);
    }
  }
  return arr;
}

function add(num, carrier) { // 傳入兩矩陣，num 為每一位數字相加後取 10 的餘數矩陣，carrier 為相加後進位的數字矩陣
  const total = [];
  const carr = [0];
  for (let p = 0; p < num.length; p += 1) {
    total.push((num[p] + carrier[p]) % 10);
    carr.push(Math.floor((num[p] + carrier[p]) / 10));
  } if (carrier.filter(item => item > 0).length === 0) { // 如果 carrier的矩陣內部都是 0 則回傳 num 矩陣
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
  for (let i = 0; i < a_temp.length; i += 1) { // 控制乘數從第一位數字乘到最後一位數字
    const carrier_muti = [0];
    const number_muti = [];
    const carrier_plus = [0];
    const number_final = [];
    for (let j = b_temp.length - 1; j >= 0; j -= 1) { // 控制被乘數從最後一位數字到第一位數字
      carrier_muti.push(Math.floor(((Number(a_temp[i]) * Number(b_temp[j])) / 10)));
      number_muti.push((Number(a_temp[i]) * Number(b_temp[j])) % 10);
    }
    number_muti.push(0); // 對齊進位矩陣
    for (let k = 0; k < carrier_muti.length; k += 1) { // 處理餘數矩陣和數字矩陣
      carrier_plus.push(Math.floor((number_muti[k] + carrier_muti[k]) / 10));
      number_muti[k] = (number_muti[k] + carrier_muti[k]) % 10;
      number_final.push(number_muti[k] + carrier_plus[k]);
    }
    for (let m = 1; m < a_temp.length - i; m += 1) { // 後面補0
      number_final.unshift(0);
    }
    reg.push(number_final);
  }
  reg = padEnd(reg, 0);
  for (let p = 0; p < reg[0].length; p += 1) { // 加總
    let sum = 0;
    for (let q = 0; q < reg.length; q += 1) {
      sum += reg[q][p];
    }
    total_plus.push(sum % 10);
    carrier.push(Math.floor(sum / 10));
  }
  total_plus.push(0); // 對齊用
  total = add(total_plus, carrier);
  while (total[total.length - 1] === 0) { // 切掉多餘的 0
    total.splice(total.length - 1, 1);
  }
  console.log(total.reverse().join('')); // 矩陣反轉合併
}
