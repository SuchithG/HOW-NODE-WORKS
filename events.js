const EventEmitter = require("events");
const http = require("http");

const myEmitter = new EventEmitter();

myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("Costumer name: Jonas");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There is a now ${stock} items left in stock.`);
});

myEmitter.emit("newSale", 9);

/////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received !");
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another request");
});

server.on("close", () => {
  console.log("Sever closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("waiting for requests...");
});
