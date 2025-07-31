import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENTYPHOON_API_KEY,
  baseURL: "https://api.opentyphoon.ai/v1",
});

export async function callAI(prompt) {
  try {
    const response = await openai.chat.completions.create({
      model: "typhoon-v2-70b-instruct",
      messages: [{ role: "user", content: prompt }],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("AI API Error:", error);
    throw error;
  }
}
