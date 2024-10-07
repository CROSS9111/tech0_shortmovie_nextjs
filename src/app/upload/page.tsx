"use client";
import React, { useState } from 'react';
import Space from "@/components/elements/Space/Space";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [keyword, setKeyword] = useState('');
  const [message, setMessage] = useState('');

  const [testmessage, setTestMessage] = useState('');

  const handleFetch = async () => {
    try {
      console.log("OK")
      const response = await fetch('http://20.243.99.228:8000/', {
        method: 'GET',
      });
      console.log(response)

      if (response.ok) {
        const data = await response.text(); // テキストデータとして取得
        setTestMessage(data);
      } else {
        setTestMessage('Failed to fetch the message.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setTestMessage('Error occurred while fetching.');
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    

    try {
      const response = await fetch('/api/v1/upload', {
        method: 'POST',
        body: formData,
      });
      // const response = await fetch('/api/v1/upload', {
      //   method: 'GET',
      // });

      if (response.ok) {
        setMessage('File uploaded successfully!');
      } else {
        setMessage('File upload failed.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('File upload failed due to an error.');
    }
  };

  return (
    <div className="p-5 max-w-md mx-auto">
      <Space />
      <h1 className="text-2xl font-bold mb-4">Fetch HelloWorld</h1>
      <button 
        onClick={handleFetch} 
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Get HelloWorld
      </button>
      {testmessage && <p className="mt-4 text-blue-500">{testmessage}</p>}
      
      <h1 className="text-2xl font-bold mb-4">Upload Video</h1>

      <div className="mb-4">
        <input 
          type="file" 
          id="fileInput" 
          name="file" 
          onChange={handleFileChange} 
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
        />
      </div>
      <button 
        onClick={handleUpload} 
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Save
      </button>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
}