const produto = {
    nome: 'Caneta bic preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto){
    return { ...objeto }
}