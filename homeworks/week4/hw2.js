/* eslint-disable linebreak-style */
const request = require('request');
const process = require('process');

switch (process.argv[2]) {
  case 'list':
    request('https://lidemy-book-store.herokuapp.com/books/?_limit=30', (error, response, body) => {
      let json;
      try {
        json = JSON.parse(body);
      } catch (e) {
        console.log(e);
      }
      for (let i = 0; i < json.length; i += 1) {
        console.log(`${json[i].id} ${json[i].name}`);
      }
    });
    break;
  case 'read':
    request(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`, (error, response, body) => {
      let json;
      try {
        json = JSON.parse(body);
      } catch (e) {
        console.log(e);
      }
      console.log(json.name);
    });
    break;
  case 'create':
    request.post({
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: {
        name: process.argv[3],
      },
    },
    (error, response, body) => {
      console.log(body);
    });
    break;
  case 'delete':
    request.delete(
      `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`, () => {
      },
    );
    break;
  case 'update':
    request.patch({
      url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      form: {
        name: process.argv[4],
      },
    }, () => {
    });
    break;
  default:
}
