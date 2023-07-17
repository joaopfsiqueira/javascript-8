// spread operator é uma forma de pegar tudo dentro de um array e passar como parametro em qualqeur coisa.

const teste = [1, 2, 3];

function sum(x, y, z) {
  return x + y + z;
}

//ao invés de:
console.log(sum(1, 2, 3));
//podemos:
console.log(sum(...teste));

// ou então, passando de um array para outro array (comum em classes typescript, onde temos uma classe x que tem como atributo uma propriedade array public, e existe um metodo dentro da classe x que no fim dela ela popula esse atributo array, ai existe um segundo metodo que consome esse atributo public array, mas antes disso ele deve rodar um:)

const novoArray = any[] = [...this.atributoArray]
