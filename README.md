# Calculadora-de-Fatorial
Este é um projeto simples em JavaScript que permite ao usuário calcular o fatorial de um número inteiro positivo utilizando o tipo `BigInt`, permitindo o cálculo de números grandes com precisão.

## 🚀 Funcionalidades

- Entrada do usuário com `prompt`
- Validação robusta dos dados:
  - Verifica se o valor é vazio, nulo ou não numérico
  - Garante que o número seja inteiro e não negativo
- Cálculo de fatorial utilizando `BigInt`
- Exibição do resultado com `alert`

## 🛠️ Tecnologias utilizadas

- JavaScript (puro, sem frameworks)
- BigInt (para suportar grandes cálculos)
- Funções puras e boas práticas de validação

## 📂 Estrutura do código

O código é dividido em:

- `valorInvalido(valor)` – Função responsável por validar o valor digitado.
- `inputFatorial()` – Solicita a entrada do usuário e valida antes de prosseguir.
- `calcularFatorial(numero)` – Realiza o cálculo do fatorial com `BigInt`.
- Código principal – Chama as funções e mostra o resultado.

## 💡 Exemplo de uso

Ao iniciar o script:

1. O usuário insere um número.
2. O sistema valida se o valor é um número inteiro positivo.
3. O fatorial é calculado e exibido.

## ✅ Requisitos

- Navegador moderno com suporte a `BigInt` (a maioria já tem)
- Conhecimento básico de JavaScript (para leitura ou modificação do código)

## 📌 Observação

Este projeto é um ótimo exercício para praticar:

- Estrutura de repetição (`while`)
- Tipagem forte com `BigInt`
- Validação de entrada
- Organização do código com funções puras

## 👨‍💻 Autor

Desenvolvido por Eduardo.  
📧 Contato: eduardu0220@gmail
