import React, { useState } from "react";
import S from "./AlteraUsuario.module.css";
import Fieldsets from "../../components/Fieldsets/Fieldsets.jsx";
import Button from "../../components/Button/Button.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { deleteUsuario, getUsuarioCpf, putUsuario } from "../../service/api.js";
import { useEffect } from "react";


const AlteraUsuario = () => {
  const navigate = useNavigate();
  const params = useParams();

  const campos = [
    { keyState: "nome", label: "Nome", type: "text" },
    { keyState: "telefone", label: "Telefone", type: "text" },
    { keyState: "cpf", label: "CPF", type: "text" },
  ];

  const [dadosForm, setDadosForm] = useState({
    nome: "",
    telefone: "",
    cpf: "",
    id: "",
  });

  function handleChange(target, key) {
    const value = target.value;
    setDadosForm({ ...dadosForm, [key]: value });
  }

  async function request() {
    const response = await getUsuarioCpf({ cpf: params.cpf });
    setDadosForm(response[0]);
    console.log(response);
  }

  useEffect(() => {
    request();
  }, []);

 
  async function handleDelete() {
    const response = await deleteUsuario(params.cpf);
    navigate('/home')
  }

  async function handleSave() {
    await putUsuario(params.cpf, dadosForm);
  }

  return (
    <div className={S.form}>
      <form action="" className={S.forms}>
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
          );
        })}
      </form>
      <section className={S.buttons}>
        <Button text="Excluir" color="preto" onclick={handleDelete} />
        <Button text="Salvar" color="amarelo" onclick={handleSave} />
      </section>
    </div>
  );
};

export default AlteraUsuario;
