import dotenv from "dotenv";//it is MUST to load dotenv at the TOP of your application.
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Listening on Port ${process.env.PORT || 8000}`);
        })
    })
    .catch((err) => {
        console.log(`MongoDB connection failed!!! ${err}`);
    })