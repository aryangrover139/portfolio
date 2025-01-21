import {BrowserRouter,Route,Routes} from 'react-router-dom'
 
import Navv from './nav'
import PORTFOLIO from './portfolio'
import Bootstrap from './bootstrap'
import All from './all'
function Router(){

    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<PORTFOLIO></PORTFOLIO>}>
         
            
            <Route index element={<All></All>}>
            </Route>

             
            <Route path='/bot' element={<Bootstrap></Bootstrap>}>
            </Route>
             
            </Route>

           

        </Routes>
        
        
        
        </BrowserRouter>
        
        </>
    )
}


export default Router