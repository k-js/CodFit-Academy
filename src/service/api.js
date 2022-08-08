import axios from "axios";

const instancia = axios.create({
  baseURL: "https://academy-8.herokuapp.com", //inserir url do heroku
});

export const postCadastro = async (body) => {
  console.log("logando o body");
  console.log(body);
  const response = await instancia.post("/clientes", body); // verificar a rota que devo inserir para o POST
  const json = await response.data.msg;
  console.log("logando response " + response);
  console.log("logando json " + json);
  //return json;
  alert(json);
  return "ok";
};