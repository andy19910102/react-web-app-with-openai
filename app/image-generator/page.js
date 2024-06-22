"use client";

import { useState } from "react";
import { faImage } from "@fortawesome/free-solid-svg-icons"
import PageHeader from "@/components/PageHeader";
import GeneratorButton from "@/components/GenerateButton";

export default function ImgGen() {
    const [userInput, setUserInput] = useState("");

    function submitHandler(e) {
        e.preventDefault();
        console.log("User Input: ", userInput);
        // TODO: 將使用者的輸入值傳送到 /api/image-ai { userInput: "" }

    }

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
                                <GeneratorButton />
                            </div>
                        </div>
                    </form>
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