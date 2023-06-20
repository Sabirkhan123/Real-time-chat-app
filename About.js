import React from 'react';
import './about.css';
import { useNavigate } from 'react-router-dom';
// import sabirkhan from '../images/sabirkhan.jpg'
import aboutpic from '../images/aboutpic.jpeg'
import { AiFillWechat } from "react-icons/ai";


const About = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className='container'>
    <div className="maindiv">
     
      <header>
        <h1>About Us</h1>
      </header>

       <main className='main'>
        <section className='section1'>
        <button className='aboutbtn' onClick={handleHome}>Home</button>
          <h2>Welcome to Real-Time Chat App</h2>
          <p>
            Real-time chat application designed to connect people around the world. 
            It allows you to communicate with friends, family, or colleagues effortlessly.
          </p>
        </section>
        <section className='section5'>
          {/* <h2>Meet the Team</h2> */}
          <div className="team-member">
            <img src={aboutpic} alt='nothing'/>
            <h3>Sabir Ullah</h3>
            <p>Web Developer</p>
          </div>
          {/* Add more team members if needed */}
        </section>

        <section className='section6'>
          <h2>Contact Us</h2>
          <p>For any inquiries or support, feel free to reach out to us:</p>
          <ul>
            <li>Email: sabirullah.bzu@gmail.com</li>
            <li>facebook: <a href="https://www.facebook.com/profile.php?id=100011800922020&mibextid=ZbWKwL">@ChatAppSupport</a></li>
          </ul>
        </section>

        <section className='section2'>
          <h2>Key Features</h2>
          <ul>
            <li>Real-time messaging for instant communication</li>
            <li>Share photos, videos, and files with ease</li>
            <li>Delete Message</li>
            <li>Remove User from User list</li>
            
          </ul>
        </section>

        <section>
          <div className='section3'>
          <h2>How to Use</h2>
          <p>
            Getting started with Real-Time Chat App is simple:
          </p>
          <ol>
            <li>Visit our website and create an account</li>
            <li>Log in with your credentials</li>
            <li>Find friends</li>
            <li>Start chatting in real-time!</li>
          </ol>
          </div>
        </section >

        <section className='section4'>
          <h2>Security and Privacy</h2>
          <p>
            At Real-Time Chat App, we take your privacy and security seriously. 
            All communication is encrypted to ensure your messages remain private and secure. 
            We do not share your personal information with third parties.
          </p>
        </section>

   

       
      </main>

      
    </div>
    <footer className='section7'>
      <section >
               <div className='logoarea'>
                    <AiFillWechat className='logo' />
                    <p>Real TimeChat App</p>
                </div>
          <h2>Terms of Service and Privacy Policy</h2>
          <p>For detailed information about our terms of service and privacy policy, please read:</p>
          <ul>
            <li><a href="terms_of_service.html">Terms of Service</a></li>
            <li><a href="privacy_policy.html">Privacy Policy</a></li>
          </ul>
        </section>
        <p>&copy; 2023 ChatApp. All rights reserved.</p>
      </footer>
    </div>
    
  );
};

export default About;
