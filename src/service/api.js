import axios from "axios";

const instancia = axios.create({
  baseURL: "https://academy-8.herokuapp.com", //inserir url do heroku
});

export default instancia;

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

export const getUsuario = async () => {
  const response = await instancia.get("/clientes");
  const json = await response.data;
  console.log(json);
  //return json;
  return json;
};

export const getUsuarioCpf = async (body) => {
  console.log("logando o body");
  console.log(body.cpf);
  const response = await instancia.get(`/clientes/${body.cpf}`);
  const json = await response.data;
  //return json;
  return json;
};

export const putUsuario = async (cpf, body) => {
  const response = await instancia.put(`/clientes/${cpf}`, body);
  const json = await response.data.msg;
  console.log(json);
  return json;
};

export const deleteUsuario = async (cpf) => {
  const response = await instancia.delete(`/clientes/${cpf}`);
  const json = await response.data.msg;
  console.log(json);
  return json;
};