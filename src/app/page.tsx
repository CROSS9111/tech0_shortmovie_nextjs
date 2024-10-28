// "use client"

// import Image from "next/image";
// import { useRef, useState, useEffect } from 'react';
// import MovieGallery from "../../components/MovieGallery";
// import Header from '../../components/layouts/Header/Header';
// import Topview from "../../components/elements/Topview/Topview";

// interface ImageData {
//   id: number;
//   pageURL: string;
//   largeImageURL: string;
//   date: string;
// }
// interface BlobData {
//     name: string;
//     url: string;
// };

// export default function Home() {
//     const [fetchData, setFetchData] = useState<ImageData[]>([]);
//     const [selectedImage, setSelectedImage] = useState<number | null>(null); // モーダルで表示する選択された画像の状態を管理するためのステートを追加

//     const ref = useRef<HTMLInputElement>(null);

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         if (ref.current) {
//             const endpointURL = `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PAXABAY_API}=${ref.current.value}&image_type=photo`;
            
//             // const testresponse = await fetch("api/v1/getoutputs")
//             // const data = await testresponse.json();
//             // console.log("API response:", data);

//             fetch(endpointURL).then((res) => {
//                 return res.json();
//             })
//             .then((data) => {
//                 const formattedData = data.hits.map((item: any) => ({
//                     id: item.id,
//                     pageURL: item.pageURL,
//                     largeImageURL: item.largeImageURL,
//                     date: new Date().toLocaleDateString()
//                 }));
//                 setFetchData(formattedData);
//             });
//         }
//     };

//     const [searchword, setSearchword] = useState(0);
//     useEffect(() => {
//         if (fetchData.length > 0) {
//             let count = searchword;
//             count++;
//             setSearchword(count);
//         }
//     }, [fetchData]);


//     // azure storeage用テストコード
//     const [message, setMessage] = useState('');
//     const [blobs, setBlobs] = useState<BlobData[]>([]);
//     const handleClick = async () => {
//         try {
//             const response = await fetch('/api/v1/getoutputs');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch blobs');
//             }
//             const data = await response.json();
//             setBlobs(data.blobs || []);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             setMessage('Failed to fetch data');
//         }
//     };
//     // azure storeage用テストコード(仮)


//     return (
//         <div>
//             <Header />

//             <div className="container mx-auto text-center mt-[80px]">
//                 <p>{searchword}</p>
//                 <form onSubmit={(e) => handleSubmit(e)} className="mb-4">
//                     <input 
//                         type="text" 
//                         placeholder='画像を探す' 
//                         ref={ref} 
//                         className="border rounded px-4 py-2 w-2/3 md:w-1/2 lg:w-1/3"
//                     />
//                 </form>
//                 <button onClick={handleClick} className="px-4 py-2 border border-gray-300 rounded bg-gray-100 hover:bg-gray-200">Send API Request</button>
                
//                 {/* ここまで */}
//                 {/* <Topview /> */}
//                 <div>
//                     {blobs.slice(0, 1).map((blob, index) => (
//                     <div key={index}>
//                         {/* <p>{blob.name}</p> */}
//                         <video controls width="500">
//                         <source src={blob.url} type="video/mp4" />
//                         Your browser does not support the video tag.
//                         </video>
//                     </div>))}
//                 </div>

//                 <MovieGallery fetchData={fetchData} setSelectedImage={setSelectedImage}/>

//                 {/* selectedImageがnullでない場合にモーダルを表示 */}
//                 {selectedImage !== null && (
//                     <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
//                         <button 
//                             className="absolute top-0 right-0 p-4 text-white"
//                             onClick={() => setSelectedImage(null)} // ×ボタンでモーダルを閉じる
//                         >
//                             ×
//                         </button>
//                         <button 
//                             className="absolute left-4 text-white text-3xl"
//                             onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : fetchData.length - 1)} // 左矢印で前の画像に移動
//                         >
//                             ←
//                         </button>
//                         <button 
//                             className="absolute right-4 text-white text-3xl"
//                             onClick={() => setSelectedImage((selectedImage + 1) % fetchData.length)} // 右矢印で次の画像に移動
//                         >
//                             →
//                         </button>
//                         <img src={fetchData[selectedImage].largeImageURL} alt="" className="max-w-full max-h-full"/> {/* モーダル内で画像を表示 */}
//                         <video controls preload="none" style={{ width: '100%', maxWidth: '640px' }}>
//                             <source src="video.mp4" type="video/mp4" />
//                             <track
//                                 src="/path/to/captions.vtt"
//                                 kind="subtitles"
//                                 srcLang="en"
//                                 label="English"
//                             />
//                             Your browser does not support the video tag.
//                         </video>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

import Image from "next/image";
// import { useAuth } from "./context/AuthContext";

export default function Home() {
  // Nextjsはデフォルトでport3000を指定している
  // const port = process.env.PORT;
  // console.log("port",port)
  const NODE = process.env.NODE_ENV;
  console.log("NODE",NODE)



    return (
      <div className="relative pt-20"> {/* ヘッダー分のスペースを追加 */}
        <div className="relative w-full h-screen">
          <Image
            src="/kids-6960579_1280.jpg" // 画像の相対パス
            alt="Kids"
            layout="fill" // 親要素に合わせて画像をフルサイズに
            objectFit="cover" // 画像の表示方法をカバー
            className="brightness-75" // 画像の明るさを少し下げる
          />
        <div className="absolute inset-0 flex items-start justify-center top-10">
        <h1 className="text-white text-4xl font-bold">Memories will always be with you.</h1>
        </div>
        </div>
      </div>
    )
  }





