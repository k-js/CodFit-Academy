import React from 'react'
import { useState } from "react";
import  {  BrowserRouter as Router,  Routes as Switch,  Route,  Link} from "react-router-dom";
import TabValores from "../src/pages/TabValores/TabValores";

function Routes() {
  const [fade, setFade] = useState(true)
  
   return (
    
     <Router>

       <div>
             <Switch> 
                 <Route path="/Planos" element={<TabValores/>} /> 

                 </Switch>
                
    
          </div>    
        </Router>
       
      );
    }
    
    export default Routes;