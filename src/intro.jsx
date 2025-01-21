import React from 'react';
import { Tilt } from 'react-tilt';
import IMG1 from './IMG_1540.jpg';
import './style.css';
import VDO from './vdoo.mp4'; 

function Intro() {
  return (
    <div
      id="about"
      className="container-fluid pt-sm-3"
      style={{
        minHeight: '70vh',
        overflow: 'hidden',
        padding: '10px',
        position: 'relative',
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="background-video"
        src={VDO} type="video/mp4"
      >
      </video>

      <h1
        className="text-white display-5 ourtext fw-bolder text-center"
        style={{
          fontSize: '60px',
          fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
          zIndex: '1', // Ensure this is above the video
          position: 'relative',
        }}
      >
        About <span style={{ color: '#05a8f3' }}>Me</span>
      </h1>

      <div
        className="img pt-md-3"
        style={{
          justifyContent: 'center',
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        <Tilt
          options={{
            max: 25,
            scale: 1.1,
            speed: 300,
          }}
        >
          <img
            src={IMG1}
            width="400px"
            alt="About me"
            style={{ borderRadius: '10px', zIndex: '1', position: 'relative' }}
          />
        </Tilt>
      </div>

      <div className="text pt-sm-3">
        <h1
          className="ourtext fw-bolder text-white text-center"
          style={{ overflow: 'hidden', zIndex: '1', position: 'relative' }}
        >
          <span style={{ color: '#05a8f3' }}>Mern</span> Stack Developer
        </h1>
        <p className="text-white ourtext fw-bolder text-center" style={{ zIndex: '1', position: 'relative' }}>
          A MERN stack developer builds web applications using MongoDB, Express.js,
          React, and Node.js. MongoDB handles data storage, Express and Node.js power
          the backend, while React is used for building the frontend. The developer
          works on both the client-side and server-side to create dynamic, full-stack
          applications.
        </p>
      </div>
    
    </div>
  );
}

export default Intro;
