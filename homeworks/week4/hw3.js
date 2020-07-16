/* eslint-disable linebreak-style */
const request = require('request');
const process = require('process');

request(
  `https://restcountries.eu/rest/v2/name/${process.argv[2]}`,
  (error, response, body) => {
    let json;
    try {
      json = JSON.parse(body);
    } catch (e) {
      console.log(e);
    }
    if (json.status >= 400 && json.status < 500) {
      console.log('找不到國家資訊');
    } else {
      for (let i = 0; i < json.length; i += 1) {
        console.log('===========');
        console.log(`國家 : ${json[i].name}`);
        console.log(`首都 : ${json[i].capital}`);
        console.log(`貨幣 : ${json[i].currencies[0].code}`);
        console.log(`國碼 : ${json[i].callingCodes}`);
      }
    }
  },
);
