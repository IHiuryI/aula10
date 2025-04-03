function somar() {
    let n1 = parseInt(document.getElementById('num1').value);
    let n2 = parseInt(document.getElementById('num2').value);
    let resultado = n1 + n2;
    document.getElementById('resultadoSoma').innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong> ${resultado} </strong>`;
}

function subtrair() {
    let n3 = parseInt(document.getElementById('num3').value);
    let n4 = parseInt(document.getElementById('num4').value);
    let resultado = n3 - n4;
    document.getElementById('resultadoSubtracao').innerHTML = `A subtração de ${n3} e ${n4} é igual a <strong> ${resultado} </strong>`;
}

function multiplicar() {
    let n5 = parseInt(document.getElementById('num5').value);
    let n6 = parseInt(document.getElementById('num6').value);
    let resultado = n5 * n6;
    document.getElementById('resultadoMultiplicacao').innerHTML = `A multiplicação de ${n5} e ${n6} é igual a <strong> ${resultado} </strong>`;
}

function dividir() {
    let n7 = parseInt(document.getElementById('num7').value);
    let n8 = parseInt(document.getElementById('num8').value);
    let resultado = n7 / n8;
    document.getElementById('resultadoDivisao').innerHTML = `A divisão de ${n7} e ${n8} é igual a <strong> ${resultado} </strong>`;
}

