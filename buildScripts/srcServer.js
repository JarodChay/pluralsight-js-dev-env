// Start Express server by running 'node buildScripts/srcServer.js' or 'npm start -s' or 'npm run share', now that the package.json scripts section supports it.
// Type 'Ctrl+c' to stop the service.

// var express = require('express');
// var path = require('path');
// var open = require('open');

import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
