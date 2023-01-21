import { io, Socket } from "socket.io-client";

let socket;

export const init = () => {
  socket = io("http://localhost:3000", {
    transports: ["websocket"],
  });
  socket.on("connect", () => console.log("connected"));
};

export const sendMessage = (message) => {
  if (socket) {
    socket.emmit("new-message", message);
  }
};

export const subscribeChat = (cb) => {
  if (!socket) return;
  socket.on("new-message", (message) => {
    console.log("Yeni mesaj var", message);
    cb(message);
  });
};
