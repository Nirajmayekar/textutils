import React from 'react'
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function TextForm(props) {
  
  const [text, setText] = useState('');
  // text="new text"; //wrong way to change the state
  // setText("new text");//right way to change the state
  
  const handleUpClick=()=>{
    console.log("upper case was clicked"+ text);
    let newText=text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Text is converted to Uppercase","success");
  }

  const handleLoClick=()=>{
    console.log("upper case was clicked"+ text);
    let newText=text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Text is converted to Lowercase","success");
  }
  
  const handleOnChange=(event)=>{   //event handler
    console.log("on change");
    setText(event.target.value);
  }

  return (
    <>
    <div className="container"> 
      <h1>{props.heading}</h1>   

            <div classNamename="mb-3">
               
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8" style={{backgroundColor:props.Mode==='dark'?'#6c757d':'white'}}></textarea>
                
            </div>
            <button className="btn btn-primary my-2" onClick={handleUpClick}>convert upper case</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>convert lower case</button>
    </div>
    <div className='container my-3'>
      <h1>Text summarry</h1>
      <p> {text.trim()===""?0:text.trim().split(/\s+/).length} words and {text.length} characters</p>
      <h2>preview</h2>
      <p>{text.length>0?text:'enter text to preview'}</p>
    </div>
    </>
  )
}
