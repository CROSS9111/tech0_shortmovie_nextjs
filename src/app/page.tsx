"use client"

import Image from "next/image";
import { useRef, useState, useEffect } from 'react';
import MovieGallery from "../../components/MovieGallery";
import Header from '../../components/layouts/Header/Header';

interface ImageData {
  id: number;
  pageURL: string;
  largeImageURL: string;
  date: string;
}

export default function Home() {
    const [fetchData, setFetchData] = useState<ImageData[]>([]);
    const [selectedImage, setSelectedImage] = useState<number | null>(null); // モーダルで表示する選択された画像の状態を管理するためのステートを追加

    const ref = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (ref.current) {
            const endpointURL = `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PAXABAY_API}=${ref.current.value}&image_type=photo`;
            console.log(process.env.NEXT_PUBLIC_PAXABAY_API)

            fetch(endpointURL).then((res) => {
                return res.json();
            })
            .then((data) => {
                const formattedData = data.hits.map((item: any) => ({
                    id: item.id,
                    pageURL: item.pageURL,
                    largeImageURL: item.largeImageURL,
                    date: new Date().toLocaleDateString()
                }));
                setFetchData(formattedData);
            });
        }
    };

    const [searchword, setSearchword] = useState(0);
    useEffect(() => {
        if (fetchData.length > 0) {
            let count = searchword;
            count++;
            setSearchword(count);
        }
    }, [fetchData]);

    return (
        <div>
            <Header />
            <div className="container mx-auto text-center">
                <p>{searchword}</p>
                <form onSubmit={(e) => handleSubmit(e)} className="mb-4">
                    <input 
                        type="text" 
                        placeholder='画像を探す' 
                        ref={ref} 
                        className="border rounded px-4 py-2 w-2/3 md:w-1/2 lg:w-1/3"
                    />
                </form>

                <MovieGallery fetchData={fetchData} setSelectedImage={setSelectedImage}/>

                {/* selectedImageがnullでない場合にモーダルを表示 */}
                {selectedImage !== null && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                        <button 
                            className="absolute top-0 right-0 p-4 text-white"
                            onClick={() => setSelectedImage(null)} // ×ボタンでモーダルを閉じる
                        >
                            ×
                        </button>
                        <button 
                            className="absolute left-4 text-white text-3xl"
                            onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : fetchData.length - 1)} // 左矢印で前の画像に移動
                        >
                            ←
                        </button>
                        <button 
                            className="absolute right-4 text-white text-3xl"
                            onClick={() => setSelectedImage((selectedImage + 1) % fetchData.length)} // 右矢印で次の画像に移動
                        >
                            →
                        </button>
                        <img src={fetchData[selectedImage].largeImageURL} alt="" className="max-w-full max-h-full"/> {/* モーダル内で画像を表示 */}
                        <video controls preload="none" style={{ width: '100%', maxWidth: '640px' }}>
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
                )}
            </div>
        </div>
    );
}
