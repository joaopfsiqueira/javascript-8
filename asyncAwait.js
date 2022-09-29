async function pegaEndereco() {
    const endereco = await fetch('viacep.com.br/ws/01001000/json/')
    const enderecoJSON = await endereco.json()
    console.log(enderecoJSON)
}

pegaEndereco()
