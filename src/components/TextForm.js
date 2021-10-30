import React, { useState } from 'react'
import '../App.css'


export default function TextForm(props) {
    const handleUpChange = () => {
        // console.log("On Click is worked. "+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into UPPERCASE","success");
    }
    const handleLwChange =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted into lowercase","danger");
    }
    const handleTcChange=()=>{
        let newText = text.split(" ").map((currentValue)=>{
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        })
        setText(newText.join(" "));
        props.showAlert("Converted into Title-Case","info");
    }
    const handleCopy=()=>{
        var text = document.getElementById('myBox');
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","warning");
    }

    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space has been removed","primary");

    }
    const handleReset = (event)=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Reset","dark");
    }
    const handleOnChange = (event) => {
        // console.log("On Change is worked..");
        setText(event.target.value);
    }


    const [text, setText] = useState("");
    // text = "New Text"; //wrong method to change state
    // setText("new Text"); //correct method to change state
    return (
        <div>
            <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" placeholder='Enter Text Here...'></textarea>
                </div>
                <button className="btn btn-success mx-1" onClick={handleUpChange}>Convert To UPPERCASE</button>
                <button className="btn btn-danger mx-1" onClick={handleLwChange}>Convert To lowercase</button>
                <button className="btn btn-info mx-1" onClick={handleTcChange}>Convert To Title Case</button>
                <button className="btn btn-warning mx-1" onClick={handleCopy}>CopyText</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Rmove Extra Spaces</button>
                <button className="btn btn-dark mx-1" onClick={handleReset}>ResetText</button>
            </div>
            
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h6>Your Text Summary have:- {text.split(" ").length} Words and {text.length} character</h6>
                <p>And {0.008 * text.split(" ").length} Minutes take for Reading this Preview </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something in the text Box above to preview it here"}</p>
            </div>

        </div>
    )
}
