export function converterMoeda(valor, moedaOrigem, moedaDestino) {
    const taxas = {
        BRL: 1,
        USD: 5.2,
        EUR: 5.6,
        GBP: 6.5
    };

    if (!(moedaOrigem in taxas) || !(moedaDestino in taxas)) {
        throw new Error('Moeda inválida');
    }

    const valorEmBrl = valor * taxas[moedaOrigem];
    return valorEmBrl / taxas[moedaDestino];
}