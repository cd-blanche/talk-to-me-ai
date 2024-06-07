import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY_DEV,
});

Deno.serve(async (req) => {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Say this is a test" }],
    model: "gpt-3.5-turbo",
  });

  const data = {
    message: chatCompletion.choices[0].message.content,
  };
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
});
