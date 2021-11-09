//Salario mensual
const $botonCalcular = document.querySelector('#boton-calcular-salario-mensual');
const mesesEnUnAnio = 12;


$botonCalcular.onclick = function calcularSalarioMensual(){
  const $salarioAnual = Number(document.querySelector('#salario-anual').value);
  const $salarioMensual = document.querySelector('#salario-mensual');
   $salarioMensual.value = $salarioAnual / mesesEnUnAnio;
   return false;
}

//Saludo

const $botonEnviar = document.querySelector('#boton-enviar');
$botonEnviar.onclick = function enviarDatos(){
  const $parrafo = document.querySelector('#parrafo-bienvenida');
  const $nombreUsuario = document.querySelector('#nombre-usuario').value;
  const $segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario').value;
  const $apellidoUsuario = document.querySelector('#apellido-usuario').value;
  const $edadUsuario = Number(document.querySelector('#edad-usuario').value);
  $parrafo.innerText = `Tu nombre es ${$nombreUsuario} ${$segundoNombreUsuario} ${$apellidoUsuario} y tu edad es de ${$edadUsuario} años`;
  let saludo = document.querySelector('h1');
  saludo.textContent = `Bienvenido ${$nombreUsuario} !`;
  return false;
}





