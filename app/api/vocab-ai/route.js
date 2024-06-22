import openai from "@/services/openai";
// import addDocToDB from "@/functions/add-doc-to-db";

export async function POST(req) {
    const body = await req.json();
    console.log("body:", body);
    // 透過GPT-4o模型讓AI回傳相關單字 
    // 文件連結：https://platform.openai.com/docs/guides/text-generation/chat-completions-api?lang=node.js
    // JSON Mode: https://platform.openai.com/docs/guides/text-generation/json-mode?lang=node.js
    const systemPrompt = `你是一個單字聯想器，可以根據使用者輸入的內容與指定語言聯想5個相關的單字
    內容: 機場
    語言: English
    你要回答的JSON格式如下:
    ###
    {
       wordList: ["單字1", "單字2", ...]
       zhWordList: ["單字1繁體中文意思", "單字2繁體中文意思", ...]
    }
    ###
    `;
    const propmpt = `
    內容: ${body.userInput} 
    語言: ${body.language}
    `;
    console.log("propmpt:", propmpt);

    const openAIReqBody = {
        messages: [
            { "role": "system", "content": systemPrompt },
            { "role": "user", "content": propmpt }
        ],
        model: "gpt-4o",
        response_format: { type: "json_object" },
    };
    const completion = await openai.chat.completions.create(openAIReqBody);
    console.log("OPEN AI的回應內容:", completion.choices[0].message.content);
    // JSON.parse(字串化後的物件) => 物件
    const payload = JSON.parse(completion.choices[0].message.content);
    console.log("payload:", payload);

    // TODO: 呼叫addDocToDB函式，將使用者的輸入值與AI回傳的結果存入資料庫
    // addDocToDB("vocab-result-list", {
    //     title: body.userInput,
    //     language: body.language,
    //     payload,
    //     createdAt: new Date().getTime(),
    // });

    return Response.json({ message: "Success", payload });
}