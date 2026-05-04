import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY || "" 
});

export async function askGemini(prompt: string, history: any[] = [], language: string = 'EN') {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: `You are a helpful AI mentor. Respond in ${language}.`
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my intelligence core. Please check the network connection or try again later.";
  }
}

export async function generateTest(topic: string, level: string, count: number = 15) {
  const prompt = `Generate a rigorous technical assessment for the topic "${topic}" at difficulty level: ${level}.
  Difficulty Levels: 
  - Easy: Basic concepts, definitions.
  - Medium: Application of concepts, intermediate problem solving.
  - Hard: Complex integration, architectural decisions, edge cases.
  - Expert: Experimental scenarios, optimization, deep theoretical knowledge, and actual coding challenges.

  Return EXACTLY ${count} questions in a JSON array format.
  AT LEAST 5 questions must be "Coding Challenges" where a code snippet is provided or the user has to identify the correct code implementation.
  
  Each question object must have:
  - id (string)
  - text (string)
  - codeSnippet (string | null, optional coding context)
  - options (array of 4 strings)
  - correctAnswer (string)
  - solutionAnalysis (string, "Deep Analysis" of the problem)
  - writtenSolution (string, step-by-step explanation)
  - youtubeSearchQuery (string, a specific query to find a video tutorial for this topic, e.g. "Transformers attention mechanism explained")

  Return ONLY the JSON array, no other text.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text || "[]";
    return parseAIResponse(text);
  } catch (error) {
    console.error("Test Generation Error:", error);
    return [];
  }
}

export function parseAIResponse(text: string) {
  try {
    // Attempt direct parse
    return JSON.parse(text.trim());
  } catch (e) {
    // Fallback: Extract JSON block
    const cleaned = text.replace(/```json\n?|```/g, '').trim();
    try {
      return JSON.parse(cleaned);
    } catch (e2) {
      // Last resort: Regex extract
      const jsonMatch = text.match(/\[.*\]|\{.*\}/s);
      if (jsonMatch) {
         try {
           return JSON.parse(jsonMatch[0]);
         } catch (e3) {
           console.error("Failed all parse attempts", e3);
           throw e3;
         }
      }
      throw e2;
    }
  }
}

export async function generateTestByField(field: string, count: number = 30) {
  const prompt = `Generate a rigorous diagnostic assessment for ${field}. 
  Return EXACTLY ${count} high-quality, technically disciplined multiple-choice questions in a JSON array format.
  Each question object: { "id": string, "text": string, "options": string[], "correctAnswer": string }.
  Return ONLY the JSON array.`;

  try {
    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = result.text || "[]";
    return parseAIResponse(text);
  } catch (error) {
    console.warn("AI Generation failed, using static fallback.");
    return Array.from({ length: 10 }).map((_, i) => ({
      id: `q-${i}`,
      text: `Expert Verification for ${field}: Node ${i + 1} - [Neural Sync Active]`,
      options: ['Option A (Verified)', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 'Option A (Verified)'
    }));
  }
}

export async function matchMentors(
  field: string,
  score: number,
  goals: string,
  mentors: any[],
  language: string = 'EN'
) {
  const mentorList = mentors.map(m => `${m.name} (${m.role} at ${m.company})`).join(', ');
  const prompt = `Student Profile:
  Field: ${field}
  Assessment Score: ${score}/100
  Goals: ${goals}
  
  Available Mentors:
  ${mentorList}
  
  Instructions:
  1. Select the top 1 mentor who best matches the student's field, score level, and goals.
  2. Provide a short, tactical reason for the match (max 30 words).
  3. Return JSON: { "mentorName": string, "matchReason": string }
  
  IMPORTANT: Response MUST be in ${language}. Return ONLY JSON.`;

  try {
    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = result.text || "";
    return parseAIResponse(text);
  } catch (error) {
    console.error("Match Error:", error);
    return null;
  }
}

export async function generateSubtopicQuestions(field: string, topic: string, subtopic: string, count: number = 20) {
  const prompt = `Generate ${count} complex technical questions for the subtopic "${subtopic}" under the topic "${topic}" in the field of "${field}". 
  Return in JSON array format. Each question object: id, text, options (4), correctAnswer.
  Ensure questions are highly specific to ${subtopic}.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text || "[]";
    return parseAIResponse(text);
  } catch (error) {
    console.error("Subtopic Question Generation Error:", error);
    return [];
  }
}
