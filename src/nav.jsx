// import React from 'react';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import logo from './logo aggrover.png';


function Navv(){
    return(<>
     
    <nav class="navbar navbar-expand-lg  fw-bold  top-0 w-100"   style={{
    zIndex: 100,
    backgroundColor: '#01091ae8'
  }}>
        <div class="container">

        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" style={{ width:'85px' }} /> 
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto text-white"  
                    style={{ overflow: 'hidden' }}>
                    <li class="nav-item">
                        <a class="nav-link text-white   " aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#education">Education</a>
                    </li>
                     
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#skills">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#contact">Contact </a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>

    
    </>)
}
export default Navv