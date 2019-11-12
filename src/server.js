const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');


const server = express();

mongoose.connect('mongodb+srv://angulargsw:angulargsw@cluster0-cqb7o.mongodb.net/gsw?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);


server.listen(8080);