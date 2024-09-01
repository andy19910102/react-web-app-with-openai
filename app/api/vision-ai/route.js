import openai from "@/services/openai";

export async function POST(req) {
    const body = await req.json();
    console.log("body:", body);
    // TODO: 透過base64讓AI辨識圖片
    // 文件連結：https://platform.openai.com/docs/guides/vision?lang=node
    const systemPrompt = ``;
    const propmpt = ``;

    const openAIReqBody = {
        messages: [
            { "role": "system", "content": systemPrompt },
            { "role": "user", "content": propmpt }
        ],
        model: "gpt-4o-mini",
    };
    // const completion = await openai.chat.completions.create(openAIReqBody);
    // console.log("completion:", completion);

    return Response.json({ message: "Success" });
}