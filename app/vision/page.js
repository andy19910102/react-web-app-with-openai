"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { faEye } from "@fortawesome/free-solid-svg-icons"


export default function Vision() {

    function changeHandler(e) {
        // TODO: 將使用者上傳的圖片轉換成base64傳送到 /api/image-ai { userInput: "" }

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
                <div className="container mx-auto">
                    {/* TODO: 顯示AI輸出結果 */}

                </div>
            </section>
        </>
    )
}