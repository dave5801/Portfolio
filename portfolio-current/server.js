'use strict';

const EXPRESS = require('express');
const APP = EXPRESS();
const PORT = process.env.PORT || 3000;

APP.use(EXPRESS.static('public'));

APP.get('/', function(request, response){
  response.sendFile('index.html', {root: './public'});
});

let someData = {one: 1, two: 2};

APP.get('/data', function(request, response){
  response.send(someData)
});

APP.get('*', function(request, response){
  response.sendFile('404.html', {root: './public'});
});

APP.listen(PORT, function(){
  console.log(`Express server currently running on port ${PORT}`);
});
