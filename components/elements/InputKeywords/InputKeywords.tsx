"use client"
import { useState } from 'react';

const InputKeywords = () => {
    const [keyword, setKeyword] = useState("");

    const handleSave = () => {
        if (keyword) {
        // キーワードを保存する処理をここに記述
        console.log("Keyword saved:", keyword);
        } else {
        console.log("Please enter a keyword.");
        }
    };

    return (
        <div>
            <div className="flex justify-center pb-10 border-b border-gray-200 mx-24">
                <div className="flex items-center justify-between w-full max-w-4xl">
                {/* 1. h1 タグのエリア（左側） */}
                    <div className="flex-[3]">
                    <h1 className="text-xl">Keywords for generation</h1>
                </div>

                {/* 2. input と button のエリア（右側） */}
                <div className="flex items-center space-x-2 flex-[7] justify-end">
                    <div className="flex-grow flex border border-gray-300 rounded-lg overflow-hidden">
                        <span className="bg-gray-100 text-gray-700 font-semibold px-3 py-2 border-r border-gray-300">
                        keyword
                        </span>
                        <input
                        type="text"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        className="flex-grow px-3 py-2 outline-none"
                        placeholder="X-AE-A-19"
                        />
                        </div>
                        <button
                            onClick={handleSave}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
                        >
                        Save
                        </button>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default InputKeywords
