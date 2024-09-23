"use client";
import { useState, useEffect } from "react";

const ShowTags = ({ setSelectedTag }: { setSelectedTag: (tag: string | null) => void }) => {
    const sampleTags = ["React", "Next.js", "TailwindCSS", "TypeScript", "JavaScript", "Node.js", "GraphQL", "SQL"];

    const [tags, setTags] = useState<string[]>([]);
    const [activeTag, setActiveTag] = useState<string | null>(null);

    useEffect(() => {
        // 初回レンダリング時にサンプルデータをセット
        setTags(sampleTags);
    }, []);

    const handleTagClick = (tag: string) => {
        console.log("Tag clicked:", tag);
        setActiveTag(tag);
        setSelectedTag(tag); // 親コンポーネントに選択されたタグを渡す
    };

    return (
        <div className="pb-10 border-b border-gray-200 mx-24 my-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tags.map((tag, index) => (
            <div
            key={index}
            onClick={() => handleTagClick(tag)}
            className={`p-4 shadow-md rounded-lg border cursor-pointer transition ${
              activeTag === tag ? "bg-blue-100" : ""
            }`}
          >
            <span className="text-sm font-medium text-gray-700">{tag}</span>
          </div>
            ))}
        </div>
        </div>
    );
};

export default ShowTags;
