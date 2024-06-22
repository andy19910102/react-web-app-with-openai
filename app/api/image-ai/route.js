import openai from "@/services/openai";

export async function POST(req) {
    const body = await req.json();
    console.log("body:", body);
    // TODO: 透過dall-e-3模型讓AI產生圖片
    // 文件連結: https://platform.openai.com/docs/guides/images/usage
    const prompt = body.userInput;

    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt,
        n: 1,
        size: "1024x1024",
    });
    const image_url = response.data[0].url;

    return Response.json({
        imageURL: image_url,
        prompt,
        createdAt: new Date().getTime()
    });
}