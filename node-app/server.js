var http = require("http");
var url = require("url");

let startServer = (route, handle) => {
  var onRequest = (request, res) => {
    //console.log(req);
    const pathname = url.parse(req.url).pathname;
    let reqData = "";

    request.setEncoding("utf8");

    request.addListener("data", function (chunk) {
      reqData += chunk;
    });

    request.addListener("end", function () {
      route(handle, pathname, response, reqData);
    });

    console.log(`Request Received for ${pathname}`);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello From Server Module");
    res.end();
  };
  http.createServer(onRequest).listen(8888);
};

exports.startServer = startServer;
