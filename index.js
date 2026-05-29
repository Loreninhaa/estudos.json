const fs = require('fs');

const dados = fs.readFileSync('dados.json','utf-8');
const usuarios = JSON.parse(dados);

 console.log("Usuários cadastrados");
 console.log(usuarios);