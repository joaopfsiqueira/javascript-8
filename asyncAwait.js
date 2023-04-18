// para usar assíncronismo em uma função com await, a função principal deve ser async

async function pegaEndereco() {
    const endereco = await fetch('viacep.com.br/ws/01001000/json/')
    const enderecoJSON = await endereco.json()
    console.log(enderecoJSON)
    return enderecoJSON;
}

pegaEndereco()



//outras formas

//podemos criar uma váriavel e dentro dela armazenar funções async, criando um objeto de funções.
// para usar, devemos lembrar de criar uma função callback. "=>"
const teste = {
    pegaEndereco2: async () => {
      const exemplo = await pegaEndereco()
        return console.log(exemplo)
    },

    pegaEndereco3: async () => {
        const exemplo2 = await pegaEndereco()
        return console.log(endereco)
    }
}

teste.pegaEndereco2()
teste.pegaEndereco3