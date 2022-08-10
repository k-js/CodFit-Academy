import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Home from "../pages/Home/Home.jsx";
import CadClientes from "../pages/CadClientes/CadClientes";
import Planos from "../pages/Planos/Planos.jsx";
import Usuario from "../pages/Usuario/Usuario.jsx";
import AlteraUsuario from "../pages/AlteraUsuario/AlteraUsuario.jsx";
import NotFount from "../pages/NotFount/NotFount.jsx";
import Adm from "../pages/Adm/Adm.jsx";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/CadClientes" element={<CadClientes />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/Usuario" element={<Usuario />} />
        <Route path="/AlterarUsuario/:cpf" element={<AlteraUsuario />} />
        <Route path="/Adm" element={<Adm />} />
        {/* <Route path="/AlterarUsuario/" element={<NotFount />} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
