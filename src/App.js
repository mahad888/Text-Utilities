
import Navbar from './Components/Navbar';
import './App.css';
import Textforms from './Components/Textforms';
// import Person from "./Components/Person.js";
import Aboutus from './Components/Aboutus';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {


  const [Mode,setMode] = useState({
    color : "black",
    backgroundColor :"white",
    height: "630px"

  });

  const [BtnText,SetBtnText]= useState("Dark Mode")

 
  
  const modeSetter =()=>{
    if (Mode.color === "black"){
        setMode({
          color : "white",
          backgroundColor :"black",
          height: "630px"
        })
        SetBtnText("Light Mode")
   
    }  
    else{
      setMode({
        color : "black",
        backgroundColor :"white",
        height: "630px"
        
      }) 
      SetBtnText("Dark Mode")
  }
}
  
  


  return (
    <>
    <Router>
            <div className="App" style={Mode}>

              {/* <Person
          name = "Id : Sp21-bse-057"
          name1 = "Id : Sp21-Bse-099"
          ></Person>
          */}

              <Navbar title="Text Utitlities" about="About us" mode ={modeSetter} caption = {BtnText}>  </Navbar>
              
              
            <br></br>

              <Routes>


                  
                  <Route path="/about" element ={<Aboutus></Aboutus>}></Route>

                    <Route path="/" element ={<Textforms heading="Enter text to analyze"></Textforms>}>
                   
                    </Route>
              
              </Routes>
              </div>
      </Router></>

      
    
  );
}

export default App;
