import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { LIMIT } from "./constants";

const app = express();

const corsOptions = {
    origin: process.env.CORS_ORIGIN,
}

//MiddleWares
app.use(cors(corsOptions));//enable cross-origin requests.
app.use(express.json({ limit: LIMIT }));//in place for body parser.
app.use(urlencoded({ limit: LIMIT }));//helps express to encode URL (for space %,or Hafiz + Muhammad etc.)
app.use(cookieParser());//to access cookie present on browser side from our server and perform actions like CRUD on it.
app.use(express.static("public"));//in order to store user files/pictures etc on your server for some temporary time so if even user lost his connection, files remain safe.
export { app };