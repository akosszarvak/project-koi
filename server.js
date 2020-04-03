const http = require("http");
const app = require("./server/app");
const debug = require("debug")("node-angular");
const normalizePort = val => {
  let port = parseInt(val, 10);
  if (isNaN(port)) {
    //named pipe
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};
// mongodb admin pw ihCGtVrTCwx8K1HD
const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe" + addr : "port" + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated priviliges");
      process.exit(1);

    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);

    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe" + addr : "port" + port;
  debug("listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);
const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);

server.listen(port);