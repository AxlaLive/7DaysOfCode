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

while (true){
    let alimento = prompt ("¿Quieres agregar un elemento a la lista de compras?, ¿si o no?").toLowerCase();
    if (alimento === "no"){
        listaCompras();
        break;
    }
    if (alimento === "si" || alimento === "si"){
        let canasta = prompt ("Escribe el alimento que quieres agregar a la lista de compras");
        let categoria = prompt ("¿Es que categoria encaja? (Frutas, Verduras, Lácteos, Dulces, Otros)").trim();

        categoria = categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase();

        if (listaDeCompras[categoria]){
            listaDeCompras[categoria].push(canasta);
        } else {
            alert("Categoría no reconocida, se agregará a Otros.");
            listaDeCompras["Otros"].push(canasta);
        }
    } else {
        alert("Por favor, responde si o no");
    }
}