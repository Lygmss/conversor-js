import { converterMoeda, exibirMensagem } from './funcoes.js';

const btnConverter = document.getElementById('btn-converter');
const valorInput = document.getElementById('valor');
const moedaOrigemSelect = document.getElementById('moedaOrigem');
const moedaDestinoSelect = document.getElementById('moedaDestino');
const resultadoElement = document.getElementById('resultado');

function atualizarResultado() {
  const valor = Number(valorInput.value);
   const moedaOrigem = moedaOrigemSelect.value;
   const moedaDestino = moedaDestinoSelect.value;

  if (!Number.isFinite(valor) || valor <= 0) {
        resultadoElement.textContent = 'Informe um valor válido.';
      return;
     }

  const valorConvertido = converterMoeda(valor, moedaOrigem, moedaDestino);
    resultadoElement.textContent = `${valor.toFixed(2)} ${moedaOrigem} = ${valorConvertido.toFixed(2)} ${moedaDestino}`;
}

btnConverter.addEventListener('click', atualizarResultado);
valorInput.addEventListener('input', atualizarResultado);
moedaOrigemSelect.addEventListener('change', atualizarResultado);
moedaDestinoSelect.addEventListener('change', atualizarResultado);

atualizarResultado();

//CORREÇÃO:
//const valor = Number(document.getElementById('valor').value);
//const moeda = document.getElementById('moeda').value;
let resultado;
switch (converterMoeda) {
     case 'USD':
         resultado = converterParaDolar(valor, exibirMensagem);
         break;
     case 'EUR':
         resultado = converterParaEuro(valor, exibirMensagem);
         break;
     console.log('resultado');
 }
 document.getElementById('resultado').textContent = resultado.toFixed(2);