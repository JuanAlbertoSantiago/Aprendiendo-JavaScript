/* “Guess the Number” is a classic and simple game where the objective is to guess a secret number that has been randomly selected by the computer.*/

//Primero declaramos las variables
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;

//A continuación definimos el proceso por el cuál el número secreto será adivinado.
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseIn(prompt("Me indicas un número entre 1 y 10 por favor:"));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //palabraVeces = 'veces';
        intentos++;
        
        if (intentos > maximosIntentos){
            alert (`Llegaste al número máximo de ${maximosIntentos} intentos`)
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}
