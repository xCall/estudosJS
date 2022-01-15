/**
 * Parametros em funções predefinidas
 */

function minhaMaeMandouEuEscolherEsseDaqui(qualEuEscolhi) {
  console.log(qualEuEscolhi);
}

//minhaMaeMandouEuEscolherEsseDaqui('terceiro'); // terceiro
//minhaMaeMandouEuEscolherEsseDaqui(); // undefined

function imprimeNomeCompleto(nome, sobrenome, nomeDoMeio) {
  console.log(`${nome} ${nomeDoMeio} ${sobrenome}`);
}

//imprimeNomeCompleto('Carlos', 'Faita'); //Carlos undefined Faita
//imprimeNomeCompleto('Carlos', 'Daniel', 'Faita'); //Carlos Faita Daniel

// Verificando se o atributo está vazio

function impressaoNome(nome, sobrenome, nomeDoMeio) {
  if(nomeDoMeio === undefined) {
    console.log(`${nome} ${sobrenome}`);
  } else {
    console.log(`${nome} ${nomeDoMeio} ${sobrenome}`);
  }
}

//impressaoNome('carlos','daniel'); //carlos daniel
//impressaoNome('carlos'); // carlos undefined
//impressaoNome('carlos','daniel', 'faita'); // carlos faita daniel

// Predefinindo valor de parametros

function imprimeNome(nome, nomeDoMeio, sobrenome = ''){
  console.log(`${nome} ${nomeDoMeio} ${sobrenome}`);
}

//imprimeNome('Daniel','Gonçalves');//Daniel Gonçalves
//imprimeNome('Daniel','Gonçalves', 'Ferreira');//Daniel Gonçalves Ferreira


//Referenciando outros valores padrões

function calculaPotencia(x=2, y=x) {
  console.log(Math.pow(x,y));
}

//calculaPotencia();//4
//calculaPotencia(3);//27
//calculaPotencia(3,18);//387420489

// Referenciando variaveis internas

const v = 5;
function funcao(x =v) {
  const v = 2
  console.log(x);
}

//funcao();//5

// Usando função como parametros

function facaAlgoComMeuNome(nome, callback = z => {
  console.log(z);
}) {
  callback(nome);
}

facaAlgoComMeuNome("Carlos");
