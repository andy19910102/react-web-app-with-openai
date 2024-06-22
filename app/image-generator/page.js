"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { faImage } from "@fortawesome/free-solid-svg-icons"
import fireErrorAlert from "@/functions/fire-error-alert";
import PageHeader from "@/components/PageHeader";
import GeneratorButton from "@/components/GenerateButton";
import ImageGenCard from "@/components/ImageGenCard";
import ImageGenPlaceholder from "@/components/ImageGenPlaceholder"

export default function ImgGen() {
    const [userInput, setUserInput] = useState("");
    const [imageGenList, setImageGenList] = useState([]);
    const [isWaiting, setIsWaiting] = useState(false);

    useEffect(() => {
        // 元件第一次載入時，會執行的流程...
        console.log("ImgGen Page component mounted.");
        // TODO: 透過 GET /api/get-image-gen-list-from-db 取得來自資料庫的資料
        // axios.get("/api/get-image-gen-list-from-db")
        //   .then(res => {
        //     console.log("res:", res);
        //   })
        //   .catch(err => {
        //     console.log("err:", err);
        //   });

    }, []);

    function submitHandler(e) {
        e.preventDefault();
        console.log("User Input: ", userInput);
        setIsWaiting(true);
        // TODO: 將使用者的輸入值傳送到 /api/image-ai { userInput: "" }
        axios.post("/api/image-ai", { userInput })
            .then(res => {
                console.log("res:", res);
                const imageGen = res.data;
                setImageGenList([imageGen, ...imageGenList]);
                setIsWaiting(() => false);
                setUserInput("");
            })
            .catch(err => {
                console.log("err:", err);
                setIsWaiting(() => false);
                fireErrorAlert(err.message);
            });
    }

    const imageGenCards = imageGenList.map(imageGen => {
        console.log("imageGen:", imageGen);
        return <ImageGenCard
            imageURL={imageGen.imageURL}
            prompt={imageGen.prompt}
            key={imageGen.createdAt}
        />
    });

    return (
        <>
            <PageHeader title="AI Image Generator" icon={faImage} />
            <section>
                <div className="container mx-auto">
                    <form onSubmit={submitHandler}>
                        <div className="flex">
                            <div className="w-4/5 px-2">
                                <input
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    type="text"
                                    className="border-2 focus:border-pink-500 w-full block p-3 rounded-lg"
                                    placeholder="Enter a word or phrase"
                                    required
                                />
                            </div>
                            <div className="w-1/5 px-2">
                                <GeneratorButton isWaiting={isWaiting} />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <section>
                <div className="container mx-auto px-2 pb-10">
                    {/* TODO: 顯示AI輸出結果 */}
                    <div className="grid grid-cols-3 gap-4 mt-5">
                        {isWaiting ? <ImageGenPlaceholder /> : null}
                        {imageGenCards}
                    </div>
                </div>
            </section>
        </>
    )
}