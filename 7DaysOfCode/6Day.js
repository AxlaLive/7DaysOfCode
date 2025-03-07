// Lista de alimentos 

let listaDeCompras = {
    "Frutas": [],
    "Verduras": [],
    "Lácteos": [],
    "Dulces": [],
    "Otros": []
};

// Enseñar la lista al final 
function listaCompras (){
    let carrito = "Lista de compras:\n\n";
    for (let categoria in listaDeCompras){
        if (listaDeCompras[categoria].length > 0){
            carrito += `${categoria}: ${listaDeCompras[categoria].join(", ")}\n`;
        }
    }
    alert(carrito);
}

// Verifica si hay elementos en la lista 
function hayUnElemento(){
    return Object.values(listaDeCompras).some(categoria => categoria.length > 0);
}

// Elimina un elemento
function eliminarUnAlimento(){
    if (!hayUnElemento()){
        alert("No hay alimentos ingresados en la lista.");
        return;
    }
    listaCompras();
    let alimentoAEliminar = prompt ("Escribe el nombre del alimento a eliminar:").trim();
    let encontrado = false;
    for (let categoria in listaDeCompras) {
        let index = listaDeCompras[categoria].indexOf(alimentoAEliminar);
        if (index !== -1){
            listaDeCompras[categoria].splice(index, 1);
            alert(`"${alimentoAEliminar}" ha sido eliminado de la lista.`);
            encontrado = true;
            break;
        }
    }
    if (!encontrado){
        alert ("¡No fue posible encontrar el elemento en la lista!");
    }
} 

// Bucle para agregar o eliminar alimentos
while (true){
    let alimento = prompt ("¿Qué desea hacer?, (1: Agregar alimento, 2: Eliminar alimento, 3: Salir)").trim();
    if (alimento === "3"){
        listaCompras();
        break;
    } else if (alimento === "1"){
        let canasta = prompt ("Escribe el alimento que quieres agregar a la lista de compras");
        let categoria = prompt ("¿Es que categoria encaja? (Frutas, Verduras, Lácteos, Dulces, Otros)").trim();
        
        categoria = categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase();
        if (listaDeCompras[categoria]){
            listaDeCompras[categoria].push(canasta);
        } else {
            alert("Categoría no reconocida, se agregará a Otros.");
            listaDeCompras["Otros"].push(canasta);
        }
    } else if (alimento === "2") {
        eliminarUnAlimento();
    } else {
        alert("Opción no válida. Escribe 1 para Agregar, 2 para Eliminar o 3 para Salir.");
    }
}