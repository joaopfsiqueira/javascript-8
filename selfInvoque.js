// Immediately invoked function expression
// funções invocadas imediatamente.


var result = (function () {
  var nome = "João";
  return nome;
})();
// Imediatamente gera a saída:
result; // "João"


// comum em funções async.

async function teste() {
  var nome = "João";
  return nome;
};
// Imediatamente gera a saída:


// comum em classes, ao exportar e utilizar uma função async de fora.


(await teste()).toUpperCase()


