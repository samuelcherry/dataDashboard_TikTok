import { useState } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import Dash from './components/Dash.tsx'


function App() {

    const [data, setData] = useState<any>(null);    

    const uploadFile = async(file : File) =>  {
        const formData = new FormData();
        formData.append("file", file);
        
        const res = await fetch("http://localhost:3000/upload",{
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
