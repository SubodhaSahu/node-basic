let server = require("./server.js");
let router = require("./router");
let handler = require("./handler");

var handle = {};
handle["/home"] = handler.home;
handle["/review"] = handler.review;
server.startServer(router.router, handle);
