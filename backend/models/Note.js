import mongoose from "mongoose";

const noteShema = mongoose.Schema({
    title:{
        type : String,
        required : true,
        },
    content:{
        type : String,
        required : true,
        }
    },
    {timestamps : true }
);

const Note = mongoose.model("Note", noteShema);

export default Note;