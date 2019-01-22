import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Login.css';
import TextBox from '../Components/TextBox';
import Button from '../Components/Button';
import Avatar from '../assets/avatar.png';


const Login = () => {

  return (

    <div className="container">

<div className="row">
<div className="col justify-content-center d-flex">
    <h1 className="welcome">Welcome Back Nick!</h1>

<h3 className="writePass"> Just write your password. </h3>


 {/* Username Form */}


      <TextBox
      value='Password'
      type='password'

      style={{

        width:'395px',
        height:'50px',
        opacity:'0.36',
        borderRadius:'8px',
        backgroundColor:'#6D6D6D',
        position:'aboslute',
        marginTop:'560px ',
        text:'align',
        border:'none'


        }}/>


<br></br>

    <Link to="" className="link"> Duck, I forgot my password. </Link>




<br></br>
{/*Log in button*/}

      <Button  writing="Log in"
  style={{
  position:'absolute',
  width:'395px',
  height:'50px',
  borderRadius:'8px',
  backgroundColor: '#6979F8',
  top:'715px',
  color:'white',
  border:'none'
  }} />

<img  className="avatar" src={Avatar} alt="fireSpot"/>
</div>
    </div>
        </div>


  )
}

export default Login;
