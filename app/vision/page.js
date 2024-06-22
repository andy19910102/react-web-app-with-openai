"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import PageHeader from "@/components/PageHeader";
import { faEye } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image";

export default function Vision() {
    const [isWaiting, setIsWaiting] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    const [aiResult, setAIResult] = useState(null);

    function changeHandler(e) {
        // TODO: 將使用者上傳的圖片轉換成base64傳送到 /api/image-ai { userInput: "" }
        console.log("e:", e.target.files[0]);

        const file = e.target.files[0];
        // 設定一個臨時的URL，讓使用者可以預覽上傳的圖片
        setPreviewImage(URL.createObjectURL(file));

        const reader = new FileReader();
        reader.onload = function (event) {
            const base64String = event.target.result;
            // 轉換成base64之後的圖片
            console.log("base64:", base64String);
            setIsWaiting(true);
        };
        reader.readAsDataURL(file);
    }

    return (
        <>
            <PageHeader title="AI Vision" icon={faEye} />
            <section>
                <div className="container mx-auto">
                    <label htmlFor="imageUploader" className="block">Upload Image</label>
                    <input
                        id="imageUploader"
                        type="file"
                        onChange={changeHandler}
                        accept=".jpg, .jpeg, .png"
                    />
                </div>
            </section>
            <section>
                <div className="container mx-auto pb-10">
                    {/* TODO: 顯示AI輸出結果 */}
                    {previewImage ?
                        <div className="grid grid-cols-2 gap-4 bg-white my-5 rounded-lg overflow-hidden">
                            <div>
                                <Image
                                    src={previewImage}
                                    alt="preview image"
                                    width={1000}
                                    height={1000}
                                    className="w-full"
                                />
                            </div>
                            <div className="p-5">
                                {isWaiting ?
                                    <div>
                                        <div className="bg-slate-200 w-full h-5 rounded-md animate-pulse"></div>
                                        <div className="bg-slate-200 w-full h-5 rounded-md animate-pulse mt-3"></div>
                                        <div className="bg-slate-200 w-1/4 h-5 rounded-md animate-pulse mt-3"></div>
                                    </div> :
                                    <p className="text-md">{aiResult}</p>
                                }
                            </div>
                        </div>
                        : null}

                </div>
            </section>
        </>
    )
}