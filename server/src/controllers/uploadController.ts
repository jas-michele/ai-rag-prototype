import { Request, Response } from "express";
import { extractPDFText } from "../services/pdfService";
import { setChunks } from "../services/documentStore";
import { chunkDocument } from "../services/chunkService";

export const uploadPDF = async (
    req: Request,
    res: Response
) => {
 try {

    if (!req.file) {
        return res.status(400).json({
            success: false,
            message: "No PDF uploaded"
        });
    }
    const text = await extractPDFText(req.file.path);
    
    const chunks = chunkDocument(text);

    setChunks(chunks);

    console.log(`Stored ${chunks.length} chunks. `)

    res.json({
        success: true,
        message: "PDF uploaded successfully"
    });
} catch (error) {
    console.error(error);

    res.status(500).json({
        success: false,
        message: "Failed to parse PDF"
    });
} 
};