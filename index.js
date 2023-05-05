const express = require('express');
const config = require('./config');
const app = express();
const port = config.PORT

// Middleware to parse JSON data
app.use(express.json());

// Define your routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Example route with parameters
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.send(`User ID: ${id}`);
});

// Example route to handle POST request
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  // Perform necessary operations with name and email
  res.send(`User ${name} with email ${email} created successfully!`);
});

// Start the server
app.listen(PORT, () => {
  console.log('Now running on PORT ' + port);
});