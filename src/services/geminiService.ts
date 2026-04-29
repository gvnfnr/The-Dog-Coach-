import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY || "" 
});

export async function chatWithAI(prompt: string, history: { role: 'user' | 'model', parts: [{ text: string }] }[] = [], systemInstruction: string = "") {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...(history.length > 0 ? history : []),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: systemInstruction || "You are The Dog Coach, an expert AI dog behaviorist. Your goal is to provide scientific, positive-reinforcement based advice to dog owners. Be encouraging, tactical, and clear. If a dog is showing signs of severe aggression that could be dangerous, advise the owner to seek local professional help in addition to your guidance.",
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
