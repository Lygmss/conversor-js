import { moedaOrigem, moeda} from './funcoes.js';
// Selecionar o botão "Calcular" pelo ID
const btnconverter = document.getElementById('btn-converter');

// Agregar un evento de clicar no botão "Converter"
btnconverter.addEventListener("click", converter);

// Função para calcular o resultado da operação selecionada
function converter(){

    // Obter os valores dos inputs e da operação selecionada
    const moedaOrigem = moedaOrigem(document.getElementById("moedaOrigem").value);
    const moedaConvertida = moedaConvertida(document.getElementById("moedaConvertida").value);

    const moeda = document.getElementById("moeda").value;

    // Declarar uma variável para armazenar o resultado da operação
    let resultado;

    // Usar um switch para determinar qual operação realizar com base na seleção do usuário
    switch (moeda) {

        // Caso para a operação de conversão de moeda
        case "USD":
            resultado = valor * 5.90; // Exemplo de conversão para USD
            // Retornar o resultado da soma
            break;

        case "EUR":
            resultado = valor * 6.10; // Exemplo de conversão para EUR
            break;  

    }

    // Exibir o resultado da operação no elemento com ID "resultado"
    document.getElementById("resultado").textContent = resultado;  
}