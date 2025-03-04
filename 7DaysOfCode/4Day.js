// Adivinar número fijo

const numeroSecreto = 5;
let intentos = 3;
while (intentos > 0){
    let usuarioIntento = parseInt(prompt(`Adivina un número entre 0 y 10. Te quedan ${intentos} intentos:`));
    if (usuarioIntento === numeroSecreto){
        alert("¡Felicitaciones! Acertaste.");
        break;
    } else {
        intentos--;
        if (intentos > 0){
            alert("Número incorrecto. Inténtalo de nuevo.");
        } else {
            alert (`Se acabaron los intentos. El número secreto era ${numeroSecreto}.`);
        }
    }
}