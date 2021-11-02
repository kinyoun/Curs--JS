const bellezaDeMiGato = document.querySelectorAll('li');
const bellezaGatoArray = [];

const botonCalcular = document.querySelector('#calcular');
botonCalcular.onclick = function(){
    mostrarResultado();

    return false;
}

for (let i=0; i<bellezaDeMiGato.length; i++){
    bellezaGatoArray.push(bellezaDeMiGato[i].textContent);
}

function calcularPromedio(){
    let totalBellezaSuri = 0;
    for (let i=0; i<bellezaGatoArray.length ; i++){
        totalBellezaSuri = totalBellezaSuri + Number(bellezaGatoArray[i]);
    }
    return document.querySelector('#promedio').textContent = totalBellezaSuri / bellezaGatoArray.length;
}
calcularPromedio();

function calcularElMenor(){
    menorNumero = Math.min(...bellezaGatoArray);
    return document.querySelector('#menor').textContent = menorNumero;
}
calcularElMenor();

function calcularElMayor(){
    mayorNumero = Math.max(...bellezaGatoArray);    
    return document.querySelector('#mayor').textContent = mayorNumero;
}
calcularElMayor();

function calcularElMasFrecuente(){
    let maximaFrecuencia = 1;
    let frecuencia =  0;
    let numeroMasRepetido;
    for (let i=0 ; i<bellezaGatoArray.length; i++){
        for (let j=i; j<bellezaGatoArray.length; j++){
            if (bellezaGatoArray[i] === bellezaGatoArray[j]){
                frecuencia++;
        }   if (maximaFrecuencia < frecuencia){
            maximaFrecuencia = frecuencia;
            numeroMasRepetido = bellezaGatoArray[i];
        }

      }
      frecuencia = 0;
    }
    document.querySelector('#mas-frecuente').textContent = numeroMasRepetido;
}
calcularElMasFrecuente();

function mostrarResultado () {
    document.querySelector('#parrafo-promedio').className = '';
    document.querySelector('#parrafo-menor').className = '';
    document.querySelector('#parrafo-mayor').className = '';
    document.querySelector('#parrafo-frecuente').className = '';
}
