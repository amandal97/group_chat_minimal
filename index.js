const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', socket => {
    console.log("You are connected!");

    socket.on('message', message => {
        console.log(message);
        io.emit('message', `${socket.id.substr(0,2)} said ${message}`);
    });
})

http.listen(5000, () => console.log('Listening on http://localhost:5000'));