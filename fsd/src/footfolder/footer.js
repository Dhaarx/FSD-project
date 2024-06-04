import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";
import './footer.css';


const Footer=()=>{
    return(
        <div className='footer'>
            <hr/>
                <div className="social-links">
                    <a href="https://www.instagram.com"><i className="social"><FaInstagram color="#E4405F" /></i></a>
                    <a href="https://www.linkedin.com"><i className="social"><FaTwitterSquare color="#1DA1F2"/></i></a>
                </div>
                <div className='social-linkss'>
                    <a href="https://www.facebook.com"><i className="social"><FaFacebookSquare /></i></a>
                    <a href='https://www.snapchat.com'><i className='social'><FaSnapchat color="#FFFC00" /></i></a>
                </div>
                
                <div className='ss'>
                    <p>Get Exclusive Deals in your Inbox</p>
                    <button>youremail@gmail.com</button>
                </div>
                <div className='aa'>
                    <button>Subscribe</button>
                </div>
                <div className='cc'>
                    <p>Legal Pages</p>
                </div>
                <div className='bb'>
                    <p>Terms and conditions<br/>
                    Privacy<br/>
                    Cookies<br/>
                    Modern Slavery Statement</p>
                </div>    
                <br/>
                <br/>
                <br/>
                <section id="sec">
                    <p>We are passionate about the cars</p>
                    <p>&copy; 2024 Moto-Hub. All rights reserved.</p>
                </section>           
          
        </div>
    );
}

export default Footer;