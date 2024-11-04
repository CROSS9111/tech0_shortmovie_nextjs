// "use client"
// import React, { useState } from 'react';
// import Link from 'next/link'


// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div  className="relative z-50">
//       <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-between items-center h-16">
//             <div className="text-lg font-bold">SHORT MOVIE by tech0</div>
//             <button className="p-2 hover:bg-gray-100 rounded" onClick={toggleSidebar}>
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* サイドバー */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         } transition-transform duration-300 ease-in-out`}
//       >
//         <div className="p-4 flex justify-between items-center">
//           <h2 className="text-lg font-bold">Menu</h2>
//           <button className="p-2 hover:bg-gray-300 rounded" onClick={toggleSidebar}>
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <ul className="mt-4">
//           <li>
//             <Link href="/">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="/upload">
//               Upload
//             </Link>
//           </li>
//           <li>
//             <Link href="/generated">
//               Generated
//             </Link>
//           </li>
          
//           <li className="py-2 border-b">Home</li>
//           <li className="py-2 border-b">Upload</li>
//           <li className="py-2 border-b">Generated</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;



"use client";
// import React, { useState } from "react";
import { AuthenticationResult } from "@azure/msal-node"
import Link from "next/link";

const Header = () => {
  const signin = async() => {
    const response = await fetch("/api/auth/signin")
    const data = await response.json();
    // API Route から返却された URL にリダイレクトする
    window.location.href = data.redirect_url
  }
  // ハンバーガーメニュー用
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className="relative z-50">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-lg font-bold">SHORT MOVIE</Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/research" className="text-sm text-gray-800 hover:text-black">
                SERVICE
              </Link>
              <Link href="/generated" className="text-sm text-gray-800 hover:text-black">
                GENERATED
              </Link>
              <Link href="/upload" className="text-sm text-gray-800 hover:text-black">
                UPLOAD
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              {/* <button onClick={() => signin()} className="hidden md:block px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100"> */}
              <button className="hidden md:block px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100">
                Get Started
              </button>
              {/* <button className="p-2 hover:bg-gray-100 rounded md:hidden" onClick={toggleSidebar}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </header>

      {/* サイドバー */}
      {/* デザインを変えたので一旦不要 */}
      {/* <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-lg font-bold">Menu</h2>
          <button className="p-2 hover:bg-gray-300 rounded" onClick={toggleSidebar}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <ul className="mt-4">
          <li className="py-2 border-b">
            <Link href="/">Home</Link>
          </li>
          <li className="py-2 border-b">
            <Link href="/upload">Upload</Link>
          </li>
          <li className="py-2 border-b">
            <Link href="/generated">Generated</Link>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Header;

