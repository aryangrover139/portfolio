import IMG16 from './innova-crysta-exterior-right-front-three-quarter-3.webp'
import './style.css'

function All() {
  return (
    <div className="main " style={{ backgroundColor: "#00040ce8" }}>

      <div className="container">
        <div className="row justify-content-center">

          <div class="col-md-6 hlo mb-5 mt-5" style={{overflow:'hidden',position:'relative'}}>
                <img src={IMG16} style={{width:'100%'}}  />
                  
                    <a href="https://tripytravels.netlify.app/" style={{textDecoration:'none',color:'black'}}>
                        <div class="textt">
                            <h5 class="ourtext fw-bolder text-center "><strong>TripyTravels</strong> is a cab booking website using HTML,
                                CSS, Bootstrap, Node.js, and Mongoose. AI enhances personalized booking for a seamless
                                experience.</h5>
                        </div>
                    </a>
                </div>

        

        </div>
      </div>
    </div>
  )
}

export default All;
