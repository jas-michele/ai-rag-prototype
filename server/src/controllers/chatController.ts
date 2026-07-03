import { Request, Response } from "express";
import { askDocument } from "../services/aiService";
import { getChunks } from "../services/documentStore";

export const askQuestion = async (
    req: Request,
    res: Response
) => {
    try {
        const { question } = req.body;

        const chunks = getChunks();

        // console.log("Chunks in memory:", chunks.length);
        // console.log("First chunk:");
        // console.log(chunks[0]);

        const document = chunks.join("\n\n");

        // console.log("Chunks:", chunks.length);
        // console.log("Document length:", document.length);
        // console.log("Document contains 'vacation':", document.toLowerCase().includes("vacation"));

        if (chunks.length === 0) {
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