export const converterMoeda = (valor, moedaOrigem, moedaDestino) => {
    const taxas = { USD: 5.18, EUR: 5.89 };
    const resultado = valor / taxas[moedaDestino];
    exibirMensagem(resultado);
    return resultado;
};
export const converterParaEuro = (valor,callback) => {
    const resultado = valor / 5.89;
    callback(resultado);
    return resultado;
};

export const converterParaDolar = (valor,callback) => {
    const resultado = valor / 5.18;
    callback(resultado);
    return resultado;
};

export const exibirMensagem = resultado => console.log("Conversão realizada com sucesso! Resultado: " + resultado);



//export function converterMoeda(valor, moedaOrigem, moedaDestino) {
//    const taxas = {
      //  BRL: 1,
 //       USD: 5.18,
 //       EUR: 5.89,
        //GBP: 6.5
//   };

 //   if (!(moedaOrigem in taxas) || !(moedaDestino in taxas)) {
//        throw new Error('Moeda inválida');
//    }

//    const valorEmBrl = valor * taxas[moedaOrigem];
//    return valorEmBrl / taxas[moedaDestino];
//}

//CORREÇÃO:
// Function converterParaEuro(valor) {
//     return valor / 5.89;
// }
//CORREÇÃO:
// Function converterParaDolar(valor) {
//     return valor / 5.18;
// }