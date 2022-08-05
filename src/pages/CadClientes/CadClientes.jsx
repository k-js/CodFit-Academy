import React, { useState } from "react";
import S from "./CadClientes.css";
import { cpf } from 'cpf-cnpj-validator'; 

const CadClientes = () => {
  const [inputEmail, setInputEmail] = useState('')
  const [inputCPF, setInputCPF] = useState('')

  function handleInputEmail(target){
    setInputEmail(target.value)
    console.log(inputEmail)
  }
  
  function handleInputCPF(target){
    setInputCPF(target.value)
    console.log(inputCPF)
  }

  function validaEmail(){
    if(inputEmail.indexOf('@') > 2 && inputEmail.indexOf('.com') > inputEmail.indexOf('@')){
      alert("Email Válido")
    }else{
      alert("Email Inválido")
    }
  }

  function validaCPF(){
    if(cpf.isValid(inputCPF)){
      alert("CPF rodando")
    }else{
      alert("CPF falhou")
    }
  }

  return (
    <section className={S.cadastro}>
      <div className={S.text}>
        <h3>Faça seu cadastro aqui</h3>
        <p>oioioi quero cadastro,</p>
        <br></br>
        <p>TESTE TESTE</p>
      </div>

      <form className={S.formCadastro}>
        <label>Nome:</label>
        <input type="text" />
        <label>E-mail:</label>
        <label>Telefone:</label>
        <input type="text" />
        <input type="email" value={inputEmail} onChange={({target})=>handleInputEmail(target)}/>
        <label>CPF:</label>
        <input type="text" value={inputCPF} onChange={({target})=>handleInputCPF(target)}/>
        <div className={S.radioInput}>
          <input type="radio" name='genero' value="masculino"/>
          <label htmlFor="Masculino">Masculino</label>
          <input type="radio" name='genero' value="feminino"/>
          <label htmlFor="feminino">Feminino</label>
        </div>
        <button onClick={(event)=>{
          event.preventDefault()
          validaEmail()
          validaCPF()
          }}>Enviar cadastro</button>
      </form>
    </section>
  );
};

export default CadClientes;