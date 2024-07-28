const { initializeApp, applicationDefault, cert, getApps } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

// 取得金鑰檔案
// const 常數 = 值
const serviceAccount = {
    "type": "service_account",
    "project_id": process.env.FIREBASE_PROJECT_ID,
    "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
    "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    "client_email": process.env.FIREBASE_CLIENT_EMAIL,
    "client_id": process.env.FIREBASE_CLIENT_ID,
}

// 如果在系統內沒有任何的Firebase app 被初始化，才會進行初始化
if (getApps().length === 0) {
    // 初始化 Firebase Admim (驗證金鑰)
    initializeApp({
        credential: cert(serviceAccount)
    });
}

// db 代表資料庫
const db = getFirestore();

// 輸出 db
// 其他檔案內可用 import db from '@/services/db' 引入db
export default db;