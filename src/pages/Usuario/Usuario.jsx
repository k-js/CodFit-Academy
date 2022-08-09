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
    <section className='login'>
    <div className='text'>
    <h1>Página do usuário</h1>
    <p>Seus dados são sigilosos não compartilhe com ninguém.</p>
  </div>
    <form className='formUsuario'>
        <input className ="usuario" placeholder="CPF" type="number" value={inputCPF} onChange={({target})=>handleInputCPF(target)}/>
        <input className ="usuario"  placeholder="SENHA" type="password"value={inputSenha} onChange={({target})=>handleInputSenha(target)}/>
        
        <div className='button'>
        <button onClick={(event)=>{
            
            event.preventDefault()
            logar();
            }}>Entrar </button> 
        </div>
        
    </form>
    </section>
  )
}

export default Usuario
