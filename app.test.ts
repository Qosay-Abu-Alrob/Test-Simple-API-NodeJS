import request from "supertest";
import app from "./app";
import os from "os";
import { test } from "node:test";
import assert from "assert";

test("GET /hello should return a greeting with the provided name", async () => {
  const response = await request(app).get("/hello?name=Qosay");
  assert.strictEqual(response.body.greeting, "Hello, Qosay");
});

test("GET /hello should return a default greeting when no name is provided", async () => {
  const response = await request(app).get("/hello");
  assert.strictEqual(response.body.greeting, "Hello, World!");
});

// Group for GET /info route tests
test("GET /info should return general information", async () => {
  const response = await request(app).get("/info");
  assert.ok(response.body.hasOwnProperty("time"));
  assert.ok(response.body.hasOwnProperty("client_address"));
  assert.ok(response.body.hasOwnProperty("host_name"));
  assert.ok(response.body.hasOwnProperty("headers"));
});

test("GET /info should return the host name", async () => {
  const response = await request(app).get("/info");
  assert.strictEqual(response.body.host_name, "DESKTOP-KV7HSRQ");
});

test("GET /info should return the correct host name", async () => {
  const response = await request(app).get("/info");
  const HostName = os.hostname();
  assert.strictEqual(response.body.host_name, HostName);
});
