import dotenv from "dotenv";
import { IConfigModel } from "./types";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export default { ...(JSON.parse(JSON.stringify(process.env)) as IConfigModel) };
