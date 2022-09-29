const pessoa = 
{
        "nome": "João",
        "idade": 22,
        "endereco": "São Paulo",
        "diaNascimento": 4,
}


function atualizaPessoa() {
    pessoa.sobrenome = "Siqueira" 
    pessoa.anoNascimento = new Date().getFullYear() - pessoa.idade
    return console.log(pessoa)
}

atualizaPessoa()