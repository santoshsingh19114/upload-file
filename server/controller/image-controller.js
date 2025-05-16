
import { request } from "express";
import File from "../models/file.js";
export const uploadImage =async (req,res)=>{

     const fileobj= {
        path: req.file.path,
        name: req.file.originalname,
        size: req.file.size,
     }
console.log('Uploaded File:',fileobj);
    try {
   const file = await File.create(fileobj);
   res.status(200).json({path: `http://localhost:8000/file/${file._id}`}); 
} catch (error) {
    console.error(error.message);
    res.status(500).json({error: error.message})
}
}

export const downloadImage=async(request,response)=>{
    try{
     const file=await File.findById(request.params.fileId);
     file.downloadContent++;

     await file.save();
     response.download(file.path,file.name)
    }
    catch(error){
        console.error(error.message);
        return response.status(200).json({error:error.message});
    }
}