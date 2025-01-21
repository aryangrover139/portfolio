import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Bging from './business-man-young-attractive.jpg';
import Navv from './nav';
import IMG29 from './IMG_1540.jpg';
import { FaCalendarAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import PDF from "./aryan_grover.pdf"

import './style.css';

function IMGG() {

    useEffect(()=>{
        Aos.init({
            duration:'800',
            once:'false'
        })
    },[])

    const Bg = {
        height: "100vh",
        backgroundImage: `url(${Bging})`,
        backgroundSize: 'cover',
        backgroundPosition: "center"
    };

    const handleResumeDownload = async () => {
        try {
            const resumePath = {PDF};
            const response = await fetch(resumePath);
            
            if (!response.ok) {
                throw new Error('Resume not found');
            }
            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = './aryan_grover.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(downloadUrl);
            alert('Resume downloaded successfully!');
        } catch (error) {
            console.error('Download failed:', error);
            alert('Failed to download resume. Please try again.');
        }
    };
    // Handle contact button click
    const handleContact = () => {
        // You can add contact functionality here
        window.location.href = "aryangrover672@gmail.com";
        // Or open a modal, or scroll to contact section
    };

    return (
        <>
            <Navv />
            <div id='#'   className="container-fluid" style={{ backgroundColor: '#01091ae8', minHeight: '100vh' }}>
                <div className="container">
                    <div className="row m-auto">
                        <div className="col-md-7 pt-md-3"  style={{ overflow: 'hidden' }}>
                            <div className="text">
                                <h1 className="text-white display-5 ourtext fw-bolder" style={{ fontSize: '65px' }}>
                                    Hi, I'M <span style={{ color: '#05a8f3' }}>Aryan</span>
                                </h1>
                                <h1 className="display-8 ourtext fw-bolder" style={{ color: '#05a8f3' }}>Mern Stack Developer</h1>
                                <p className="text-white display-9 ourtext fw-bolder">
                                    As a MERN stack developer, I specialize in creating robust and scalable web applications using MongoDB, Express.js, React, and Node.js.
                                    My expertise lies in designing responsive user interfaces and building powerful back-end solutions, ensuring a smooth integration between both.
                                    I focus on writing clean, efficient code and am always eager to learn new technologies to enhance my development skills. I thrive in dynamic environments
                                    and enjoy turning complex challenges into seamless, user-centered applications.
                                </p>
                            </div>
                            <button
                                className="ourtext fw-bolder mt-3"
                                style={{
                                    color: 'black',
                                    borderRadius: '10px',
                                    padding: '10px',
                                    backgroundColor: '#05a8f3',
                                    border: 'none',
                                    fontSize: '20px',
                                    overflow: 'hidden',
                                }}
                                 
                                onClick={handleResumeDownload}
                            >
                                Hire Me
                            </button>
                            <button
                                className="ourtext fw-bolder mt-3 m-2"
                                style={{
                                    color: 'black',
                                    borderRadius: '10px',
                                    padding: '10px',
                                    backgroundColor: '#05a8f3',
                                    border: 'none',
                                    fontSize: '20px',
                                    overflow: 'hidden',
                                }}
                                
                            >
                                Let's Talk
                            </button>

                            <div className="home-icon"   style={{ overflow: 'hidden' }}>
                                <a href="https://www.instagram.com/aryangrover139/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram color='#05a8f3' style={{fontSize:'30px', margin:'5px'}}/>
                                </a>
                                <a href="https://wa.me/9465161139" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp color='#05a8f3' style={{fontSize:'30px',margin:'5px'}}/>
                              </a>
                                <a href="https://www.linkedin.com/feed/?trk=hb_signin" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin  color='#05a8f3' style={{fontSize:'30px', margin:'5px',}}/>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-5 pt-3"  >
                            <div className="image-container">
                                <img src={IMG29} alt="Aryan" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IMGG;


 