// import Carrossel from "./Carrossel/Carrossel";
import Destaques from "./Destaques/Destaques";
import S from "./TabValores.css";



export default function Planos() {

  return (
    <main className={S.TabValores}>
      
      <section className={S.destaques}>
        <Destaques />
      </section>
    </main>
  );
}