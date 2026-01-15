import { useState } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import Dash from './components/Dash.tsx'
import dotenv from "dotenv"

function App() {

	dotenv.config()

    const [data, setData] = useState<any>(null);    
	
	const API_BASE_URL = import.meta.env.VITE_APT_URL;

	if (!API_BASE_URL) {
		throw new Error("VITE_API_URL is not defined");
	}
    
	const uploadFile = async(file : File) =>  {
        const formData = new FormData();
        formData.append("file", file);
        
        const res = await fetch(`${API_BASE_URL}/upload`,{
            method: "POST",
            body: formData,   
        })
	
		const data = await res.json();
		setData(data);
    };

return (
    	<>
	        <div className="mainContainer"> 
			    <Header uploadFile={uploadFile}/>
			   {data &&  <Dash data = {data}/>}
            </div>
    	</>
	)
}

export default App
