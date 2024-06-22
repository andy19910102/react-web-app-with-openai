import OpenAI from "openai";
// 取得儲存在環境變數(.env.local)的 OPENAI_API_KEY
export default new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});