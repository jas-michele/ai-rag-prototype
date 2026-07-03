let documetChunks: string[] = [];

export function setChunks(chunks: string[]): void { 
    documetChunks = chunks;
}

export function getChunks(): string[] {
    return documetChunks;
}

export function clearChunks(): void {
    documetChunks = [];
}