import React from "react";
import ReactDOM from 'react-dom/client';
import Navbar from "./components/Navbar";
import './App.css'
import IconBar from "./components/IconBar";
import Card from "./components/Card";
const App=()=>{
    
    return(
        <div>
            <Navbar/>
             <hr></hr>
            <IconBar/>
            <hr/>
            <Card isWhite={false}/>
            {/* <Card/>
            <Card/>
             */}
        </div>
    );
}
// default export
// set the root div(DOM region where React will operate)
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
export default App;