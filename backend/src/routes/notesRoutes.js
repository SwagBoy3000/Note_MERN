import express from "express"
import { createNote, deleteNote, editNote, getAllNote } from "../controllers/notesControllers.js";
const router = express.Router();

router.get("/", getAllNote);
router.post("/", createNote);
router.put("/:id", editNote);
router.delete("/:id", deleteNote);

export default router
