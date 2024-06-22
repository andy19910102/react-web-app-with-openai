"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import fireErrorAlert from "@/functions/fire-error-alert";
import PageHeader from "@/components/PageHeader";
import GeneratorButton from "@/components/GenerateButton";
import VocabResultCard from "@/components/VocabResultCard";
import VocabResultPlaceholder from "@/components/VocabResultPlaceholder";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [language, setLanguage] = useState("English");
  const [resultList, setResultList] = useState([]);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    // 元件第一次載入時，會執行的流程...
    console.log("Home Page component mounted.");
    // TODO: 透過 GET /api/get-vocab-result-list-from-db 取得來自資料庫的資料
    // axios.get("/api/get-vocab-result-list-from-db")
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
    console.log("Language: ", language);
    // 將使用者的輸入值傳送到 /api/vocab-ai { userInput: "", language: "" }
    setIsWaiting(true);
    axios.post("/api/vocab-ai", {
      userInput,
      language
    })
      .then(res => {
        // console.log("res:", res);
        // const payload = res.data.payload;
        const { payload } = res.data;
        // console.log(payload);
        const result = {
          title: userInput,
          language,
          payload,
          createdAt: new Date().getTime(),
        };
        // console.log(result);
        // 更新狀態，把最新的結果放在最前面
        setResultList([result, ...resultList]);
        setIsWaiting(() => false);
        setUserInput("");
      })
      .catch(err => {
        console.log("err:", err);
        setIsWaiting(() => false);
        fireErrorAlert(err.message);
      });
  }

  // 準備要渲染卡片
  const cardItems = resultList.map((result) => {
    return <VocabResultCard result={result} key={result.createdAt} />
  })

  return (
    <>
      <PageHeader title="AI Vocabulary Generator" icon={faEarthAmericas} />
      <section>
        <div className="container mx-auto">
          <form onSubmit={submitHandler}>
            <div className="flex">
              <div className="w-3/5 px-2">
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
                <select
                  className="border-2 w-full block p-3 rounded-lg"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  required
                >
                  <option value="English">English</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Korean">Korean</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Italian">Italian</option>
                </select>
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
          {/* 顯示AI輸出結果 */}
          {isWaiting ? <VocabResultPlaceholder /> : null}
          {cardItems}
        </div>
      </section>
    </>
  );
}
