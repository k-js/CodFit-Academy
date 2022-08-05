import react from "react";
import "./Header.css";
import {Link} from "react-router-dom"

function Header() {
  return (
      <header className={header}>
    <Link className='titulo' to='/'>COT Fit - Academy</Link>
    <nav>
      <Link className='subtitulo' to='/home' >Home</Link>
      <Link className='subtitulo' to='/sobre' >Sobre</Link>
      <Link className='subtitulo' to='/planos' >Planos</Link>
    </nav>
  </header>
  )
}

export default Header;