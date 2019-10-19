require ('dotenv/config');

const express = require ('express');
const logger = require ('morgan');
const bodyParser = require ('body-parser');
const cors = require('cors')

const Router = require ('./src/Routes/index');

const server = express ();
const port = 3000;
const nodeEnv = 'Development';

//Public Allowe CORS
server.use (cors());

server.listen (port , () => {
    console.log (`Server is running in port ${port} in ${nodeEnv} Mode....`);
});

server.use (logger ('dev'));
server.use (bodyParser.json ());
server.use (bodyParser.urlencoded ({extended: false}));

//Endpoint Router
server.use ('/api', Router);

module.exports = server;