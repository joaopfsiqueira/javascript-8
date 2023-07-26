// spread operator é uma forma de pegar tudo dentro de um array e passar como parametro em qualqeur coisa.

const teste = [1, 2, 3];
const teste2 = [4, 5, 6];

function sum(x, y, z, a, b, c) {
  return x + y + z + a + b + c;
}
//podemos:
console.log(sum(...teste, ...teste2));

// ou então, passando de um array para outro array (comum em classes typescript, onde temos uma classe x que tem como atributo uma propriedade array public, e existe um metodo dentro da classe x que no fim dela ela popula esse atributo array, ai existe um segundo metodo que consome esse atributo public array, mas antes disso ele deve rodar um:)

const novoArray = any[] = [...this.atributoArray]
