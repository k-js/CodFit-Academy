import React from 'react'
import { useState } from "react";
import  {  BrowserRouter as Router,  Routes as Switch,  Route,  Link} from "react-router-dom";
import TabValores from "../src/pages/TabValores/TabValores";
import CadClientes from "../src/pages/CadClientes/CadClientes"

function Routes() {
  const [fade, setFade] = useState(true)
  
   return (
    
     <Router>

       <div>
             <Switch> 
                 <Route path="/Planos" element={<TabValores/>} />
                 <Route path="/CadClientes" element={<CadClientes/>} />
                 </Switch>
                
    
          </div>    
        </Router>
       
      );
    }
    
    export default Routes;