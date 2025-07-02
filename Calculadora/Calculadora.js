function adicionar(valor) {
    document.getElementById('resultado').value += valor;
}
function limpar() {
    document.getElementById('resultado').value = '';
}
function calcular() {
    try {
        document.getElementById('resultado').value = eval(document.getElementById('resultado').value);
    } catch {
        document.getElementById('resultado').value = 'Erro';
    }
}