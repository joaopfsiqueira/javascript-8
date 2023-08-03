// O método some() testa se pelo menos um elemento no array passa no teste implementado pela função fornecida. Retorna verdadeiro se, no array, encontra um elemento para o qual a função fornecida retorna verdadeiro; caso contrário, retorna falso. Não modifica o array.

// Exemplo de uso:
const arrayDeObjetos = [
  { id: 1, nome: 'Objeto 1' },
  { id: 2, nome: 'Objeto 2' },
  { id: 3, nome: 'Objeto 3' },
];

function validarIdExistente(arrayDeObjetos, idParametro) {
  return arrayDeObjetos.some((objeto) => objeto.id === idParametro);
}

const idParaValidar = 2;
const resultado = validarIdExistente(arrayDeObjetos, idParaValidar);
console.log(resultado); // Saída: true
