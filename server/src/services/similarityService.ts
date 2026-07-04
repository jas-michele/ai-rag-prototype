import { DocumentChunk } from "./documentStore";

function cosineSimilarity(a: number[], b: number[]): number {
    let dotProduct = 0;
    let magnitudeA = 0;
    let magnitudeB = 0;

    for (let i = 0; i < a.length; i++) {
        dotProduct += a[i] * b[i];
        magnitudeA += a[i] * a[i];
        magnitudeB += b[i] * b[i];
    }

    return dotProduct / (Math.sqrt(magnitudeA) * Math.sqrt(magnitudeB));
}

export function getTopChunks(
    questionEmbedding: number[],
    chunks: DocumentChunk[],
    topK = 3
): DocumentChunk[] {
    return chunks
        .map((chunk) => ({
            ...chunk,
            score: cosineSimilarity(questionEmbedding, chunk.embedding),
        }))
        .sort((a, b) => b.score -a.score)
        .slice(0, topK);
}

