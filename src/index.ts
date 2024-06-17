import {Server} from 'socket.io';
import { ClientToServerEvents, ServerToClientEvents, SocketData } from './types';



const socketServer = new Server<
ClientToServerEvents,
ServerToClientEvents,
SocketData
>(8080);

socketServer.on('connection', (socket) => {
  socket.data.name = "john";
  socket.data.age = 42;

  socket.emit("noArg");
  socket.emit("basicEmit", 1, "2", Buffer.from([3]));
  socket.emit("withAck", "4", (e) => {
    // e is inferred as number
  });

  socketServer.emit("noArg");
  socketServer.to("room1").emit("basicEmit", 1, "2", Buffer.from([3]));

  socket.on("hello", () => {
    // ...
  });

});