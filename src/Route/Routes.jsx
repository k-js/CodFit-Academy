import React from 'react'
import {BrowserRouter, Routes as Switch, Route} from  'react-router-dom';
import Header from '../components/Header/Header.jsx';
import Home from '../pages/Home/Home.jsx'
import CadClientes from '../pages/CadClientes/CadClientes';

const Routes = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
    { /* <Route path='/' element={<Home/>} /> */ }
      <Route path='/' element={<CadClientes/>}/>
    </Switch>
    </BrowserRouter>
  )
}

export default Routes