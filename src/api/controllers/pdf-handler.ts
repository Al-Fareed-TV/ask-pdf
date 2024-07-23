import { Request, Response } from "express";
import { extractPDF } from "../../db/vector-store";
export const uploadPDF = async (req: Request, res:Response) => {
    const {filepath} = await req.body;
    const docs = await extractPDF(filepath)
    return res.status(200).json({
      message: "uploaded successfully",
      docs,
    });
}