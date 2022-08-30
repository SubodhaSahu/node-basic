import { EventEmitter } from "events";

var eventEmitter = new EventEmitter();

const ringBell = () => {
  console.log("Ring Ring Ring");
  eventEmitter.emit("BellRing", "Welcome to the house");
};

eventEmitter.on("doorOpen", ringBell);
eventEmitter.on("BellRing", (msg) => {
  console.log(`Message From Emitter is ${msg}`);
});
eventEmitter.emit("doorOpen");
