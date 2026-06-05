const fs = require('fs');

const dados = fs.readFileSync('dados.json','utf-8');
const usuarios = JSON.parse(dados);

console.log("usuarios cadastrados no .json",usuarios) //mostramos o objeto convertido para o js

usuarios.push({ id: 3, nome: 'joão lagoa alegre', idade: 55 })

console.log("usuario atualizados:",usuarios)

fs.writeFileSync('dados.json',JSON.stringify(usuarios,null,2))