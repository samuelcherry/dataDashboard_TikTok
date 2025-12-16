import React, {useState} from 'react';
import axios from 'axios';
import "tailwindcss";

export default function Header({uploadFile}){

const handleSubmit = (e) => {
   uploadFile(e.target.files[0]);
};

  return (
    <div className="header">
	<input
        type="file"
        className="file:bg-gradient-to-r file:from-blue-500 file: to-indigo-600 file:text-white file:font-medium file:px-5 file:py-2 file:rounded-lg file:shadow-md file:border-0 file:cursor-pointer file:hover:from-blue-600 file:hover:to-indigo-700 transition-colors duration-200"
        onChange={handleSubmit}
    />
    </div>
    );
};

