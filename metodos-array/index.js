var frutas = ['abacaxi', 'maça', 'uva'];

/*
 * forEach
 * Implementação do método for para varrer um array 
 */

for (var i = 0; i < frutas.length; i++) {
  //console.log(frutas[i]);
}

/*
 * Implementação do método forEach para varrer um array 
 * com callback
 */
frutas.forEach(function (fruta) {
  //console.table(fruta);
})

/*
 * Implementação do método forEach para varrer um array 
 * com funcao
 */

function imprimeFruta(fruta) {
  //console.log(fruta);
}

frutas.forEach(imprimeFruta);

/*
 * Exemplo de valores passados após a chamada do forEach
 */

var canais = ['Globo', 'Sbt', 'Record'];

canais.forEach(function (canal) {
  canais.push('Rede TV');
  //console.log(canal);
});

//console.log(canais);
//[ 'Globo', 'Sbt', 'Record', 'Rede TV', 'Rede TV', 'Rede TV' ]

/*
 * MAP
 * Exemplo de algoritmo com for
 */

var numeros = [1, 2, 3];
var dobro = [];

for (var i = 0; i < numeros.length; i++) {
  dobro.push(numeros[i] * 2);
}

//console.log(numeros);
//console.log(dobro);

/* 
  [ 1, 2, 3 ]
  [ 2, 4, 6 ]
 */

/*
 * Exemplo de iteração com map
 */

var newDobro = numeros.map(function (numero) {
  return numero * 2;
})

//console.log(numeros);
//console.log(newDobro);

/*
 * Filter
 * Exemplo com o for
 */

var alunos = [
  { nome: 'João', idade: 15 },
  { nome: 'José', idade: 18 },
  { nome: 'Maria', idade: 20 },
];

var alunosDeMaior = [];

for (var i = 0; i < alunos.length; i++) {
  if (alunos[i].idade >= 18) {
    alunosDeMaior.push(alunos[i]);
  }
}

//console.table(alunos);
//console.table(alunosDeMaior);
/*
  Alunos
  ┌─────────┬─────────┬───────┐
  │ (index) │  nome   │ idade │
  ├─────────┼─────────┼───────┤
  │    0    │ 'João'  │  15   │
  │    1    │ 'José'  │  18   │
  │    2    │ 'Maria' │  20   │
  └─────────┴─────────┴───────┘
  
  Alunos de Maior
  ┌─────────┬─────────┬───────┐
  │ (index) │  nome   │ idade │
  ├─────────┼─────────┼───────┤
  │    0    │ 'José'  │  18   │
  │    1    │ 'Maria' │  20   │
  └─────────┴─────────┴───────┘
  */

/*
 * Exemplo com o filter
 */

var newAlunosDeMaior = alunos.filter(function (aluno) {
  return aluno.idade >= 18;
});

//console.table(alunos);
//console.table(newAlunosDeMaior);

/*
  ┌─────────┬─────────┬───────┐
  │ (index) │  nome   │ idade │
  ├─────────┼─────────┼───────┤
  │    0    │ 'João'  │  15   │
  │    1    │ 'José'  │  18   │
  │    2    │ 'Maria' │  20   │
  └─────────┴─────────┴───────┘
  ┌─────────┬─────────┬───────┐
  │ (index) │  nome   │ idade │
  ├─────────┼─────────┼───────┤
  │    0    │ 'José'  │  18   │
  │    1    │ 'Maria' │  20   │
  └─────────┴─────────┴───────┘
*/

/*
 * Filter
 * Exemplo com o for
 */

var professores = [
  { nome: 'João' },
  { nome: 'José' },
  { nome: 'Maria' },
];

var professor;
for (var i = 0; i < professores.length; i++) {
  if (professores[i].nome === 'José') {
    professor = professores[i];
    break;
  }
}

//console.table(professores);
//console.log(professor);

/*

  ┌─────────┬─────────┐
  │ (index) │  nome   │
  ├─────────┼─────────┤
  │    0    │ 'João'  │
  │    1    │ 'José'  │
  │    2    │ 'Maria' │
  └─────────┴─────────┘
  Valor filtrado
  { nome: 'José' }

*/

/*
 * Exemplo com o filter
 */

var newProfessor = professores.find(function (professor) {
  return professor.nome === 'João';
});

//console.table(professores);
//console.log(newProfessor);

/*
  ┌─────────┬─────────┐
  │ (index) │  nome   │
  ├─────────┼─────────┤
  │    0    │ 'João'  │
  │    1    │ 'José'  │
  │    2    │ 'Maria' │
  └─────────┴─────────┘
  Valor filtrado
  { nome: 'João' }
*/

/*
 * Every 
 * Exemplo com for
 * OBS: Validar conjunto todos
 */

var pessoas = [
  { nome: 'João', idade: 18 },
  { nome: 'José', idade: 20 },
  { nome: 'Maria', idade: 24 },
];

var todosMaiorDeIdade = true;

for (var i = 0; i < pessoas.length; i++) {
  if (pessoas[i].idade < 18) {
    todosMaiorDeIdade = false;
    break;
  }
}

//console.table(pessoas);
//console.log(todosMaiorDeIdade);

/* 
  ┌─────────┬─────────┬───────┐
  │ (index) │  nome   │ idade │
  ├─────────┼─────────┼───────┤
  │    0    │ 'João'  │  18   │
  │    1    │ 'José'  │  20   │
  │    2    │ 'Maria' │  24   │
  └─────────┴─────────┴───────┘
  resultado
  true    
*/

/* 
 * exemplo com every 
 */

var newTodosMaiorDeIdade = pessoas.every(function (pessoa) {
  return pessoa.idade >= 18;
});

/*
  console.table(pessoas);
  console.log(newTodosMaiorDeIdade);
  ┌─────────┬─────────┬───────┐
  │ (index) │  nome   │ idade │
  ├─────────┼─────────┼───────┤
  │    0    │ 'João'  │  18   │
  │    1    │ 'José'  │  20   │
  │    2    │ 'Maria' │  24   │
  └─────────┴─────────┴───────┘
  resultado
  true
*/

/* 
 * Some 
 * Exemplo com for
 * OBS: Validar conjunto unidade
*/

var pesoDasMalas = [12, 32, 21, 29];
var temMalaAcimaDoPeso = false;

for (var i = 0; i < pesoDasMalas.length; i++) {
  if (pesoDasMalas[i] > 30) {
    temMalaAcimaDoPeso = true;
  }
}

/*
  console.log(pesoDasMalas);
  console.log(temMalaAcimaDoPeso); 
  [ 12, 32, 21, 29 ]
  resultado
  true
 */

/* 
 * exemplo com some 
 */

var newTemMalaAcimaDoPeso = pesoDasMalas.some(function (pesoDaMala) {
  return pesoDaMala > 30;
});

/*
  console.log(pesoDasMalas);
  console.log(temMalaAcimaDoPeso); 
  [ 12, 32, 21, 29 ]
  resultado
  true
 */

/* 
 * Reduce 
 * Exemplo com for
*/

var numerais = [1, 2, 3, 4, 5];

var soma = 0;

for (var i = 0; i < numerais.length; i++) {
  soma += numerais[i];
}
/*
  console.log(numerais);
  console.log(soma);
  [ 1, 2, 3, 4, 5 ]
  Resultado soma
  15
 */

/* 
 * exemplo com reduce
 */

var newSoma = numerais.reduce(function (soma, numero) {
  return soma + numero;
}, 0);

/* 
  console.log(numerais);
  console.log(newSoma);
  [ 1, 2, 3, 4, 5 ]
  15
 */