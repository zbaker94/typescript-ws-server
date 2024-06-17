import { io, Socket } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from "../types";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io("http://localhost:8080");

// client-side
socket.on("connect", () => {
  console.log(socket.id); 
  socket.emit("hello");
});

socket.on("noArg", () => {
  // ...
});

socket.on("basicEmit", (a, b, c) => {
  // a is inferred as number, b as string and c as buffer
  console.log({a, b, c});
});

socket.on("withAck", (d, callback) => {
  // d is inferred as string and callback as a function that takes a number as argument
  console.log({d});
  callback(5);
});



