import "./Card.module.css";

export default function Card(props) {
  return (
    <div className="flip-card">

        <div className="flip-card-front">

          <img src={props.imagem} />

        </div>

        <div className="flip-card-back">

          <p>{props.p1}</p>

        </div>

      </div>

  );
}