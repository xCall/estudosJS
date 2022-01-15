/**
 * Maneiras de se criar um objeto
 */

// Atráves de uma nova instância com a palavra reservada new

function Livro(titulo) {
  this.titulo = titulo;
}cd 

var livro = new Livro('Entendendo o ES6');

//console.log(livro.titulo); // Entendendo o ES6

// exemplo sem criar uma instância, apontando para o mesmo lugar na mémoria

var novoLivro = {
  titulo: 'Anjos e Demônios'
};

novoLivro.autor = 'Dan Brown';
novoLivro['mostrarLivro'] = function () {
  console.log(`título: ${this.titulo}, autor: ${this.autor}`);
}
/**
 * console.log(novoLivro);
 * Resultado: 
 * {
 * titulo: 'Anjos e Demônios',
 * autor: 'Dan Brown',
 * mostrarLivro: [Function (anonymous)]
 * }
 * 
 * novoLivro.mostrarLivro();
 * Resultado: 
 * título: Anjos e Demônios, autor: Dan Brown
 */

// Declaração de Propriedades no ES5

var nome = 'Maria';
var sobrenome = "Madalena";

var pessoa = {
  nome: nome,
  sobrenome: sobrenome,
};

//console.log(pessoa); //{ nome: 'Maria', sobrenome: 'Madalena' }

var nome = 'Mariana';
var sobrenome = 'Rios';

//console.log(people); //{ nome: 'Mariana', sobrenome: 'Rios' }

const seApresentar = function () {
  console.log(`Olá! Sou a ${this.nome} ${this.sobrenome}!`);
}

const people = { nome, sobrenome, seApresentar };

//people.seApresentar(); // Olá! Sou a Mariana Rios!

const newPerson = {
  nome,
  sobrenome,
  Apresentacao() {
    console.log(`Olá! Sou a ${this.nome} ${this.sobrenome}!`);
  }
}

//newPerson.Apresentacao(); // Olá! Sou a Mariana Rios!

// Índices de propriedades computadas

const nomeMetodo = 'invocar';

const objeto = {
  [nomeMetodo]() {
    console.log('executou método');
  }
}
/*
 * objeto[nomeMetodo]();
 * Resultado:
 * executou método
 * 
 * console.log(objeto);
 * Resultado:
 * { invocar: [Function: invocar] }
 */

const nomeFuncao = 'mostrar';
const propriedade = 'Nome';

const newObject = {
  Nome: 'Objeto',
  [`${nomeFuncao}${propriedade}`]() {
    console.log(this.Nome);
  }
}

/*
  * console.log(newObject);
  * Resultado:
  * { Nome: 'Objeto', mostrarNome: [Function: mostrarNome] }
  *
  * newObject.mostrarNome();
  * Resultado:
  * Objeto
*/
