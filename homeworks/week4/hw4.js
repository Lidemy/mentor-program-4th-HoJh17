/* eslint-disable linebreak-style */
const request = require('request');

request({
  type: 'GET',
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': 'rnvygeyzwvzacjrd34amb082t85dny',
  },
}, (error, response, body) => {
  const json = JSON.parse(body);
  for (let i = 0; i < json.top.length; i += 1) {
    console.log(`${json.top[i].viewers} ${json.top[i].game.name}`);
  }
});
