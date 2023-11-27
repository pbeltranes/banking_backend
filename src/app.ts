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
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration


// ------ Require all routes
import router from "./infrastructure/routes";

// ------ Add health check to system

// BAJA EL COVERAGE
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.use(router);

// ------ Add Response Decorator (& error handler) to system
// import decoratorResponse from './middlewares/decorator'
// app.use(decoratorResponse)

export default app;
