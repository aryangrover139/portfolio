import { FaCalendarAlt } from "react-icons/fa";
import './card.css';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.css';

function RESUME() {
  useEffect(() => {
    Aos.init({
      duration: '800',
      once: 'false'
    });
  }, []);

  return (
    <>
      <div
        id="education"
        className="container-fluid"
        style={{ backgroundColor: "#01091ae8", minHeight: "100vh", overflow: 'hidden' }}
      >
        <div className="container" style={{ overflow: "hidden" }}>
          <h1
            className="display-5 ourtext fw-bolder text-center"
            style={{ fontSize: "60px", color: "#05a8f3" }}
          >
            Journey
          </h1>

          <div className="row">
            <div className="col-md-6 p-2 pt-3">
              <h1
                className="display-5 ourtext fw-bolder"
                style={{ color: "#05a8f3", paddingLeft: "5px" }}
              >
                Education
              </h1>

              <div className="card rounded dark text-white mb-3" style={{ backgroundColor: "#00040ce8" }}>
                <div className="card-body p-3">
                  <h5 className="card-text display-7 ourtext fw-bolder text-white">April 2019 - March 2020</h5>
                  <p className="card-text display-8 ourtext fw-bolder text-white">10TH Class</p>
                  <p className="card-text display-8 ourtext fw-bolder text-white">I Had Done MY Matriculation from SD Public School</p>
                  <p className="card-text display-8 ourtext fw-bolder text-white">CBSE Board (10TH)</p>
                </div>
              </div>

              <div className="card rounded dark text-white mb-3" style={{ backgroundColor: "#00040ce8" }}>
                <div className="card-body p-3">
                  <h5 className="card-text display-8 ourtext fw-bolder text-white">April 2022 - March 2023</h5>
                  <p className="card-text display-8 ourtext fw-bolder text-white">12TH</p>
                  <p className="card-text display-8 ourtext fw-bolder text-white">I Had Done MY Senior Secondary School</p>
                  <p className="card-text display-8 ourtext fw-bolder text-white">PSEB (12TH)</p>
                </div>
              </div>

              <div className="card rounded dark text-white mb-3" style={{ backgroundColor: "#00040ce8" }}>
                <div className="card-body p-3">
                  <h5 className="card-text display-8 ourtext fw-bolder text-white">July 2023</h5>
                  <p className="card-text display-8 ourtext fw-bolder text-white">Graduation</p>
                  <p className="card-text display-8 ourtext fw-bolder text-white">Bachelor of Business Administration (Pursuing)</p>
                  <p className="card-text display-8 ourtext fw-bolder text-white">Ravinder Nath Tagore</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 pt-md-3" style={{ overflow: "hidden" }}>
              <h1 className="card-text display-5 ourtext fw-bolder" style={{ color: "#05a8f3", paddingLeft: "5px" }}>
                Experience
              </h1>

              <div className="card rounded dark text-white mb-3" style={{ backgroundColor: "#00040ce8" }}>
                <div className="card-body p-3">
                  <h5 className="card-text display-8 ourtext fw-bolder text-white">Nov-13 Dec-29</h5>
                  <p className="card-text display-8 ourtext fw-bolder text-white">Internship</p>
                  <p className="card-text display-8 ourtext fw-bolder text-white">
                    Here I gained practical experience in building full-stack web applications, working with MongoDB, Express, React, and Node.js, and enhancing my problem-solving and coding skills in a professional environment.
                  </p>
                </div>
              </div>

              <div className="card rounded dark text-white mb-3" style={{ backgroundColor: "#00040ce8" }}>
                <div className="card-body p-3">
                  <h5 className="card-text display-8 ourtext fw-bolder text-white">June 2024 - Nov 2024</h5>
                  <p className="card-text display-8 ourtext fw-bolder text-white">MERN Stack Training</p>
                  <p className="card-text display-8 ourtext fw-bolder text-white">
                    I have done 6 months of training and gained deep insights into full-stack development and programming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RESUME;
