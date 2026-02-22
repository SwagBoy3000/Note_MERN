import express from "express" //to is this syntax had to change type : "module" else use => const express = require("express");
import notesRouter from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

dotenv.config();

const app = express();
const PORT = process.env.PORT

app.use("/api/note", notesRouter);

connectDB();

app.listen(PORT, () =>{
    console.log("port ", PORT);
})