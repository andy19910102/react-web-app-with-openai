import openai from "@/services/openai";

export async function POST(req) {
    const body = await req.json();
    console.log("body:", body);
    // TODO: 透過base64讓AI辨識圖片
    // 文件連結：https://platform.openai.com/docs/guides/vision?lang=node
    const systemPrompt = ``;
    const prompt = ``;

    const openAIReqBody = {
        messages: [
            { "role": "system", "content": systemPrompt },
            { "role": "user", "content": prompt }
        ],
        model: "gpt-4o-mini",
    };
    // const completion = await openai.chat.completions.create(openAIReqBody);
    // const aiResponseText = completion.choices[0].message.content;
    // console.log("ai的回應文字:", aiResponseText);

    // 要回傳給前端的資料
    const data = {
        message: "Success",
    };

    return Response.json(data);
}