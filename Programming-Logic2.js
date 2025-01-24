//1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

//Declaramos una variable que nos ayude con el conteno
let contador = 1;

//Generamos el contador
while (contador <= 10) {
  console.log (contador);
  contador = contador + 1;
}

//2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

//Declaramos la variable que nos ayudara con el conteo
let conteo = 10;

//Generamos el contador inverso
while (conteo >= 0){
    console.log(conteo);
    conteo = conteo - 1;
}

//3. Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

//Pedimos el número al usuario
let numeroMaximo = prompt("Colca un número para comenzar la cuenta regresiva:");

//Creamos el bule
while (numeroMaximo >= 0){
    console.log(numeroMaximo);
    numeroMaximo = numeroMaximo - 1
}

// 4. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

//Solicitamos el número de la cuenta progresiva al usuario
let numeroLimiteSuperior = prompt("Introduce el número de la cuenta progresiva:");
let contadorProgresivo = 0;

//Creamos el bucle
while (contadorProgresivo <= numeroLimiteSuperior){
    console.log(contadorProgresivo);
    contadorProgresivo ++
}
