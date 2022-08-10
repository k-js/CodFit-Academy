//import React from "react";
import S from "../Footer/Footer.module.css";
import logo from "../../assets/img/dumbbell.png";

function Footer() {
    return (
        <footer className="footer">
            <nav className='separar'>
            <img className={S.imge} src={logo} alt="" />
            </nav>
            <div>
        <p>CODFIT ACADEMIA</p> 

        <p>Av. Anita Garibaldi, 300 | Cabral</p>
        
        <p>(ao lado da Resilia Educação)</p>
        <p>Tel.: (41) 3000-0000</p>
        <a href='mailto:contato@codfitcademia.com.br'>contato@codfitcademia.com.br</a>
            </div>
        </footer>
    )
}


export default Footer;