import React, { useEffect, useState } from "react";
import s from "./Adm.module.css";
import { getUsuario } from "../../service/api.js";
import Button from "../../components/Button/Button";

const Adm = () => {
  const [req, setReq] = useState([]);
  const [valorInput, setValorInput] = useState();

  async function handleReq() {
    const get = await getUsuario();
    setReq(get);
  }

  function handleSetValorInput(target) {
    setValorInput(target.value);
  }

  useEffect(() => {
    handleReq();
  }, []);

  return (
    <main className={s.container}>
      <h1>Clientes</h1>

      <div className={s.upperSection}>
        <div className={s.searchSection}>
          <input />
          <button> Buscar</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Endereço</th>
            <th>Data de nascimento</th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody>
          {req.map((cliente) => (
            <tr>
              <td>
                <span>{cliente.nome}</span>
              </td>
              <td>
                <span>{cliente.telefone}</span>
              </td>
              <td>
                <span>{cliente.endereco}</span>
              </td>
              <td>
                <span>{cliente.dataNascimento}</span>
              </td>
              <td>
                <span>{cliente.cpf}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Adm;
