import { Request, Response } from "express";
import { extractPDFText } from "../services/pdfService";
import { setDocumentText } from "../services/documentStoe";

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

    setDocumentText(text);

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