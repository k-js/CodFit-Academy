import React from 'react'
import {BrowserRouter, Routes as Switch, Route} from  'react-router-dom';
import Header from '../components/Header/Header.jsx';
import Home from '../pages/Home/Home.jsx'
import CadClientes from '../pages/CadClientes/CadClientes';
import Planos from '../pages/Planos/Planos.jsx';

const Routes = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route path='/Home' element={<Home/>} /> 
      <Route path='/CadClientes' element={<CadClientes/>}/>
      <Route path='/planos' element={<Planos/>}/>
    </Switch>
    </BrowserRouter>
  )
}

export default Routes