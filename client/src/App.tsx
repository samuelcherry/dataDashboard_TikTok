import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
            body: formData   
        })
        .then((res) => res.json())
        .then((data) => {
       // console.log("data_01: ", data.data.processed.locationSplit);
        setData(data);
        })
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
