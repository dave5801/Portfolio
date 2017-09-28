'use strict';
const requestProxy = require('express-request-proxy');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

/*
function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}*/

/**/
app.get('/github/*', requestProxy({
  url: `https://api.github.com/*`,
  headers: {
    Authorization: `token ${process.env.GITHUB_TOKEN}`
  }
}));

app.use(express.static('public'));

app.get('/', function(request, response){
  response.sendFile('index.html', {root: './public'});
});

let someData = {one: 1, two: 2};

app.get('/data', function(request, response){
  response.send(someData)
});

app.get('*', function(request, response){
  response.sendFile('404.html', {root: './public'});
});

app.listen(PORT, function(){
  console.log(`express server currently running on port ${PORT}`);
});
