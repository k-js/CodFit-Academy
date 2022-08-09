import React, { useState } from 'react'
import { getUsuario } from '../../service/api';
import "./Usuario.css";



const Usuario = () => {
    const [inputSenha, setInputSenha] = useState('')
    const [inputCPF, setInputCPF] = useState('')
 
  function handleInputSenha(target){
    setInputSenha(target.value)
  }
  
  function handleInputCPF(target){
    setInputCPF(target.value)
  }

    function logar() { 
        const dadosForm = { 
            cpf: inputCPF,
            senha: inputSenha,
        };
    
        console.log("logar dados form");
        console.log(dadosForm);
        getUsuario(dadosForm);
    
       limpaForm();

       function limpaForm() {
        setInputCPF("");
        setInputSenha("");
      }
        
    }
  return (
    <form className='formCadastro'>
        <input className ="usuario" placeholder="CPF" type="number" value={inputCPF} onChange={({target})=>handleInputCPF(target)}/>
        <input className ="usuario"  placeholder="SENHA" type="password"value={inputSenha} onChange={({target})=>handleInputSenha(target)}/>
        <button onClick={(event)=>{
          event.preventDefault()
          logar();
                   }}>Entrar </button> 
    </form>
  )
}

export default Usuario
