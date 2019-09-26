const express = require('express');
const path = require('path');

const server = express();

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

server.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

server.use('/assets', express.static(__dirname + '/../dist'));

server.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});