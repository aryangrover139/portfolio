
import { Link ,Outlet} from 'react-router-dom'

function PORTFOLIO (){
    return(<>
  
    

<div  id='port' className="main" style={{  backgroundColor:"#00040ce8",  }}>  
  <h1 style={{color:"#05a8f3", textAlign:"center", paddingTop:"0px", fontSize:"60px", fontWeight:"bolder" , }}>Portfolio</h1>
  <div className="container"> 
  
   <ul className='d-flex justify-content-center m-auto ps-0' style={{paddingTop:"0px", listStyle:"none",fontWeight:"bold"}}>
    
      <li style={{margin:"2%"}}><Link to='/' style={{color:"white", textDecoration:"none", fontSize:'30px' }}>TripyTravel</Link></li>
      <li style={{margin:"2%"}}><Link to='/bot' style={{color:"white" , textDecoration:"none",fontSize:'30px'}}>TheSkillBoost</Link></li>
   

    </ul>
    </div>
    </div>
    <Outlet></Outlet>
 



    
   






    </>)
}
export default PORTFOLIO