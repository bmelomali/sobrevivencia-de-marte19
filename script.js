let oxigênio = Number(prompt("insira a quantidade de oxigênio restante (em litros):"));
let pessoas = Number(prompt("insira a quantidade de pessoas em marte:"));
const consumoDiario = 15; //litros por pessoa.

// consumo total é baseado na quantidade de pessoas multiplicado pelo consumo diario por pessoa.
let consumoTotalBase = pessoas * consumoDiario;
let diasRestantes = oxigênio / consumoTotalBase;

alert(`relatório de Marte: Restam: ${diasRestantes.toFixed(0)} dias de oxigênio!!`);

alert("oii");