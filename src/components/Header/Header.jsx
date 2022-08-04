import react from "react";
import "./Header.css";
import {ReactComponent as Logo} from '../../assets/img/logo.png';

function Header() {
    return (
        <header className={S.header}>
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