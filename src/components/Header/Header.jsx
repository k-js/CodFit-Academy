import S from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/dumbbell.png";

function Header() {
  return (
    <header className={S.header}>
      <img className={S.imge} src={logo} alt="" />
      <nav className={S.nav}>
        <Link className={S.subtitulo} to="/home">
          Inicio
        </Link>
        <Link className={S.subtitulo} to="/planos">
          Planos
        </Link>
      </nav>
      <div className={S.div}>
        <Link className={S.btn2} to="/CadClientes">
          Cadastrar
        </Link>
        <Link className={S.btn} to="/Usuario">
          Entrar
        </Link>
        <Link className={S.btn} to="/Adm">
          Administrador
        </Link>
      </div>
    </header>
  );
}

export default Header;
