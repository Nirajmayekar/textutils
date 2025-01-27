import './App.css';
import Navbar  from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import About from './components/About.js';
import { useState } from 'react';
import Alert from './components/Alert.js';

import {BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert(
      {
        msg:message,
        type:type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=>{
    if (Mode == 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#343a40';
      showAlert("Dark mode has been enabled!","success");
      document.title='Textutils - DarkMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled!","success");
      document.title='Textutils - LightMode';
    }
  };

  return (
    <>
      <Router>
      <Navbar title="texty" aboutus="about" Mode={Mode} toggleMode={toggleMode}/>  

      <Alert alert={alert}/>

      {/* <div className={`container my-3 text-${Mode==='light'?'dark':'light'}`} > */}
      {/* <TextForm heading="enter your text here" showAlert={showAlert} Mode={Mode}/> */}
      {/* </div> */}
      < div className='container my-3'>
    
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<TextForm heading="enter your text here" showAlert={showAlert} Mode={Mode}/>} /> {/* Catch-all for unmatched routes */}
        <Route path="/About" element={<About/>} />
      </Routes>
    
      </div>
      {/* <div className={`container my-3 text-${Mode==='light'?'dark':'light'}`}>
        <About Mode={Mode} />
      </div> */}
      </Router>
    
    </>
  );
}

export default App;
