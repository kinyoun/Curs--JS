//TAREA1
// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola


const anioActual = Number(prompt('Por favor, ingrese el año actual. '));
const anioNacimiento = Number(prompt('Por favor, ingrese su año de nacimiento. '));

function calcularEdadUsuario (anioActual, anioNacimiento){
    return anioActual-anioNacimiento;
}
console.log('Tenes' + calcularEdadUsuario(anioActual, anioNacimiento) + 'años. ');


// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.
const mesesEnUnAnio = 12
const semanasEnUnMes = 4
const diasHabilesEnUnMes = 21 //aproximado
const horasEnUnMes = 168
const salarioAnualUsuario = Number(prompt('Por favor, ingrese su salario anual. '));

function calcularSalarioMensual (salarioAnualUsuario, mesesEnUnAnio){
    return salarioAnualUsuario / mesesEnUnAnio;
}
const calculoSalarioMensual = calcularSalarioMensual(salarioAnualUsuario, mesesEnUnAnio)
console.log('Tu salario mensual es de ' + calculoSalarioMensual);

const salarioMensualUsuario = Number(prompt('Por favor, ingrese su salario mensual. '));

function calcularSalarioAnual (salarioMensualUsuario, mesesEnUnAnio){
    return salarioMensualUsuario * mesesEnUnAnio;
}
const calculoSalarioAnual = calcularSalarioAnual(salarioMensualUsuario, mesesEnUnAnio);
console.log('Tu salario anual es de ' + calculoSalarioAnual + ' pesos');

function calcularSalarioSemanal (salarioMensualUsuario, semanasEnUnMes){
    return salarioMensualUsuario / semanasEnUnMes;
}
const calculoSalarioSemanal = calcularSalarioSemanal(salarioMensualUsuario, semanasEnUnMes);
console.log('Tu salario semanal aproximado es de ' + calculoSalarioSemanal + ' pesos');

function calcularSalarioDiario (salarioMensualUsuario, diasHabilesEnUnMes){
    return salarioMensualUsuario / diasHabilesEnUnMes;
}
const calculoSalarioDiario = calcularSalarioDiario(salarioMensualUsuario, diasHabilesEnUnMes);
console.log('Tu salario diario aproximado es de ' + calculoSalarioDiario + ' pesos');

function calcularSalarioPorHora (salarioMensualUsuario, horasEnUnMes){
    return salarioMensualUsuario / horasEnUnMes;
}
const calculoSalarioPorHora = calcularSalarioPorHora (salarioMensualUsuario,horasEnUnMes);
console.log('Tu salario por hora aproximado es de ' + calculoSalarioPorHora + ' pesos');
