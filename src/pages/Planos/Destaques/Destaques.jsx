import S from "./Destaques.module.css";
import Card from "./Card/Card";
import Mensal from "../../../assets/img/banner_1tab.jpg";
import Anual from "../../../assets/img/banner_2tab.jpg";
import Trimestral from "../../../assets/img/banner_3tab.jpeg";


export default function Destaques() {
  return (
    <section className={S.destaques__container}>


      <section className={S.topo}>

      <div className={S.bloco1}>

      <h2 className={S.foco}> FOCO, FORÇA e FAÇA SUA MATRICULA</h2>
      <span className={S.focomiudo}> Valores incríveis, venha nos conhecer e escolha um de nossos planos!</span>

      </div>

      <div className={S.bloco2}>
      
      <h2 className={S.desconto}><strong>50% de desconto*</strong></h2>
      <span className={S.miudo}>* 3 meses, apenas para os 50 primeiros matriculados em AGOSTO/SETEMBRO de 2022</span>

      </div>

      </section>
     
      {/* <h1 className={S.tituloplanos}>NOSSOS PLANOS</h1> */}

      <aside className={S.titulocontainer}>
        
        <Card
          nome="Mensal"
          imagem={Mensal}
          p1="Apenas R$ 59,99"
          p2="50% Off de R$ 59,99 por R$ 29,99 por 3 meses"
          url="/CadClientes"
          textoBotao="Matricule-se"
        />

      </aside>

      <aside className={S.titulocontainer}>
        <Card 
          nome="Trimestral"
          imagem={Trimestral}
          p1="Apenas R$ 139,99"
          p2="50% Off de R$ 139,99 por R$ 69,99"
          url="/CadClientes"
          textoBotao="Matricule-se"
        />
        </aside>

      <aside className={S.titulocontainer}>
        <Card 
          nome="Anual"
          imagem={Anual}
          p1="Apenas R$ 599,99 ou 12x de R$49,99"
          p2="50% Off de R$ 599,99 por R$ 299,99"
          url="/CadClientes"
          textoBotao="Matricule-se"
        />
      </aside>

    </section>
  );
}