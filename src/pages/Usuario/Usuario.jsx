import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUsuario } from '../../service/api';
import "./Usuario.css";



const Usuario = () => {
  const navigate = useNavigate()
    const [inputSenha, setInputSenha] = useState('')
    const [inputCPF, setInputCPF] = useState('')
 
  function handleInputSenha(target){
    setInputSenha(target.value)
  }
  
  function handleInputCPF(target){
    setInputCPF(target.value)
  }

   async function  logar() { 
        const dadosForm = { 
            cpf: inputCPF,
            senha: inputSenha,
        };
    
        console.log("logar dados form");
        console.log(dadosForm);
        const json = await getUsuario(dadosForm)
        if(json.length > 0){
          alert("CPF válido");
          navigate("/AlteraUsuario/:cpf")
          //redirecionar para rota da pagina home
          
        }else{
          alert("CPF inválido");
        }

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
    <form className='formCadastro'>
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
