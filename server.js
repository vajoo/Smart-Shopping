const express = require('express');
const config = require('./configs/config.js');

const app = express();
const port = config.PORT;

app.use(express.json({limit:"100mb"}));

const authRouter = require("./routes/auth.js");
const messagesRouter = require("./routes/messages.js");

app.use("/api/auth", authRouter);
app.use("/api/messages", messagesRouter);

app.listen(port, () => {
  console.log('Now running on PORT ' + port);
});



// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// // Example route with parameters
// app.get('/users/:id', (req, res) => {
//   const { id } = req.params;
//   res.send(`User ID: ${id}`);
// });

// // Example route to handle POST request
// app.post('/users', (req, res) => {
//   const { name, email } = req.body;
//   // Perform necessary operations with name and email
//   res.send(`User ${name} with email ${email} created successfully!`);
// });