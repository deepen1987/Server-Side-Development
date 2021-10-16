import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

document.addEventListener("DOMContentLoaded", () => {
    // When we gets connected to the socket.
    socket.on("connect", () => {
        displayMessage(`You are connected on socket ${socket.id}`)
    });

    // here socket is listening for recv event from server.
    socket.on("recv", (msg)=>{
        displayMessage(msg, 'red')
    });

    const messageInput = document.getElementById("message-input");
    const roomInput = document.getElementById("room-input");
    const form = document.getElementById("form");

    form.addEventListener("submit", e => {
        e.preventDefault();
        const message = messageInput.value;
        const room = roomInput.value;

        // here we are sending a message to server with or without socketid(room)
        socket.emit("send", message, room);

        displayMessage(message,'green');
    });

    function displayMessage(msg, color){
        const msgContainer = document.getElementById("message-container");
        const element = document.createElement("div");
        element.style.color = color
        element.innerHTML = msg;
        msgContainer.appendChild(element);
    }
})