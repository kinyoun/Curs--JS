document.querySelector('#enviar-numero-familiares').onclick = function(){
    const $numeroFamiliares = document.querySelector('#numero-familiares');
    const numeroFamiliares = Number($numeroFamiliares.value);
    
    borrarIntegrantes();
    crearIntegrantes(numeroFamiliares);
    if (numeroFamiliares>0){
        mostrarBotonCalcular();
    } else {   
        ocultarBotonCalcular();
        ocultarInstrucciones()
    }

    return false;
}

document.querySelector('#boton-calcular').onclick = function (){
    const edadFamiliares = generarArrayIntegrantes();
    const resultadoMayorEdad = calcularMayor(edadFamiliares);
    const resultadoMenorEdad = calcularMenor(edadFamiliares);
    const resultadoPromedio = calcularPromedio(edadFamiliares);
    mostrarResultado(resultadoMayorEdad, resultadoMenorEdad, resultadoPromedio);
    mostrarBotonResetear();
    mostrarBotonAgregar();
    mostrarBotonQuitar();
    mostrarSiguienteTarea();
    mostrarBotonCalcularSalarios();

    return false;
}

function crearIntegrante(i){
    const $nodoIntegrante = document.createElement('div'); 
    $nodoIntegrante.setAttribute('class', 'integrantes');
   
    const $labelIntegrante = document.createElement('label'); 
    $labelIntegrante.setAttribute('type', 'text'); 
    $labelIntegrante.setAttribute('class', 'label-integrante');
    $labelIntegrante.textContent = 'Integrante n° ' + (i + 1) + ' ';
    $nodoIntegrante.appendChild($labelIntegrante); 

    const $inputIntegrante = document.createElement('input');
    $inputIntegrante.setAttribute('type', 'number');
    $inputIntegrante.setAttribute('placeholder', 'Edad')
    $inputIntegrante.setAttribute('class', 'integrante');
    $nodoIntegrante.appendChild($inputIntegrante);

    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($nodoIntegrante);

    return false;
}

function crearIntegrantes(numeroFamiliares){
    for ( let i=0; i<numeroFamiliares; i++){
        crearIntegrante(i);
    };
}

function mostrarBotonCalcular (){
    document.querySelector('#boton-calcular').className = '';
    document.querySelector('#instruccion').className = '';
}

function generarArrayIntegrantes(){
    const $edadIntegrantes = document.querySelectorAll('.integrante');
    let arrayIntegrantes = [];
    for(let i=0; i<$edadIntegrantes.length; i++){
        if ($edadIntegrantes[i].value === ''){
            continue
        }
        arrayIntegrantes.push(Number($edadIntegrantes[i].value));
    }
    return arrayIntegrantes;
};

function calcularMayor(arrayIntegrantes){
    const mayorEdad = Math.max(...arrayIntegrantes);
    return mayorEdad;
};

function calcularMenor(arrayIntegrantes){
    const menorEdad = Math.min(...arrayIntegrantes);
    return menorEdad;
};

function calcularPromedio(arrayIntegrantes){
    let sumaEdad = 0
    for (let i=0; i<arrayIntegrantes.length; i++){
        sumaEdad = arrayIntegrantes[i] + sumaEdad;
    }
    return sumaEdad / arrayIntegrantes.length;
}

function mostrarResultado(resultadoMayorEdad, resultadoMenorEdad, resultadoPromedio){
    document.querySelector('#resultado').className = '';
    document.querySelector('#mayor-edad').textContent = resultadoMayorEdad;
    document.querySelector('#menor-edad').textContent = resultadoMenorEdad;
    document.querySelector('#promedio-edad').textContent = resultadoPromedio;
}

function mostrarBotonResetear(){
    document.querySelector('#resetear').className = '';
}

document.querySelector('#resetear').onclick = function (){
    borrarIntegrantes();
    ocultarBotonCalcular();
    ocultarInstrucciones();
    ocultarResultado();
    ocultarBotonResetear();

    ocultarBotonAgregar();
    ocultarBotonQuitar();
    ocultarSiguienteTarea();
    ocultarBotonCalcularSalarios();
    reiniciarSalarioAnual();
}

function borrarIntegrantes(){
    const $integrantes = document.querySelectorAll('.integrantes');
    for(let i=0; i<$integrantes.length; i++){
        $integrantes[i].remove();
    }
}

function ocultarBotonCalcular(){
    document.querySelector('#boton-calcular').className = 'oculto';
}

function ocultarInstrucciones(){
    document.querySelector('#instruccion').className = 'oculto';
}

function ocultarResultado(){
    document.querySelector('#resultado').className = 'oculto';
}

function ocultarBotonResetear(){
    document.querySelector('#resetear').className = 'oculto';
}

function mostrarBotonAgregar(){
    document.querySelector('#agregar').className = '';
}

function mostrarBotonQuitar(){
    document.querySelector('#quitar').className = '';
}

function mostrarSiguienteTarea(){
    document.querySelector('#siguiente-tarea').className = '';
}

function mostrarBotonCalcularSalarios(){
    document.querySelector('#calcular-salario').className = '';
}

document.querySelector('#agregar').onclick = function(){
    agregarSalarioAnual();

    return false;
}

document.querySelector('#quitar').onclick = function(){
    quitarSalarioAnual();

    return false;
}

function agregarSalarioAnual(i){
    const $nodoSalario = document.createElement('div');
    $nodoSalario.setAttribute('class', 'salario');

    const $labelSalario = document.createElement('label');
    $labelSalario.setAttribute('type', 'text');
    $labelSalario.setAttribute('class','label-salario');
    $labelSalario.textContent = 'Salario anual del integrante.';

    const $inputSalario = document.createElement('input');
    $inputSalario.setAttribute('type', 'number');
    $inputSalario.setAttribute('class', 'input-salario');

    $nodoSalario.appendChild($labelSalario);
    $nodoSalario.appendChild($inputSalario);

    const $divSalario = document.querySelector('#salarios');
    $divSalario.appendChild($nodoSalario);
    
    return false;
}

function quitarSalarioAnual(){
    const $salarioAnualIntegrante = document.querySelector('.salario');
    $salarioAnualIntegrante.remove();
}

document.querySelector('#calcular-salario').onclick = function (){
    const arraySalarios = generarArraySalario();
    const mayorSalario = calcularMayorSalario(arraySalarios);
    const menorSalario = calcularMenorSalario(arraySalarios);
    const salarioAnualPromedio = calcularSalarioAnualPromedio(arraySalarios);
    const salarioMensualPromedio = calcularSalarioMensualPromedio(salarioAnualPromedio);
    mostrarResultadoSalario(mayorSalario, menorSalario, salarioAnualPromedio, salarioMensualPromedio);

    return false;
}

function mostrarResultadoSalario(mayorSalario, menorSalario, salarioAnualPromedio, salarioMensualPromedio){
    document.querySelector('#resultado-salario').className = '';
    document.querySelector('#mayor-salario').textContent = mayorSalario;
    document.querySelector('#menor-salario').textContent = menorSalario;
    document.querySelector('#anual-promedio').textContent = salarioAnualPromedio;
    document.querySelector('#mensual-promedio').textContent = salarioMensualPromedio;

    return false;
}

function generarArraySalario(){
    let arraySalario = [];
    let $inputSalario = document.querySelectorAll('.input-salario');
    for (let i=0; i<$inputSalario.length; i++){
        if ($inputSalario[i].value === ''){
            continue}
        arraySalario.push(Number($inputSalario[i].value));
    }
    return arraySalario;
}

function calcularMayorSalario(arraySalarios){
    const mayorSalario = Math.max(...arraySalarios);
    return mayorSalario;
}

function calcularMenorSalario(arraySalarios){
    const menorSalario = Math.min(...arraySalarios);
    return menorSalario;
}

function calcularSalarioAnualPromedio(arraySalarios){
    let sumaSalarios = 0;
    let salarioAnualPromedio;
    for (let i=0; i<arraySalarios.length; i++){
        sumaSalarios = sumaSalarios+arraySalarios[i];
    }
    return salarioAnualPromedio = sumaSalarios / arraySalarios.length;
}

function calcularSalarioMensualPromedio(salarioAnualPromedio){
    const mesesEnUnAnio = 12;
    let salarioMensualPromedio = 0;
    return salarioMensualPromedio = salarioAnualPromedio / mesesEnUnAnio;
}

function ocultarBotonAgregar(){
    document.querySelector('#agregar').className = 'oculto';
}

function ocultarBotonQuitar(){
    document.querySelector('#quitar').className = 'oculto';
}

function ocultarSiguienteTarea(){
    document.querySelector('#siguiente-tarea').className = 'oculto';
}

function ocultarBotonCalcularSalarios(){
    document.querySelector('#calcular-salario').className = 'oculto';
}

function reiniciarSalarioAnual(){
    const $salarioAnualIntegrantes = document.querySelectorAll('.salario');
    for (let i=0; i<$salarioAnualIntegrantes.length; i++){
        $salarioAnualIntegrantes[i].remove();
    }
}

