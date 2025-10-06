const http = require('http');

console.log('Running tests...');

// Simple test: Check if app can start
try {
  const app = require('./app');
  console.log('App loaded successfully');
  
  // Make a simple HTTP request
  setTimeout(() => {
    http.get('http://localhost:3000', (res) => {
      if (res.statusCode === 200) {
        console.log('Server responding correctly');
        process.exit(0);
      } else {
        console.log('Server returned wrong status code');
        process.exit(1);
      }
    }).on('error', (err) => {
      console.log('Test failed:', err.message);
      process.exit(1);
    });
  }, 1000);
} catch (error) {
  console.log('Test failed:', error.message);
  process.exit(1);
}