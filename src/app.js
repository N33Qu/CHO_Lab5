const express = require('express');
const os = require('os');

const app = express();
const hostname = os.hostname();
const ip = os.networkInterfaces().eth0[0].address;
const version = process.env.VERSION;

app.get('/', (req, res) => {
  res.send(`Server IP: ${ip}\nServer hostname: ${hostname}\nVersion: ${version}\n`);
});

app.listen(5000, 'localhost', () => {
  console.log(`Server running at http://localhost:5000/`);
});
