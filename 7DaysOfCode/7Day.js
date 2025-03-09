// Funciones para cada operación
function sumar(a, b){
    return a + b;
}
function restar(a, b){
    return a - b;
}
function multiplicar(a, b){
    return a * b;
}
function dividir(a, b){
    if (b === 0){
        return "No se puede divir entre 0"
    }
    return a / b;
}

// Bucle para calcular 
while (true){
    let opciones = prompt(
        "Elige una operación:\n" +
        "1: Sumar\n" +
        "2: Restar\n" +
        "3: Multiplicar\n" +
        "4: Dividir\n" +
        "5: Salir"
    );
    if (opciones === "5"){
        alert("Hasta la próxima");
        break;
    }
    // Solcicita numeros al usuario
    let numero1 = parseFloat(prompt("Ingresa el primer número:"));
    let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

    // Verificar si son númmeros 
    if (isNaN(numero1) || isNaN(numero2)){
        alert("Debes ingresar números válidos");
        continue;
    }
    let resultado;
    switch (opciones){
        case "1":
            resultado = sumar(numero1, numero2);
            alert(`Resultado: ${numero1} + ${numero2} = ${resultado}`);
            break;
        case "2":
            resultado = restar(numero1, numero2);
            alert(`Resultado: ${numero1} - ${numero2} = ${resultado}`);
            break;
        case "3":
            resultado = multiplicar(numero1, numero2);
            alert(`Resultado: ${numero1} * ${numero2} = ${resultado}`);
            break;
        case "4":
            resultado = dividir(numero1, numero2);
            alert(`Resultado: ${numero1} / ${numero2} = ${resultado}`);
            break;
        default:
            alert("Opción inválida, intenta de nuevo.");
    }
}