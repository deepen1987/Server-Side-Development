import { Server } from "socket.io";
// creating server
const io = new Server(3000, {
    cors: {
        origin: ["http://localhost:8080"]
    }
});

// when server recives a connection
io.on("connection", socket => {
    console.log(socket.id);

    // server socket is listening for send event from client
    socket.on("send", (msg, room)=> {

        if(room === ""){
            // broadcasting message to all clients
            socket.broadcast.emit("recv", msg);
        }else{
            // sending message to a specific client
            socket.to(room).emit("recv", msg);
        }
    })
});

