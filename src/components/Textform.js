import React,{useState} from 'react'


export default function Textform(props) {
    const handleUpclick=()=>{
        //console.log("UpperCase Click");
        let newText=text.toUpperCase();
        setText(newText);
        props.showalert("Converted to Upper Case","success");
    }
    const handleDownclick=()=>{
        //console.log("UpperCase Click");
        let newText=text.toLowerCase();
        setText(newText);
        props.showalert("Converted to Lower Case","success");
    }
    const handleonchange=(event)=>{
      //console.log(" Text  Changed");
      setText(event.target.value);
    }
    const handleCopy=()=>{
      //console.log(" Text  Changed");
      var content=document.getElementById("myBox");
      content.select();
      document.getSelection().removeAllRanges();
      document.execCommand('copy');

      props.showalert("Copied to clipboard","success");
    }
    const [text,setText]=useState('');
  return (
   <>
   
  <div className="container mb-3">
    <label htmlFor="myBox" style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</label>
    <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="15" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
    <button disabled={text.length===0} style={{backgroundColor:props.mode==='dark'?'white':'black',color:props.mode==='dark'?'black':'white'}} className=' my-3' onClick={handleUpclick}>Convert to uppercase</button>
    <button disabled={text.length===0}  style={{backgroundColor:props.mode==='dark'?'white':'black',color:props.mode==='dark'?'black':'white'}} className='mx-3' onClick={handleDownclick}>Convert to lowercase</button>
    <button  disabled={text.length===0}  className='mx-3' style={{backgroundColor:props.mode==='dark'?'white':'black',color:props.mode==='dark'?'black':'white'}}onClick={handleCopy}>Copy Text</button>
  </div> 
  <div className='container my-3'>
    <h4 style={{color:props.mode==='dark'?'white':'black'}} >Your text summary</h4>
    <h6 style={{color:props.mode==='dark'?'white':'black'}}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</h6>
    <h6 style={{color:props.mode==='dark'?'white':'black'}}>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes read</h6>
  </div>
   </>
  )
}
