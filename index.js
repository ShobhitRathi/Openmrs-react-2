// import express (after npm install express)
const express = require('express');

// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = 8080;

// create a route for the app
app.get('/', (req, res) => {
  res.send('Welcome to OpenMRS | Google Code-in 2019');
});

app.get('/info', (request, response) => {
  response.send('name: OpenMRS-express | version: 0.1.0');
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});