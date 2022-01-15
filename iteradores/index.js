var bruxos = ['Harry Potter', 'Hermione Granger', 'Rony Weasley'];

// Obtém o iterador

var iteradorBruxos = bruxos[Symbol.iterator]();

iteradorBruxos.next(); // { value: 'Harry Potter', done: false }
iteradorBruxos.next(); // { value: 'Hermione Granger', done: false }
iteradorBruxos.next(); // { value: 'Rony Weasley', done: false }
iteradorBruxos.next(); // { value: undefined, done: true }

/**
 * 
 * Exemplo com do...while
 * 
 
  var iterador = bruxos[Symbol.iterator]();

  var done = false;

  var proximo = iterador.next();

  do {
    var bruxo = proximo.value;
    console.log(chapeuSeletor.fazerSelecaoDaCasa(bruxo));
    proximo = iterador.next();
  } while (!proximo.done); 
*/

/**
 * Iteração com o laço for...of
 */

var numeros = [1, 2, 3, 4, 5];

for (var numero of numeros) {
  // exemplo break e contiue

   
  if(numero > 3) {
    break;
  } 

  if (numero === 2) {
    continue;
  }
  
  //console.log(numero);
  /**
   * Resultado:
   * 1
   * 2
   * 3
   * 4
   * 5
   */
}




/**
 * Iteração com o laço for...in
 */

var perfilDoFacebook = {
  nome: 'Carlos',
  idade: 22
}

for (var propriedade in perfilDoFacebook) {
  var info = perfilDoFacebook[propriedade];
  //console.log(info);

  /**
   * Resultado:
   * Carlos
   * 22
   * */
}