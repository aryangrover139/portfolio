import { FaCalendarAlt } from "react-icons/fa";
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import './card.css';

function SKILL() {

useEffect(()=>{
        Aos.init({
            duration:'800',
            once:'false'
        })
    },[])

  return (
    <>
      <div 
      id="skills"
        className="container-fluid " 
        style={{backgroundColor: '#01091ae8',  paddingBottom:'15px'}} 
         
      >
        <div className="container">
          <h1 className="display-5 ourtext fw-bolder text-center" style={{color: '#05a8f3', fontSize: '60px'}}>
            Skills
          </h1>

          <div className="row">
            <h2 className="display-5 ourtext fw-bolder text-white text-center pt-1">
              Technical Skills
            </h2>

            <div className="col-md-12">
              <div className="text ">
                <h3 className="ourtext fw-bolder text-white ">HTML-5</h3>
                <div 
                  style={{
                    border: '4px solid black', 
                    borderRadius: '20px', 
                    width: '100%', 
                    boxShadow: '2px 2px 2px #05a8f3', 
                    position: 'relative', 
                    height: '30px'
                  }}
                >
                  <div 
                    style={{
                      backgroundColor: '#05a8f3', 
                      height: '100%', 
                      width: '90%', 
                      borderRadius: '15px'
                    }}
                  ></div>
                  <span 
                    style={{
                      position: 'absolute', 
                      top: '50%', 
                      left: '50%', 
                      transform: 'translate(-50%, -50%)', 
                      color: 'white'
                    }}
                  >
                    90%
                  </span>
                </div>

                <h3 className="ourtext fw-bolder text-white pt-1">CSS-3</h3>
                <div 
                  style={{
                    border: '4px solid black', 
                    borderRadius: '20px', 
                    width: '100%', 
                    boxShadow: '2px 2px 2px #05a8f3', 
                    position: 'relative', 
                    height: '30px'
                  }}
                >
                  <div 
                    style={{
                      backgroundColor: '#05a8f3', 
                      height: '100%', 
                      width: '90%', 
                      borderRadius: '15px'
                    }}
                  ></div>
                  <span 
                    style={{
                      position: 'absolute', 
                      top: '50%', 
                      left: '50%', 
                      transform: 'translate(-50%, -50%)', 
                      color: 'white'
                    }}
                  >
                    90%
                  </span>
                </div>

                <h3 className="ourtext fw-bolder text-white pt-3">BOOTSTRAP-5</h3>
                <div 
                  style={{
                    border: '4px solid black', 
                    borderRadius: '20px', 
                    width: '100%', 
                    boxShadow: '2px 2px 2px #05a8f3', 
                    position: 'relative', 
                    height: '30px'
                  }}
                >
                  <div 
                    style={{
                      backgroundColor: '#05a8f3', 
                      height: '100%', 
                      width: '90%', 
                      borderRadius: '15px'
                    }}
                  ></div>
                  <span 
                    style={{
                      position: 'absolute', 
                      top: '50%', 
                      left: '50%', 
                      transform: 'translate(-50%, -50%)', 
                      color: 'white'
                    }}
                  >
                    90%
                  </span>
                </div>

                <h3 className="ourtext fw-bolder text-white pt-3">JAVASCRIPT-ES6</h3>
                <div 
                  style={{
                    border: '4px solid black', 
                    borderRadius: '20px', 
                    width: '100%', 
                    boxShadow: '2px 2px 2px #05a8f3',  
                    position: 'relative', 
                    height: '30px'
                  }}
                >
                  <div 
                    style={{
                      backgroundColor: '#05a8f3', 
                      height: '100%', 
                      width: '60%', 
                      borderRadius: '15px'
                    }}
                  ></div>
                  <span 
                    style={{
                      position: 'absolute', 
                      top: '50%', 
                      left: '50%', 
                      transform: 'translate(-50%, -50%)', 
                      color: 'white'
                    }}
                  >
                    60%
                  </span>
                </div>

                <h3 className="ourtext fw-bolder text-white mb-2 pt-3 ">REACT.JS</h3>
                <div 
                  style={{
                    border: '4px solid black', 
                    borderRadius: '20px', 
                    width: '100%', 
                    boxShadow: '2px 2px 2px #05a8f3', 
                    position: 'relative', 
                    height: '30px'
                  }}
                >
                  <div 
                    style={{
                      backgroundColor: '#05a8f3', 
                      height: '100%', 
                      width: '70%', 
                      borderRadius: '15px'
                    }}
                  ></div>
                  <span 
                    style={{
                      position: 'absolute', 
                      top: '50%', 
                      left: '50%', 
                      transform: 'translate(-50%, -50%)', 
                      color: 'white',
                    }}
                  >
                    70%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SKILL;
