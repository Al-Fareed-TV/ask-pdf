import { Request, Response } from "express";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
export const uploadPDF = async (req: Request, res:Response) => {
    const {filepath} = await req.body;
    const loader = new PDFLoader(filepath);
    const docs = await loader.load()
    return res.status(200).json({
      message: "uploaded successfully",
      docs,
    });
}