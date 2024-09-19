import express, { Request, Response } from "express";
import os from "os";

const app = express();

app.get("/hello", (request: Request, response: Response) => {
  const name = request.query.name || "World!";
  response.json({ greeting: `Hello, ${name}` });
});

app.get("/info", (request: Request, response: Response) => {
  const requestTime = new Date().toISOString();
  const clientAddress =
    request.headers["x-forwarded-for"] || request.socket.remoteAddress;
  const hostName = os.hostname();
  const headers = request.headers;

  response.json({
    time: requestTime,
    client_address: clientAddress,
    host_name: hostName,
    headers: headers,
  });
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
