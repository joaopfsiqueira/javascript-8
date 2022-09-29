const candidatos = [
    {
        "nome": "João",
        "sobrenome": "Siqueira",
        "idade": "22",
        "endereco": "São Paulo",
        "ativo": true
    },
    {
        "nome": "Maria",
        "sobrenome": "Silva",
        "idade": "25",
        "endereco": "Rio de Janeiro",
        "ativo": true
    },
    {
        "nome": "Gabriel",
        "sobrenome": "Oliveira",
        "idade": "30",
        "endereco": "Belo Horizonte",
        "ativo": false
    }
]

//forma 1
const nomeCompleto1 = candidatos.map((usuario) => {
    return usuario.nome + ' ' + usuario.sobrenome
})

//forma 2
const nomeCompleto2 = candidatos.map((usuario) => {

    if (usuario.ativo == true) {
    return `Ativo: ${usuario.nome} ${usuario.sobrenome}`
    } else {
        return `Inativo: ${usuario.nome} ${usuario.sobrenome}`
    }

})

//forma3
for(i = 0; i < candidatos.length; i++) {
   let nomeCompleto3 =  candidatos[i].nome + ' ' + candidatos[i].sobrenome

   return nomeCompleto3
}


console.log(nomeCompleto);