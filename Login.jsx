import React from 'react'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const Login = () => {

  const [err, setErr] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/chat")

    }
    catch (err){
      setErr(true);
    }
  }

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">RealtimeChat</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
             
                <button>Sign in</button>
                {err && <span> Something went wrong </span>}
            </form>
            <p>you don't have an account? <Link className='formlink' to="/chat/register"> SignUp</Link></p>
        </div>   
    </div>
  );
};

export default Login
