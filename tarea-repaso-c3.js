// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.

// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const nombreUsuario = prompt('Ingrese su nombre. ');

if (nombreUsuario.toLowerCase() === 'camila'){
    console.log(`Hola, Tocayo! Yo también me llamo ${nombreUsuario}!`)
}
else if (nombreUsuario.toLowerCase() === 'suri'){
    console.log(`Hola ${nombreUsuario}, te llamás igual que mi gata.`)
} else if (nombreUsuario.trim().length === 0){
    console.log('No ingresaste ningún nombre. ')
}
else {
    console.log(`Hola ${nombreUsuario}!`)
}

//las constantes que definen ustedes, que directamente en el código esta definido el valor intenten ponerlas con mayúsculas


//tarea 2
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const edadUsuario = Number(prompt('Ingrese su edad. '));
if (edadUsuario === 26){
    console.log('Ey, yo también tengo 26!')
} else if (edadUsuario > 26){
    console.log('Sos más viejo que yo. ')
} else if (edadUsuario === 0){
    console.log('No ingresó ningún valor. ')
} else if (edadUsuario < 26){
    console.log('Sos más joven que yo. ')
} else {console.log('No entiendo.')}

//tarea 3
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.


const poseerDocumento = prompt('¿Tenes documento? ');
if (poseerDocumento.toLowerCase() === 'si'){ 
    const edadUsuario = Number(prompt('Cuál es tu edad? '));
    if (edadUsuario >= 18){
        console.log('Podes ingresar al bar');
    } else if (edadUsuario <18){
        console.log('No podes ingresar al bar');
    } else {console.log('No entendí la respuesta')}
} else if (poseerDocumento.toLowerCase() === 'no'){
    console.log('No podes ingresar al bar')
} else {console.log('No entendí la respuesta')}
