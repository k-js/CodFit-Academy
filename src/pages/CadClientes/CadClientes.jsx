import React, { useState } from "react";
import "./CadClientes.css";
import { cpf } from 'cpf-cnpj-validator'; 
import {postCadastro} from '../../service/api';

const CadClientes = () => {
  const [inputEmail, setInputEmail] = useState('')
  const [inputCPF, setInputCPF] = useState('')
  const [inputNome, setInputNome] = useState('')
  const [inputTel, setInputTel] = useState('')
  const [inputGenero, setInputGenero] = useState('')


  


  function handleInputEmail(target){
    setInputEmail(target.value)
    //console.log(inputEmail)
  }
  
  function handleInputCPF(target){
    setInputCPF(target.value)
    //console.log(inputCPF)
  }

  function handleInputNome(target){
    setInputNome(target.value)
    //console.log(inputEmail)
  }
  
  function handleInputTel(target){
    setInputTel(target.value)
    //console.log(inputCPF)
  }

  function handleInputGenero(target){
      setInputGenero(target.value);
    //console.log(inputEmail)
  }

  function validaEmail(){
    if(inputEmail.indexOf('@') > 2 && inputEmail.indexOf('.com') > inputEmail.indexOf('@')){
      //alert("Email Válido")
    }else{
      alert("Email Inválido")
    }
  }

  function validaCPF(){
    if(cpf.isValid(inputCPF)){
      alert("CPF válido ")
    }else{
      alert("CPF inválido")
    }
  }

  function cadastrar() { 
    const dadosForm = { 
      email: inputEmail,
      cpf: inputCPF,
      nome: inputNome,
      telefone: inputTel,
      genero: inputGenero, };

    console.log("logar dados form");
    console.log(dadosForm);
    postCadastro(dadosForm);

    limpaForm();
    
}

function limpaForm() {
  setInputEmail("");
  setInputCPF("");
  setInputNome("");
  setInputTel("");
  setInputGenero(false);
}

  return (
    <section className='cadastro'>
      <div className='text'>
        <h1>Ainda não é um usuário registrado?</h1>
        <p>Cadastre-se e venha fazer parte da família Cot-fit também!</p>
      </div>

      <form className='formCadastro'>
        <input placeholder="Nome" type="text" value={inputNome} onChange={({target})=>handleInputNome(target)} />
        
        <input placeholder="Telefone" type="text" value={inputTel} onChange={({target})=>handleInputTel(target)}/>

        <input placeholder="E-mail" type="email" value={inputEmail} onChange={({target})=>handleInputEmail(target)}/>
       
        <input placeholder="CPF" type="text" value={inputCPF} onChange={({target})=>handleInputCPF(target)}/>
       
        <div className='radioInput'>
          <input type="radio" name='genero'  value="masculino" onChange={({target})=>handleInputGenero(target)}/>
          <label htmlFor="Masculino">Masculino</label>
          <input type="radio" name='genero'  value="feminino" onChange={({target})=>handleInputGenero(target)}/>
          <label htmlFor="feminino">Feminino</label>
        </div>
        <button onClick={(event)=>{
          event.preventDefault()
          validaEmail();
          validaCPF();
          cadastrar();
          }}>Enviar cadastro</button> 

       

      </form>
    </section>
  );
};

export default CadClientes;