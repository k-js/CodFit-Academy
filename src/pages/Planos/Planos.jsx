import Destaques from "./Destaques/Destaques";
import S from "./Planos.css";



export default function Planos() {

  return (
    <main className={S.TabValores}>
      
      <section className={S.destaques}>
        <Destaques />
      </section>
    </main>
  );
}