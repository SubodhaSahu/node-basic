function router(handle, pathname, response, reqData) {
  console.log(`Request Received for the ${pathname}`);
  if (typeof handle[pathname] === "function") {
    handle[pathname](response, reqData);
  } else {
    console.log(`404 not found ${pathname}`);
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write(`404 not found ${pathname}`);
    response.end();
  }
}

exports.router = router;
