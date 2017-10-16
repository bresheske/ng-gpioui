/* This file is to run the production version under nodejs. */
var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.listen(80);
console.log('ng-gpioui listening on 80.');