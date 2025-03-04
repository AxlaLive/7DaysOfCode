// Eligiendo Front-End o Back-End
let area = prompt ("¿Quieres seguir hacia el área de Front-End o seguir hacia el área de Back-End?");

while (area !== "Front-End" & area !== "Back-End"){
    alert("Opcion no válida. Por favor, ingresa ´Front-End´ o ´Back-End´");
    area = prompt ("¿Quieres seguir hacia el área de Front-End o seguir hacia el área de Back-End?");
}

let tecnologia;
if (area === "Front-End"){
    tecnologia = prompt ("¿Quieres aprender React o aprender Vue?");
    while (tecnologia !== "React" & tecnologia !== "Vue"){
        alert("Opción no válida. Escribe ´React´o ´Vue´");
        tecnologia = prompt ("¿Quieres aprender React o aprender Vue?");
        alert(`¡Genial! ${tecnologia} es una gran tecnología`);
    }
} else if (area === "Back-End"){
    tecnologia = prompt ("¿Quieres aprender C# o Java?");
    while (tecnologia !== "C#" & tecnologia !=="Java"){
        alert("Opción no válida. Escribe ´C#´o ´Java´");
        tecnologia = prompt ("¿Quieres aprender C# o Java?");
        alert(`¡Excelente! ${tecnologia} es una muy buena tecnología`);
    }
}

// Eligiendo Especialización o Fullstack
let camino = prompt ("¿Quieres seguir la ´especialización´ en esta área o desarrollarse para convertirse en ´Fullstack´?");

while (camino !== "especialización" & camino !== "Fullstack"){
    alert ("Opción no valida. Ingresa por favor, ´especialización´ o ´Fullstack´");
    camino = prompt ("¿Quieres seguir la ´especialización´ en esta área o desarrollarse para convertirse en ´Fullstack´?");
} if (camino === "especialización"){
    alert ("Sigue esta especialización, es muy interesante su aplicación");
} else if (camino === "Fullstack"){
    alert ("Perfecto, serás ampliamente aplicable laboralmente");
}

// Otras tecnologias que le interesen 
let nuevaTecnologia = [];
let otraTecnologia = prompt ("¿Qué tecnología te gustaría aprender o especializarte?");

while (otraTecnologia !== "No"){
    nuevaTecnologia.push(otraTecnologia);
    alert(`¡Genial! ${otraTecnologia} es una gran tecnologia para continuar los estudios`);
    otraTecnologia = prompt ("¿Hay otra tecnología que te gustaría aprender?, si no quieres ingresar mas datos escribe ´No´ para salir");
}

// Lista de tecnologías a aprender 
if (nuevaTecnologia.length > 0){
    alert(`¡Excelente! Estas son las tecnoogías que te gustarian aprender: ${nuevaTecnologia.join(", ")}.`);
}
alert ("¡Gracias por participar en esta aventura!");
