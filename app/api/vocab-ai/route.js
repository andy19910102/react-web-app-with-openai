import openai from "@/services/openai";

export async function POST(req) {
    const body = await req.json();
    console.log("body:", body);
    // TODO: 透過gpt-4o-mini模型讓AI回傳相關單字
    // 文件連結：https://platform.openai.com/docs/guides/text-generation/chat-completions-api?lang=node.js
    // JSON Mode: https://platform.openai.com/docs/guides/text-generation/json-mode?lang=node.js
    const systemPrompt = `請作為一個單字聯想AI根據所提供的單字聯想5個相關單字`;
    const propmpt = ``;

    const openAIReqBody = {
        messages: [
            { "role": "system", "content": systemPrompt },
            { "role": "user", "content": propmpt }
        ],
        model: "gpt-4o-mini",
    };
    // const completion = await openai.chat.completions.create(openAIReqBody);
    // const payload = completion.choices[0].message.content;
    // console.log("payload:", payload);

    return Response.json({ message: "Success" });
}