function calcularRank(vitorias, derrotas) {

    saldoVitorias = vitorias - derrotas;
    let nivel;
    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível ${nivel}!`);
}


calcularRank(91, 18);
calcularRank(90, 3);
calcularRank(200, 99);
