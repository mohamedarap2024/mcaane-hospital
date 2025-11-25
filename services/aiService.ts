import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// System instruction to guide the bot's behavior
const SYSTEM_INSTRUCTION = `
You are 'Mac', the virtual health assistant for Macaane Hospital. 
Your goal is to assist website visitors with general inquiries about hospital services, visiting hours, doctor availability, and appointment booking procedures.

Key Information:
- Hospital Name: Macaane Hospital
- Location: 123 Health Ave, Wellness City
- Visiting Hours: 9:00 AM - 8:00 PM daily
- Emergency: Open 24/7
- Phone: +1 (555) 012-3456

IMPORTANT SAFETY RULES:
1. You are NOT a doctor. DO NOT provide medical diagnoses or treatment advice.
2. If a user describes severe symptoms (chest pain, difficulty breathing, severe bleeding, unconsciousness), IMMEDIATELY advise them to call 911 (or local emergency number) or go to the nearest Emergency Room.
3. Be professional, empathetic, and concise.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToBot = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    // Using sendMessage (non-streaming for simplicity in this implementation, 
    // though streaming is supported and often preferred for UX)
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I apologize, I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Error communicating with AI:", error);
    return "I'm having trouble connecting to the server. Please try again later or call our support line.";
  }
};