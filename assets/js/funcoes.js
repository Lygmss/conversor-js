export function converterMoeda(valor, moedaOrigem, moedaDestino) {
    const taxas = {
      //  BRL: 1,
        USD: 5.18,
        EUR: 5.89,
        //GBP: 6.5
    };

    if (!(moedaOrigem in taxas) || !(moedaDestino in taxas)) {
        throw new Error('Moeda inválida');
    }

    const valorEmBrl = valor * taxas[moedaOrigem];
    return valorEmBrl / taxas[moedaDestino];
}

//CORREÇÃO:
// Function converterParaEuro(valor) {
//     return valor / 5.89;
// }
//CORREÇÃO:
// Function converterParaDolar(valor) {
//     return valor / 5.18;
// }