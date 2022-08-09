import React, { useState } from 'react'
import { putUsuario } from '../../service/api.js'
import S from './AlteraUsuario.module.css'
import Fieldsets from '../../components/Fieldsets/Fieldsets.jsx'
import Button from '../../components/Button/Button.jsx'

const AlteraUsuario = () => {
  const campos = [
    { keyState: 'nome', label: 'Nome', type: 'text' },
    { keyState: 'telefone', label:'Telefone', type: 'text' },
    { keyState: 'cpf', label:'cpf', type: 'text' }
]

  const [dadosForm, setDadosForm] = useState({
    nome: '',
    telefone: '',
    cpf: '',
  })

  function handleChange(target, key) {
    const value = target.value
    setDadosForm({ ...dadosForm, [key]: value })

  }

  function handleCancel() {

  }
  function handleDelete() {

  }
  async function handleSave() {
   await putUsuario(dadosForm)
  }
  return (

    <form action="" className={S.form}>
      {campos.map((campo, index) => {
        return (
          <Fieldsets
            style={{ gridArea: campos.keyState }}
            key={index}
            label={campo.label}
            type={campo.type}
            keyState={campo.keyState}
            value={dadosForm[campo.keyState]}
            onChange={handleChange}
          />
        )
      })}
      <section className={S.buttons}>
        <Button text='cancelar' color='preto' />
        <Button text='Excluir' color='preto' />
        <Button text='Salvar' color='amarelo' onclick={handleSave()} />
      </section>
    </form>

  )
}

export default AlteraUsuario