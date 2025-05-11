import openai from "@/services/openai";

export async function POST(req) {
    const body = await req.json();
    console.log("body:", body);
    // TODO: 透過dall-e-3模型讓AI產生圖片
    // 文件連結: https://platform.openai.com/docs/guides/images/usage

    // 要回傳給前端的資料
    const data = {
        message: "Success",
    };

    return Response.json(data);
}