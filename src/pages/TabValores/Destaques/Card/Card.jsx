import S from "./Card.module.css";
import { Link } from 'react-router-dom'

export default function Card(props) {
  return (
    <div className="flip-card">

        <div className="flip-card-front">

          <img src={props.imagem} alt="Banner"/>

        </div>

        <div className="flip-card-back">

          <p>{props.p1}</p>
          <p>{props.p2}</p>
          <Link className={S.link} to={props.url}>{props.textoBotao}</Link>

        </div>

      </div>

  );
}