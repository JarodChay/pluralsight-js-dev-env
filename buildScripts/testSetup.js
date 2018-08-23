// This file isn't transpiled, so must use CommonJS and ES5

// Register babel to transpile before our tests run.
require('babel-register')(); // Tell Mocha to transpile before tests should run.

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};
