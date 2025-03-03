// Solicitamos información 
let nombre = prompt ("¿Cuál es tu nombre?");
let edad = prompt ("¿Cuántos años tienes?");
let lenguaje = prompt ("¿Qué lenguaje de programación estás estudiando?");

// Enseñamos el mensaje al usuario 
alert (`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}.`);

// Preguntar si le gusta lo que está aprendiendo 
let pregunta = prompt (`¿Te gusta estudiar ${lenguaje}? Responde 1 para SÍ o 2 para NO.`);
pregunta = Number(pregunta);

// Respuesta del usuario 
if (pregunta === 1){
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else if (pregunta === 2){
    // Respuesta del usuario si dice que NO le gusta el lenguaje
    let preguntaDos = prompt("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?, Por favor, ingresa 1 para SÍ o 2 para NO.");
    preguntaDos = Number(preguntaDos);

    if (preguntaDos === 1){
        alert("Me agrada saber que estuviste intentando estudiar otros lenguajes.");
    } else if (preguntaDos === 2){
        let otroLenguaje = prompt("¿Qué otro lenguaje te gustaría aprender?");
        alert(`¡Que buena elección! Tal vez ${otroLenguaje} sea el lenguaje ideal para ti.`);
    }
} 