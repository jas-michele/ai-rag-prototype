import openai from "../config/openai";

export const askDocument = async (
    document: string,
    question: string
): Promise<string> => {

        const systemPrompt = `
    You are a helpful AI assistant.
    
    Answer questions ONLY using the informatin contained in the provided document.

    If the answer cannot be found in the document, respond with:

    "I couldn't find the information in the uploaded document."

    Do not make up facts.
    `;

    const response = await openai.chat.completions.create({
        model: "gpt-4.1-mini",

        messages: [
            {
                role: "system",
                content:
                    systemPrompt
            },
            {
                role: "user",
                content: `
Document:

${document}

Question:

${question}
                `

            }
        ]
    });

    return response.choices[0].message.content ?? "No response."
}