var Fetch = require('whatwg-fetch');
var Secrets = require('../../secrets')
var rootUrl = 'https://api.imgur.com/3/';

// fetch returns a Javascript Promise
module.exports = {
  get: function(url) {
    return fetch(rootUrl + url, {
      headers: {
        "Authorization": "Client-ID " + Secrets.imgurApiKey
      }
    })
    .then(function(response) {
      return response.json();
    });
  }
};
