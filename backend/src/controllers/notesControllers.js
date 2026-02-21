//================= Fetch Notes ===================// 
export const getAllNote = (req,res)=>{
    res.status(200).send("Note fetched successfully");
};
//================= Create Notes ===================//
export const createNote = (req,res)=>{
    res.status(200).json({message:"Note created successfully"});
};
//================= Edit Notes ===================//
export const editNote  = (req,res)=>{
    res.status(200).json({message:"Note edited successfully"});
};
//================= Delete Notes ===================//
export const deleteNote = (req,res)=>{
    res.status(200).json({message:"Note deleted successfully"});
};