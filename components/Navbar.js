"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        // 當所在路徑頁面改變時，關閉選單
        setShowMenu(false);
    }, [pathname])

    return (
        <nav className={`navbar ${showMenu ? "show-menu" : ""} shadow-sm w-full h-[50px] flex justify-between items-center px-5 fixed z-[999] top-0 bg-white`}>
            <Link href="/" className="font-bold text-lg text-slate-900 hover:text-pink-500">
                NextJS with OpenAI
            </Link>
            <div className="navbar-menu">
                <Link href="/" className="mr-3 text-slate-900 hover:text-pink-500 font-semibold">
                    AI VocabularyGen
                </Link>
                <Link href="/image-generator" className="mr-3 text-slate-900 hover:text-pink-500 font-semibold">
                    AI ImgGen
                </Link>
                <Link href="/vision" className="text-slate-900 hover:text-pink-500 font-semibold">
                    AI Vision
                </Link>
            </div>
            <button
                className="menu-btn"
                onClick={() => setShowMenu(!showMenu)}
            >
                <span></span>
            </button>
        </nav>
    )
}