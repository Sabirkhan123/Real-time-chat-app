import React from 'react'

import img8 from './images/img8.jpg'
import img10 from './images/img10.jpg'
import img11 from './images/img11.jpg'
import img12 from './images/img12.jpg'
import img13 from './images/img13.png'
import img15 from './images/img15.jpg'
import { AiFillWechat } from "react-icons/ai";

import './homestart.css'
import { useNavigate } from 'react-router-dom'
// import About from './pages/About'


const Homestart = () => {
    const navigate = useNavigate()
    const handlReg = () => {
        navigate('/chat/register')
    }
    const handlLog = () => {
        navigate('/chat/login')
    }
    const handlAbout = () => {
        navigate('/about')
    }
    return (
        <div className='mainDiv'>
            <div>

            {/* <Link to="/chat/register" className='link1'>Home</Link> */}
            <button onClick={handlReg} className='btnRegister homereglog'>SignUp</button>
            <button onClick={handlLog} className='btnLog homereglog'>LogIn</button>
            <button onClick={handlAbout} className='btnAbout homereglog'>About</button>
            <div className='Container'>
                <div className='containercontent'>
                    <h1>Message privately</h1>
                    <p>
                        Simple, reliable, private messaging and
                        Picture Sharing*, available all over the world.
                    </p>
                    <div className='messages'>
                    <h3 className='msg msg1'>Hello, How are You!</h3>
                    <h3 className='msg msg2'>Hello, I'm Good! and You!</h3>
                    <h3 className='msg msg3'>Good!</h3>
                    </div>

                </div>
                <div className='wlc-p'><p>Welcome to our real-time chat app, where connections blossom, conversations flow, and friendships ignite. Explore the realm of instant communication, where words dance across screens, creating
                         a vibrant tapestry of shared experiences and heartfelt interactions.</p></div>

                <img src={img11} />

               </div>
            
            <div className='secimgs'>
                <div  className='smallimg'>
                <img className='img1' src={img10} />
                <img className='img2' src={img8} />
                <img className='img3' src={img12} />
                <img className='img4' src={img15} />
                <div className='body-p'>
                    <p>With private messaging and calling, you can be yourself, speak freely and
                         feel close to the most important people in your life no matter where they are.</p>
                </div>
                </div>
            </div>

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
        

    )
}

export default Homestart
