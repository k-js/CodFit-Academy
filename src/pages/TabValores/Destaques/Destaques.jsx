import S from "./Destaques.module.css";
import Card from "./Card/Card";
import Mensal from "../../../assets/img/banner_1tab.jpg";
import Anual from "../../../assets/img/banner_2tab.jpg";


export default function Destaques() {
  return (
    <section className={S.destaques__container}>

      <h1>Nossos Planos</h1>
      <small> <strong> Estamos com planos incríveis, venha nos conhecer e Matricule-se !</strong></small>

      <aside className={S.card_titulo__container}>
        <h2>Mensal</h2>
        <Card
          imagem={Mensal}
          p1="Apenas R$ 59,99 (Sem fidelidade)"
        />

      </aside>
      <aside className={S.card_titulo__container}>
        <h2>Anual</h2>
        <Card 
          imagem={Anual}
          p1="Apenas 599,99 ou 12x de 49,99 (Com fidelidade)"
        
        />
      </aside>
    </section>
  );
}