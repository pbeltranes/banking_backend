
import http from "http";
import https from "https";
import app from "./src/app";
import config from "./src/configs";

const { NODE_ENV } = config;


// ---------------- Create Server Instance ----------------
let server: http.Server | https.Server = http.createServer(app);

// ---------------- Start Server ----------------
async function startServer(server: http.Server | https.Server): Promise<void> {
  server.listen(4000, () => {
    const url = "http://localhost:4000";
    console.log(
      `API is now running on ${url} in ${NODE_ENV || "development"} mode`
    );
  });
}

(async () => {
  try {
    await startServer(server);
  } catch (error) {
    throw Error(`>>>>> Server Connection Error: ${error}`);
  }
})();

