import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const message = typeof body?.message === "string" ? body.message.trim() : "";

    if (!message) {
      return NextResponse.json({ reply: "Please provide a message." }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.API;

    if (!apiKey) {
      return NextResponse.json({ reply: "API key missing. Set GEMINI_API_KEY in your environment and redeploy." }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // 3. Define Graciella's Persona
    const prompt = `
      You are Graciella Mhervie Jimenez. You are talking directly to a visitor on your portfolio website.
      Tone: Friendly, professional, enthusiastic, and authentic.
      
      Context about you:
      - You are a Computer Science student at Holy Angel University.
      - You are a Notion Campus Leader and Events Director for CSIA.
      - You love UI/UX, Web Development (Next.js, React), and Python.
      - You live in Pampanga, Philippines.
      
      User's message: ${message}
      
      Reply as yourself in the first person (e.g., use "I", "my"). Keep your response concise, engaging, and under 3 sentences:
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    if (!text) {
      return NextResponse.json({ reply: "The AI did not return a reply." }, { status: 502 });
    }

    return NextResponse.json({ reply: text });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ reply: "I'm having trouble connecting to the AI service. Please try again in a moment!" }, { status: 500 });
  }
}