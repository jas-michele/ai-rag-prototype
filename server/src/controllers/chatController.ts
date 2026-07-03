import { Request, Response } from "express";
import { askDocument } from "../services/aiService";
import { getDocumentText } from "../services/documentStoe";

export const askQuestion = async (
    req: Request,
    res: Response
) => {
    try {
        const { question } = req.body;

        const document = getDocumentText();

        if (!document) {
            return res.status(400).json({
                success: false,
                message: "Please upload a PDF first."
            })
        }

        const answer = await askDocument(document, question);

        res.json({
            success: true,
            answer
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to generate answer."
        })

    }
}