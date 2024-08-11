"use client"
import React, { useState, useEffect } from 'react';

const Topview = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // クライアントサイドでのみレンダリングされるようにする
    }

    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <video controls preload="none" className="w-full max-w-3xl mb-8">
                <source src="video.mp4" type="video/mp4" />
                <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Topview
