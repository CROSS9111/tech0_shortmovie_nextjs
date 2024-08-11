"use client"
import React, { useState } from 'react';
import Link from 'next/link'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div  className="relative z-50">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-lg font-bold">SHORT MOVIE by tech0</div>
            <button className="p-2 hover:bg-gray-100 rounded" onClick={toggleSidebar}>
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
            </button>
          </div>
        </div>
      </header>

      {/* サイドバー */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
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
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/upload">
              Upload
            </Link>
          </li>
          <li>
            <Link href="/generated">
              Generated
            </Link>
          </li>
          
          <li className="py-2 border-b">Home</li>
          <li className="py-2 border-b">Upload</li>
          <li className="py-2 border-b">Generated</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
