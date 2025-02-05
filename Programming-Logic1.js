//1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". En caso contrario, muestra "¡Buena semana!".
let diaDeLaSemana = prompt("Puedes indicar qué día de la semana es hoy:");

if (diaDeLaSemana == "Sábado" || diaDeLaSemana == "Domingo"){
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena Semana!");
}

// 2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numeroDelUsuario = prompt("Ingresa un número positivo o negativo:");

if (numeroDelUsuario > 0){
    alert("El número que ingresaste fue positivo");
} else if (numeroDelUsuario < 0){
    alert("El número que ingresaste fue negativo");
} else {
    alert("El número que ingresaste fue cero")
}

// 3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
let puntuacion = 200; //Suponemos que sabemos la puntuación

if (puntuacion >= 100){
    console.log("¡Felicidades, has ganado!");
} else {
    console.log("Intentalo nuevamente para ganar");
}

// 4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let saldoCuenta = 200; //Ejemplo de Saldo

alert(`Tu saldo es de ${saldoCuenta}.`);
