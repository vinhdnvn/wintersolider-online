const express = require('express');
const app = express();
const {createServer} = require('http');
const {Server } = require('socket.io');


const httpServer = createServer(app);


app.use(express.static('public'));

const io = new Server(httpServer);

io.on('connect', (socket) => {
    console.log('A user connected', socket.id);
    // socket.on('message', (msg) => {
    //     console.log(msg);
    //     io.emit('message-broadcast', msg);
    // });
    // socket.on('disconnect', () => {
    //     console.log('A user disconnected');
    // });
    });

httpServer.listen(3000, () => {
    console.log('Server is listening on port 3000. Ready to accept requests!');
    });
