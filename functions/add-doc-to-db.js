import db from "@/services/firebase-db";

export default function addDocToDB(path, data) {
    db.collection(path).add(data)
        .then(res => {
            console.log(`[儲存成功] ${path}`);
        })
        .catch(err => {
            console.log(`[儲存失敗] ${path}`);
            console.log("err:", err);
        })
}