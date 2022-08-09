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

export const getUsuario = async (body) => {
  console.log("logando o body");
  console.log(body.cpf);
  const response = await instancia.get(`/clientes/${body.cpf}`);
  const json = await response.data;
  console.log(json)
  if(json.length > 0 && body.cpf.length>0){
    alert("CPF válido");
    //redirecionar para rota da pagina home
  }else{
    alert("CPF inválido");
  }
  //return json;
  return "ok";
};