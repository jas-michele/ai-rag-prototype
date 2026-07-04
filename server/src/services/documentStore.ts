export interface DocumentChunk {
    text: string;
    embedding: number[];
}


let documetChunks: DocumentChunk[] = [];

export function setChunks(chunks: DocumentChunk[]): void { 
    documetChunks = chunks;
}

export function getChunks(): DocumentChunk[] {
    return documetChunks;
}

export function clearChunks(): void {
    documetChunks = [];
}