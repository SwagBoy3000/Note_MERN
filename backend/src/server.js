import express from "express" //to is this syntax had to change type : "module" else use => const express = require("express");
import notesRouter from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import { limiter } from "./middleware/rateLimiter.js";
import cors from "cors"

dotenv.config();

const app = express();
const PORT = process.env.PORT

app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());
app.use(limiter);

app.use("/api/note", notesRouter);

connectDB().then(() =>{
    app.listen(PORT, () =>{
    console.log("port ", PORT);
})
});

