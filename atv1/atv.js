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