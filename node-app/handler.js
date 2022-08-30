var querystring = require("querystring");
let home = (response) => {
  console.log("Executing Home Handler");
};

let review = (response, reqData) => {
  console.log("Executing Review Handler");

  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Your review is " + querystring.parse(reqData).text);
  response.end();
};

exports.home = home;
exports.review = review;
