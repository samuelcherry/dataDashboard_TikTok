import { useState } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import Dash from './components/Dash.tsx'
import dotenv from "dotenv"

function App() {

	dotenv.config()

    const [data, setData] = useState<any>(null);    

    const uploadFile = async(file : File) =>  {
        const formData = new FormData();
        formData.append("file", file);
        
        const res = await fetch(process.env.VITE_API_URL,{
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
