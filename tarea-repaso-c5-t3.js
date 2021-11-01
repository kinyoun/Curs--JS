const $botonNumeroClases=document.querySelector('#boton-clases');

$botonNumeroClases.onclick = function crearInput(){
    const $numeroClases = Number(document.querySelector('#numero-clases').value);
    for (i=1; i<= $numeroClases; i++){
        const $nuevoLabel = document.createElement('label');
        $nuevoLabel.setAttribute('type', 'text');
        $nuevoLabel.textContent = 'Clase n° ' + i;
        document.body.appendChild($nuevoLabel);

        const $horas= document.createElement('input');
        $horas.setAttribute('type', 'number');
        $horas.setAttribute('class', 'horas');
        document.body.appendChild($horas);
        $horas.placeholder = 'Ingrese las horas ';

        const $minutos = document.createElement('input');
        $minutos.setAttribute('type', 'number');
        $minutos.setAttribute('class', 'minutos');
        document.body.appendChild($minutos);
        $minutos.placeholder = 'Ingrese los minutos ';

        const $segundos = document.createElement('input');
        $segundos.setAttribute('type', 'number');
        $segundos.setAttribute('class', 'segundos');
        document.body.appendChild($segundos);
        $segundos.placeholder = 'Ingrese los segundos ';

        const $nuevoEspacio = document.createElement('br');
        document.body.appendChild($nuevoEspacio);
    }

    mostrarBotonCalcular();

    return false;
}

const botonCalcular = document.querySelector('#calcular');
botonCalcular.onclick = function(event){
    const numeroHoras = obtenerHorasClase();
    const numeroMinutos = obtenerMinutosClase();
    const numeroSegundos = obtenerSegundosClase();
    const sumaHoras = sumarHoras(numeroHoras);
    const sumaMinutos = sumarMinutos(numeroMinutos);
    const sumaSegundos = sumarSegundos(numeroSegundos);
    mostrarResultado();
    const tiempoConvertido = convertirTiempo(sumaHoras, sumaMinutos, sumaSegundos);
    resultadoTexto(tiempoConvertido);

    return false
}

function mostrarBotonCalcular(){
    document.querySelector('#calcular').className = ''
}

function mostrarResultado(){
    document.querySelector('#resultado').className = ''
}

function obtenerHorasClase(){
    const $horas = document.querySelectorAll('.horas'); 
    const horaInput = []; 
    for (let i = 0; i<$horas.length ; i++){
        horaInput.push(Number($horas[i].value));
    }
    return horaInput; 
}

function sumarHoras(numeroHoras){
    let totalHoras = 0
    for (let i=0; i < numeroHoras.length ; i++){
        totalHoras = totalHoras + numeroHoras[i]
        }
    return totalHoras
    };

function resultadoTexto(tiempoConvertido){
    document.querySelector('#tiempo-total').textContent = tiempoConvertido;
}

function obtenerMinutosClase(){
    const $minutos = document.querySelectorAll('.minutos');
    const minutosInput = [];
    for (let i = 0; i<$minutos.length; i++){
        minutosInput.push(Number($minutos[i].value));
    }
    return minutosInput;
}

function sumarMinutos(numeroMinutos){
    let totalMinutos = 0;
    for (let i=0; i<numeroMinutos.length; i++){
        totalMinutos = totalMinutos + numeroMinutos[i]
    }
    return totalMinutos;
};

function obtenerSegundosClase(){
    const $segundos = document.querySelectorAll('.segundos');
    const segundosInput = [];
    for (let i=0; i<$segundos.length; i++){
        segundosInput.push(Number($segundos[i].value));
    }
    return segundosInput;
}

function sumarSegundos(numeroSegundos){
    let totalSegundos = 0;
    for (let i=0; i<numeroSegundos.length; i++){
        totalSegundos = totalSegundos + numeroSegundos[i]
    }
    return totalSegundos;
}

function convertirTiempo(sumaHoras, sumaMinutos, sumaSegundos){
    const segundosEnMinutos = Math.floor(sumaSegundos/60);
    const segundosRestantes = sumaSegundos % 60;

    const totalMinutos = sumaMinutos + segundosEnMinutos;
    const minutosEnHoras = Math.floor(totalMinutos/60);
    const minutosRestantes = totalMinutos % 60;

    const conversionTotalHoras = sumaHoras + minutosEnHoras;

    return conversionTotalHoras + ':' + minutosRestantes + ':' + segundosRestantes
}