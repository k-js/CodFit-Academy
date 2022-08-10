import S from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={S.flipCard}>
      <h2 className={S.nomeCard}>{props.nome}</h2>

      <div className={S.frente}>
        <img src={props.imagem} alt="Banner" />
        <p className={S.p}>
          <p className={S.p}>{props.p1}</p>
          <p className={S.p}>{props.p2}</p>
        </p>

        <Link className={S.link} to={props.url}>
          {props.textoBotao}
        </Link>
      </div>
    </div>
  );
}
