const io = require('socket.io')(3000, {
    cors: {
        origin: ['http://localhost:8080']
    }
})
io.on('connection', socket => {
    console.log(socket.id);
    socket.on("sendMessage", (friendCardIndex, friendCardNextIndex, playerRoomId, roomId) => {
        socket.to(roomId).emit("receiveMessage", friendCardIndex, friendCardNextIndex, playerRoomId);
    });
    socket.on("startMatch", (startMatch, roomId) => {
        socket.to(roomId).emit("startMatchMessage", startMatch);
    });
    socket.on("rematch", (rematch, roomId) => {
        socket.to(roomId).emit("rematchMessage", rematch);
    });
})