const pessoa = 
{
        "nome": "João",
        "idade": 22,
        "endereco": "São Paulo",
        "diaNascimento": 4,
}


function atualizaPessoa(sobrenome, anoAtual){
    pessoa.sobrenome = sobrenome
    pessoa.anoNascimento = anoAtual - pessoa.idade
    return console.log(pessoa)
}

atualizaPessoa("Siqueira", new Date().getFullYear())


return atualizaPessoa;