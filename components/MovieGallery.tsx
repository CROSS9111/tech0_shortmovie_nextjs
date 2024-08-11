// import React from 'react'

// interface ImageData {
//     id: number;
//     pageURL: string;
//     largeImageURL: string;
//     date: string; // 日付情報を追加
//   }
  
//   interface MovieGalleryProps {
//     fetchData: ImageData[];
    
//   }

// const MovieGallery: React.FC<MovieGalleryProps> = ({ fetchData }) => {
//   return (
//     <div className='flex justify-center'>
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
//         {fetchData.map((data) => (
//           <div className='relative w-64 h-64' key={data.id}>
//             <a href={data.pageURL} target='_blank' className='block w-full h-full'>
//               <img 
//                 src={data.largeImageURL} 
//                 alt='' 
//                 className='w-full h-full rounded-md object-cover shadow-md cursor-pointer transition-all hover:shadow-none hover:transform hover:translate-y-1 duration-300'
//               />
//               <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 flex justify-between items-center">
//                 <div>
//                   <p>{data.date}</p>
//                   <p>その他の情報</p>
//                 </div>
//                 {/* <a href={data.pageURL} target='_blank' className="block"></a> */}
//                 <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
//                   <path d="M8 5v14l11-7z" />
//                 </svg>
//               </div>
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default MovieGallery


import React from 'react';

interface ImageData {
    id: number;
    pageURL: string;
    largeImageURL: string;
    date: string;
}

interface MovieGalleryProps {
    fetchData: ImageData[];
    setSelectedImage: (index: number | null) => void; // 追加: モーダルで表示する画像のインデックスを設定するためのプロップ
}

const MovieGallery: React.FC<MovieGalleryProps> = ({ fetchData, setSelectedImage }) => {
    return (
        <div className='flex justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {fetchData.map((data, index) => (
                    <div className='relative w-64 h-64' key={data.id}>
                        <a 
                            href={data.pageURL} 
                            target='_blank' 
                            className='block w-full h-full'
                            onClick={(e) => {
                                e.preventDefault(); // リンクのデフォルト動作を防ぐ
                                setSelectedImage(index); // クリックした画像のインデックスをセット
                            }}
                        >
                            <img 
                                src={data.largeImageURL} 
                                alt='' 
                                className='w-full h-full rounded-md object-cover shadow-md cursor-pointer transition-all hover:shadow-none hover:transform hover:translate-y-1 duration-300'
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 flex justify-between items-center">
                                <div>
                                    <p>{data.date}</p>
                                    <p>その他の情報</p>
                                </div>
                                <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieGallery;
