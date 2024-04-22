import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Switch,Routes} from "react-router-dom";

//use 'routes' instead of 'switch'
// Sample<Route path="/" element= {<Home/>} />... new version update thing

import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Hero from "./Components/Hero";
import Repository from './Components/Repository';
import AllRepository from "./Components/All-repository";



function App () {
   
  

  return(

    <div>
        <Router>

            <Navbar/>

            <Routes>
                <Route exact path="/" element= {<Home/>} />
                <Route path="/repository" element= {<Repository/>}/>
                <Route path="/all-repository" element= {<AllRepository/>}/>
                <Route path="/all-repository/:id" element= {<Repository/>}/>
            
            </Routes>
          
        </Router>
          
          
    </div>
      
    
  )

};

//export default App;
