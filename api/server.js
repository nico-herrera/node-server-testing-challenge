const express = require('express');
const usersRouter = require('./users/users-router');

const server = express();


server.use(express.json());

server.use('/api/users', usersRouter);

server.get('/', (req, res, next) => {
    res.status(200).json({message: "api up"})
})

server.use((err, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Server failed...";
  res.status(errorStatus).json({ message: errorMessage, stack: error.stack });
})

module.exports = server;