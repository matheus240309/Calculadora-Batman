function adicionarValor(valor){
    let input = document.getElementById("campo")
    input.value += valor
  }

function apagar(valor) {
    let input = document.getElementById("campo")
    input.value = ''
}
function selecionar(valor){
    let input = document.getElementById("campo")
    input.value = eval(input.value)
}
