// Your Express Server Configuration Here
// import 'reflect-metadata'
// import fs from 'fs'
import http from "http";
import https from "https";
import express, { Request, Response } from "express";
import router from "./src/app";
// import config from "./src/configs";
const app = express();
// const { NODE_ENV, SERVER_PROTOCOL, SERVER_HOST, SERVER_PORT } = config.env;
// ------ Require Database
// import dbConnect from "./src/infrastructure/database";

// TODO: Avoids DEPTH_ZERO_SELF_SIGNED_CERT error for self-signed certs
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

// ---------------- Create Server Instance ----------------

// ---------------- Start Server ----------------
// async function startServer(server: http.Server | https.Server): Promise<void> {
//   server.listen(4000, () => {
//     // const url = `${SERVER_PROTOCOL || "http"}://${SERVER_HOST || "localhost"}:${
//     //   SERVER_PORT || 4000
//     // }`;
//     console.log(`API is now running on  in ${"development"} mode`);
// }
//   });
app.use(router);

app.listen(4000, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${4000}`);
});
