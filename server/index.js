const { Socket } = require('socket.io');

const http = require('http').createServer();
const io = require('socket.io')(http, {
    cors: {origin: "*"}
});

io.on('connection', (Socket) => {
    console.log("user connected");

    Socket.on('message', (message) => {
        console.log(message);
        io.emit('message', `${Socket.id.substr(0,2)} says: ${message}`)
    });
});

http.listen(8080, () => console.log('listening on http://localhost:8080') )