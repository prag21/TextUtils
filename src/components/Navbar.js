import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar (props) {
 

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/" style={{color:props.mode=='dark'?'white':'black'}}>{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/" style={{color:props.mode=='dark'?'white':'black'}}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about" style={{color:props.mode=='dark'?'white':'black'}}>About</Link>
          </li>
          
        </ul>
        <div className="d-flex">
       <div className="bg-primary rounded mx-2"  onClick={()=>{props.togglemode('primary')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
       <div className="bg-success rounded mx-2" onClick={()=>{props.togglemode('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
       <div className="bg-danger rounded mx-2"  onClick={()=>{props.togglemode('danger')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
       <div className="bg-warning rounded mx-2"  onClick={()=>{props.togglemode('warning')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
       <div className="bg-dark rounded mx-2"  onClick={()=>{props.togglemode('dark')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
       <div className="bg-light rounded mx-2"  onClick={()=>{props.togglemode('light')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        </div>
      

     
      </div>
    </div>
  </nav>
  );
}
Navbar.propTypes={
    title:PropTypes.string
    //you can give PropTypes.string.isrequired and for that remove default thingy which is down
}

Navbar.defaultProps={
  title:'Textutils',
};