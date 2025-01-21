import IMG17 from './WhatsApp Image 2025-01-16 at 12.33.11 PM.jpeg'
import './style.css'

function All() {
  return (
    <div className="main " style={{  backgroundColor: "#00040ce8" }}>
      <div className="container">
        <div className="row justify-content-center">

          <div class="col-md-6 hlo mt-5 mb-5" style={{overflow:'hidden',position:'relative'}}>
                <img src={IMG17} style={{width:'100%'}}  />
                  
                    <a href="https://theskillboost.com/" style={{textDecoration:'none',color:'black'}}>
                        <div class="yup textt ">
                            <h5 class=" fw-bolder text-center ">
                          <strong>The Skillboost </strong> website has been updated with a refreshed gallery, new certificates, and improved features for a better user experience.
                               </h5>
                        </div>
                    </a>
                </div>
 
        </div>
      </div>
    </div>
  )
}

export default All;
