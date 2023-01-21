import io from "socket.io-client";

let socket;

export const initSocket = () => {
  console.log("initializing socket");

  socket = io("http://localhost:3001/", {
    transports: ["websocket"],
  });
  socket.on("connect", () => {
    console.log("connected");
  });
};

export const send = (color) => {
  socket.emit("newColor", color);
};

export const subscribe = (cb) => {
  socket.on("receive", (color) => {
    console.log(color);
    cb(color);
  });
};
