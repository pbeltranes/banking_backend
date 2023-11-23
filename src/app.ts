import express from "express";
import helmet from "helmet";
import { urlencoded, json } from "body-parser";
import cors from "cors";
import morgan from "morgan";

const app: express.Application = express();

app.use(morgan("combined"));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(helmet());
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

// app.use(cors())

// ------ Add config to access everywhere
// import config from "./configs";
// app.set("config", config);

// ------ Add JWT to system globally
// import jwt from 'express-jwt'
// app.use(jwt({ secret: config.jwt.key }))

// ------ Add logger to system
// import logger from './middlewares/logger'
// app.use(logger)

// ---------- DI
// import s3 from './middlewares/s3'
// app.use(s3)

// ------ Require all routes
import router from "./infrastructure/routes";

// ------ Add health check to system

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Middleware
app.use("/", router);

// ------ Add Response Decorator (& error handler) to system
// import decoratorResponse from './middlewares/decorator'
// app.use(decoratorResponse)

export default app;
