/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
const request = require('request');
const process = require('process');

request({
  type: 'GET',
  url: `https://api.twitch.tv/kraken/search/channels?query=${process.argv[2]}&limit=100`,
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': 'rnvygeyzwvzacjrd34amb082t85dny',
  },
}, (error, response, body) => {
  const json = JSON.parse(body);
  const arr = [];
  let reg = 0;
  for (let i = 0; i < json.channels.length; i += 1) {
    arr.push({
      name: json.channels[i].name,
      id: json.channels[i]._id,
      views: json.channels[i].views,
    });
  }
  for (let j = 0; j < arr.length - 1; j += 1) {
    for (let k = j + 1; k < arr.length; k += 1) {
      if (arr[j].views < arr[k].views) {
        reg = arr[j];
        arr[j] = arr[k];
        arr[k] = reg;
      }
    }
  }
  for (let m = 0; m < arr.length; m += 1) {
    console.log(`${arr[m].name}  ${arr[m].id}`);
  }
  console.log(json);
});
