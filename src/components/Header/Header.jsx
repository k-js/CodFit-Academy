import react from "react";
import "./Header.css";
import {Link} from "react-router-dom"
function Header() {
    return (
        <header >
      <Link className='titulo' to='/'>Super Mario Academia</Link>
      <nav>
        <Link className='subtitulo' to='/home' >Home</Link>
        <Link className='subtitulo' to='/sobre' >Sobre</Link>
        <Link className='subtitulo' to='/contato' >Contato</Link>
      </nav>
    </header>
    )
}


export default Header;