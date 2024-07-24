function comprar() {
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let pista = document.getElementById("qtd-pista");
    let superior = document.getElementById("qtd-superior");
    let inferior = document.getElementById("qtd-inferior")
    let quantidade = document.getElementById("qtd").value;
    
    if (tipoIngresso == "pista" ) {
        avisoEsgotado(pista, quantidade);
    } else if (tipoIngresso == "superior") {
        avisoEsgotado(superior, quantidade);
    } else {
        avisoEsgotado(inferior, quantidade);
    }
    return;
}

function avisoEsgotado(tipo, quantidade) {
    let quantidadeDisponivel = parseInt(tipo.innerHTML)
    if (quantidade > quantidadeDisponivel) {
        alert("Não há ingressos suficientes para essa opção no momento.")
    } else {
        tipo.innerHTML = quantidadeDisponivel - quantidade
        alert("Compra realizada com sucesso")
    }
}