// Função para verificar se o valor é inválido
function valorInvalido(v) {
  return (
    v === "" ||
    v === null ||
    isNaN(v) ||
    Number(v) < 0 ||
    !Number.isInteger(Number(v))
  );
}

// Função para capturar o valor do usuário, com validação
function inputFatorial() {
  let valor = prompt("Insira um número inteiro positivo:");

  while (valorInvalido(valor)) {
    alert("Valor inválido. Insira um número inteiro positivo.");
    valor = prompt("Insira um número inteiro positivo:");
  }

  return BigInt(valor); // Só converte para BigInt depois de validar
}

// Função para calcular o fatorial com BigInt
function calcularFatorial(numero) {
  let resultado = 1n;

  while (numero > 1n) {
    resultado *= numero;
    numero--;
  }

  return resultado;
}

// Execução principal
let valor = inputFatorial();
let resultado = calcularFatorial(valor);
alert(`O fatorial de ${valor} é ${resultado}`);
