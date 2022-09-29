const timeout = (duration) => {
    return new Promise((resolve, reject) => {

    if (duration == 3000){
      setTimeout(resolve, duration)
    } else {
        setTimeout(reject, duration)
        }

    })
  }
  
timeout(3000)
    .then(function() { // executa o bloco após 3 segundos
      console.log('passou 3 segundos')
    })
    .catch(function() {
    console.log("Demorou mais de 3 segundos")
    })  


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


const nomeCompleto = candidatos.map((usuario) => {

        if (usuario.ativo == true) {
        return `Ativo: ${usuario.nome} ${usuario.sobrenome}`
        } else {
            return `Inativo: ${usuario.nome} ${usuario.sobrenome}`
        }
    
    })

    console.log(nomeCompleto);    