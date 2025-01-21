import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import './style.css'
import VDO from './earth.mp4';

function INTROO() {
    useEffect(() => {
        Aos.init({
            duration: '800',
            once: 'false'
        })
    }, [])

    return (<>
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
            <video
                autoPlay
                loop
                muted
                className="background-video"
                src={VDO} type="video/mp4"
            >
            </video>

            <div id="contact" className="main " style={{ minHeight: "100vh", }}>
                <h1 style={{ color: 'white', textAlign: "center", fontSize: "60px", fontWeight: "bolder" }}>Contact <span style={{ fontSize: "60px", color: '#05a8f3' }}>US</span></h1>
                <div className="container">
                    <div className="row p-2" >
                        <div className="col-md-4 ">
                            <h4 style={{ color: "white", fontSize: "40px", fontWeight: 'bolder' }}>Get <span style={{ color: '#05a8f3' }} >In</span> Touch</h4>

                            <div className="form pt-2 "  >

                                <label htmlFor="" className='text-white fw-bolder ' style={{ fontSize: '20px' }}>Name</label>
                                <input type="Name" className='mb-2' placeholder="  Name  " style={{ width: "100%", border: "none", color: "black", padding: "5px" }} /><br></br>

                                <label htmlFor="" className='text-white fw-bolder' style={{ fontSize: '20px' }}>Contact</label>
                                <input type="Name"  className='mb-2' placeholder="  Phone Number  " style={{ width: "100%", border: "none", color: "black", padding: "5px" }} /><br></br>

                                  <label htmlFor="" className='text-white fw-bolder' style={{fontSize:'20px'}}>Email</label>
                                <input type="Email"  className='mb-2' placeholder="  Your Email  " style={{ width: "100%", border: "none", color: "rgb(153,153,153)", padding: "5px" }} /><br></br>

                              <label htmlFor="" className='text-white fw-bolder' style={{fontSize:'20px'}}>Message</label>
                                <textarea placeholder="  Write a Mesaage  " style={{ border: "none", width: "100%", height: '90px', color: "rgb(153,153,153)", padding: "5px" }}></textarea>
                                <button className="btn btn-outline-light rounded-0 w-100 mt-2">submit</button>
                            </div>
                        </div>

                        {/* <div className="col-md-4">
<h4 style={{color:"white", paddingTop:"30px", fontSize:"40px"}}>My <span style={{color:"#05a8f3"}}>Details</span> </h4>
<div className="text" style={{paddingTop:"50px"}}>
    <p style={{color:"grey"}}>EMAIL</p>
    <p style={{color:"white"}} >Aryangrover139@gmail.com</p>

    <p style={{color:"grey"}}>PHONE</p>
    <p style={{color:"white"}} >9465161139</p>

    <p style={{color:"grey"}}>ADDRESS</p>
    <p style={{color:"white"}} >#5 Gaushala Road Near Mati Das Gurudwara</p>

</div>

</div>

<div className="col-md-4" >
    <h4 style={{color:"#05a8f3", paddingTop:"30px", fontSize:"40px", }} >Map</h4>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.0248475330304!2d76.72101027439562!3d30.689576974605153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b6ad975a6a635fd%3A0xf559c6990c1f8c79!2sThe%20Skill%20Boost!5e0!3m2!1sen!2sin!4v1731041834036!5m2!1sen!2sin" style={{paddingTop:"50px", width:"300px", height:"300px"}} ></iframe>

</div> */}

                    </div>
                </div>
            </div>
        </div>


        <footer class=" p-2 border-top bg-dark">
            <p className="text-light pb-0 text-center">
                All copyrights &#169; reserved by
                <span style={{ color: '#05a8f3' }}>
                    Aryan Grover
                </span>
            </p>

        </footer>

    </>)

}
export default INTROO