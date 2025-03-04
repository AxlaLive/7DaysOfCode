// Adivinar número aleatorio 

const numeroSecreto = Math.floor(Math.random() * 11);
let intentos = 3;

while (intentos > 0){
    let usuarioIntento = parseInt(prompt(`Adivina un número entre 0 y 10. Te quedan ${intentos} intentos:`));
    
    if (usuarioIntento === numeroSecreto){
        alert("¡Felicidades! Adivinaste el número");
        break;
    } else {
        intentos--;
        if (intentos > 0){
            alert("Número incorrecto. Intentalo de nuevo.");
        } else {
            alert(`Se acabaron los intentos. El número secreto era ${numeroSecreto}.`);
        }
    }
}