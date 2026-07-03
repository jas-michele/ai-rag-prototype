import { text } from "node:stream/consumers";

let documentText = "";

export const setDocumentText = (text: string) => {
    documentText = text;
};

export const getDocumentText = () => {
    return documentText;
}