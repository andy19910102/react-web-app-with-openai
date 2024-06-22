// import db from "@/services/firebase-db";

export async function GET() {
    const dataList = [];
    // const docList = await db.collection("vocab-result-list").get();
    // docList.forEach(doc => {
    //     const data = doc.data();
    //     data.id = doc.id;
    //     dataList.push(data);
    // });
    return Response.json({
        dataList
    });
}