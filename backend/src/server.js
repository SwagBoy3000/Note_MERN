import express from "express" //to is this syntax had to change type : "module" else use => const express = require("express");
import notesRouter from "./routes/notesRoutes.js"

const app = express();

app.use("/api/note", notesRouter);

app.listen(5001, () =>{
    console.log("port 5001");
})