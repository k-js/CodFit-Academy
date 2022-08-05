import React from 'react'
import imgHome from '../../assets/img/conteudo.png'

const Home = () => {
  return (
      <main>
        <div>
        <p>Inaugurada em 2009, a COT FIT ACADEMY foi criada com o propósito de democratizar o acesso à prática de atividade física de alto padrão, com planos acessíveis e experiência simples.</p>
        <button>PLANOS</button>
        </div>
        <div>
          <img src={imgHome} alt="imagem-da-home" />
        </div>
      </main>
  )
}

export default Home