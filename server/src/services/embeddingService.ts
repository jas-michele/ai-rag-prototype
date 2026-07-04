import { text } from "node:stream/consumers";
import openai from "../config/openai";

export async function createEmbedding(text: string): Promise<number[]> {
    const response = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: text,
    })

    return response.data[0].embedding;
}

