import { Request, Response } from "express";
import { askDocument } from "../services/aiService";
import { getChunks } from "../services/documentStore";
import { createEmbedding } from "../services/embeddingService";
import { getTopChunks } from "../services/similarityService";

export const askQuestion = async (
    req: Request,
    res: Response
) => {
    try {
        const { question } = req.body;

        const chunks = getChunks();

        if (chunks.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Please upload a PDF first."
            })
        }

        const questionEmbedding = await createEmbedding(question);

        const topChunks = getTopChunks(questionEmbedding, chunks, 3);

        const context = topChunks.map((chunk) => chunk.text).join("\n\n")

        const answer = await askDocument(context, question);

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