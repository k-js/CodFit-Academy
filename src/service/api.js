import axios from "axios";

const instancia = axios.create({
  baseURL: "http://localhost:3300", //inserir url do heroku
});

export const postCadastro = async (body) => {
  console.log("logando o body");
  console.log(body);
  //const response = await instancia.post("/produtos/novo", body); // verificar a rota que devo inserir para o POST
  //const json = await response.data.msg;
  //return json;
  alert("teste");
  return "ok";
};