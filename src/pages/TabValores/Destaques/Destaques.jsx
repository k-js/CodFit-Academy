import S from "./Destaques.module.css";
import Card from "./Card/Card";
import Mensal from "../../../assets/img/banner_1tab.jpg";
import Anual from "../../../assets/img/banner_2tab.jpg";
import Trimestral from "../../../assets/img/banner_3tab.jpeg";


export default function Destaques() {
  return (
    <section className={S.destaques__container}>

      <h1>Nossos Planos</h1>
      <h1> FOCO, FORÇA e FAÇA SUA MATRICULA</h1>
      <small> <strong> Valores incríveis, venha nos conhecer e escolha um de nossos planos!</strong></small>
      <small>Estamos com <strong>50% de desconto</strong>, por 3 meses, para os 50 primeiros matriculados em AGOSTO/SETEMBRO de 2022</small>

      <aside className={S.card_titulo__container}>
        <h2>Mensal</h2>
        <Card
          imagem={Mensal}
          p1="Apenas R$ 59,99 (Sem fidelidade)"
          p2="50% Off de R$ 59,99 por R$ 29,99 por 3 meses"
          url="/CadClientes"
          textoBotao="Matricule-se"
        />

      </aside>

      <aside className={S.card_titulo__container}>
        <h2>Trimestral</h2>
        <Card 
          imagem={Trimestral}
          p1="Apenas 599,99 ou 12x de 49,99 (Com fidelidade)"
          p2="50% Off de R$ 599,99 por R$ 299,99 (não válido para parcelados)"
          url="/CadClientes"
          textoBotao="Matricule-se"
        />
        </aside>

      <aside className={S.card_titulo__container}>
        <h2>Anual</h2>
        <Card 
          imagem={Anual}
          p1="Apenas 599,99 ou 12x de 49,99 (Com fidelidade)"
          p2="50% Off de R$ 599,99 por R$ 299,99 (não válido para parcelados)"
          url="/CadClientes"
          textoBotao="Matricule-se"
        />
      </aside>

    </section>
  );
}