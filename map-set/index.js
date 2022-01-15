/**
 * Estrutura MAP
 */

var map = new Map();
function funcao() {

};

var obj = {};

// Método set para enviar objetos para o MAP

map.set('string', 'sou uma string');
map.set(obj, 'sou um obj');
map.set(funcao, 'sou uma funcao');

/*
 * Forma de impressão do set
  Map(1) { 'string' => 'sou uma string' }
  Map(2) { 'string' => 'sou uma string', {} => 'sou um obj' }
  Map(3) {
    'string' => 'sou uma string',
    {} => 'sou um obj',
    [Function: funcao] => 'sou uma funcao'
  }
*/

// Método get para buscar os objetos por chave no MAP

map.get('string');
map.get(obj);
map.get(funcao);

//console.log(map.get('string'));
//console.log(map.get(obj));
//console.log(map.get(funcao));

/**
 * Impressao do get
 * 
 * sou uma string
 * sou um obj
 * sou uma funcao
*/
// Método size para ver quantidade de objetos dentro do MAP
//console.log(`Tamanho: ${map.size}`);

map.size;

// Resultado
// Tamanho: 3

// Método has para verificar se existe determinado valor dentro do MAP

map.has('string')

/*
  console.log(map.has('string'));
  console.log(map.has('abc'));
  Resultado:
  True
  False
*/

// Método delete para deletar determinado valor dentro do MAP
map.delete('string')
/*
  console.log(map.delete('string')); // true
  console.log(map.delete('abc')); // false
  console.log(map.has('string')); // false
  console.log(map.has('abc')); // false
*/

// Método clear para deletar todos os valores dentro do MAP

map.clear();

//console.log(`Tamanho: ${map.size}`); // Tamanho: 0

/**
 * Exemplo de MAP Iterado com o for...of
 */

var mapa = new Map();
mapa.set('um', 1);
mapa.set('dois', 2);
mapa.set('tres', 3);

for (var chave of mapa.keys()) {
  //console.log(chave); //um dois tres
}

for (var chave of mapa.values()) {
  //console.log(chave); // 1 2 3
}

for (var chave of mapa.entries()) {
  //console.log(chave); //
  /**
    * [ 'um', 1 ]
    * [ 'dois', 2 ]
    * [ 'tres', 3 ]
    */
}

/**
 * Estrutura WeakMap
 */

var weakMap = new WeakMap();
var elemento1 = Object;
var elemento2 = Object.prototype.hasOwnProperty;

// Método set para inserir chave valor no elemento

weakMap.set(elemento1, 'Sou o elemento1');
weakMap.set(elemento1, 'Sou o elemento1');

// console.log(weakMap.set(elemento1, 'Sou o elemento1')); //WeakMap { <items unknown> }
// console.log(weakMap.set(elemento2, 'Sou o elemento2'));//WeakMap { <items unknown> }

// Método get para buscar valor pela chave

weakMap.get(elemento1);
weakMap.get(elemento1);

// console.log(weakMap.get(elemento1)); //Sou o elemento1
// console.log(weakMap.get(elemento2)); //Sou o elemento1


/**
 * Estrutura com Set
 */

//exemplo de set ES5
/*
  function Set() {
    var array = [];

    this.add = function (valor) {
      if (array.indexOf(valor) === -1) {
        array.push(valor);
      }
    }

    this.mostrarValores = function () {
      console.log(array);
    }
  }

  var set = new Set();

  set.add(2);
  set.add(1);
  set.add(2);
  set.mostrarValores(); // [2, 1]
*/

// Função Set nativa do ES6

var set = new Set();

// Método add serve para adicionar valores ao elemento
set.add(2);
set.add(1);
set.add(2);

for (const value of set) {
  //console.log(value); // 2 1
};

var musica = new Set();

musica.add('musica1');

for (var playlist of musica) {
  //console.log(playlist); // musica1
}

// Método delete para remover o elemento do Set

var novasMusicas = new Set(['musica1', 'musica2']);

novasMusicas.delete('musica1');

for (var playlist of novasMusicas) {
  //console.log(playlist); // musica2
}

// Método  clear para deletar tudo dentro do Set

var musicasAntigas = new Set(['musica1', 'musica2', 'musica3']);

//musicasAntigas.clear();

for (var playlist of musicasAntigas) {
  //console.log(playlist); // ' '
}

// Método has para verificar se item já foi adicionado dentro do set

if (musicasAntigas.has('musica1')) {
  //console.log('já foi adicionado;', musicasAntigas.has('musica1')); // false
}

// Método size para verificar quantidade de elementos dentro do set

var qtdMusicas = musica.size;
//console.log(`Existem ${qtdMusicas} adicionadas a sua playlist`);

/**
 * Estrutura com WeakSet
 */

var playlistMusicas = {
  titulo: 'O amor não tem rollback',
  autor: 'SQL',
};

var musicasParaOuvir = new WeakSet([playlistMusicas]);

console.log(inspect(musicasParaOuvir, {showHidden: true}));