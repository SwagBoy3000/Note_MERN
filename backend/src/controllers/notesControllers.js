import Note from "../models/Note.js"
//================= Fetch Notes ===================// 
export async function getAllNote(_,res) {
    try {
        const notes = await Note.find().sort({createdAt: -1});
        res.status(200).json(notes);
    } catch (error) {
        console.error("Couldn't fetch notes :", error);
        res.status(500).json({message : "Internal server error"});
    }
};
//================= Fetch by ID Notes ===================//
export async function getNoteById(req,res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({message : "Note not found"});
        res.status(200).json(note);
    } catch (error) {
        console.error("Couldn't fetch note by Id :", error);
        res.status(500).json({message : "Internal server error"});
    }
};
//================= Create Notes ===================//
export async function createNote(req,res){
    try {
        const {title, content} = req.body;
        const newNote = new Note({title,content});
        await newNote.save();
        res.status(201).json({message : 'Note created successfully'});
    } catch (error) {
        console.error("couldn't create note", error);
        res.status(500).json({message : "Internal server error"})
    }
};
//================= Edit Notes ===================//
export async function editNote(req,res){
    try {
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content},{returnDocument: 'after'});
        if(!updatedNote) return res.status(404).json({message : "Note not found"});
        res.status(200).json({message : 'Note updated successfully'});
    } catch (error) {
        console.error("couldn't update note", error);
        res.status(500).json({message : "Internal server error"})
    }
};
//================= Delete Notes ===================//
export async function deleteNote(req,res){
   try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote) return res.status(404).json({message : "Note not found"});
        res.status(200).json({message : 'Note deleted successfully'});
    } catch (error) {
        console.error("couldn't delete note", error);
        res.status(500).json({message : "Internal server error"})
    }
};