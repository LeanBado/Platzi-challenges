btnAgregar = document.getElementById("btnAgregar");
btnOrdenar = document.getElementById("btnOrdenar");
btnLimpiar = document.getElementById("btnLimpiar");
listAgregar = document.getElementById("listAgregar");
listOrdenar = document.getElementById("listOrdenar");

let arrayNumeros = [];

function cargarEventos(){
    btnAgregar.addEventListener("click", agregar);
    
    btnOrdenar.addEventListener("click", ordenar);

    btnLimpiar.addEventListener("click", limpiar);
}
cargarEventos();

function agregar(){
    var input = document.getElementById("numeros");
    var numeros = input.value;
    arrayNumeros.push(Number(numeros));
    var html = document.createElement("li");
    html.className = "list-group-item";
    html.innerHTML = `<li>${Number(numeros)}</li>`;
    listAgregar.appendChild(html);
}

function ordenar(){

    let aux = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
      for (let j = 0; j < arrayNumeros.length; j++) {

        if (arrayNumeros[j] > arrayNumeros[j + 1]) {
          aux = arrayNumeros[j];
          arrayNumeros[j] = arrayNumeros[j + 1];
          arrayNumeros[j + 1] = aux;
        }
      }
    }
    for(let i = 0; i < arrayNumeros.length; i++){

        var html = document.createElement("li");
        html.className = "list-group-item";
        html.innerHTML = `<li>${arrayNumeros[i]}</li>`;
        listOrdenar.appendChild(html);
    }
    
}

function limpiar(){
    while(listAgregar.firstChild){
        listAgregar.removeChild(listAgregar.firstChild);
    }

    while(listOrdenar.firstChild){
        listOrdenar.removeChild(listOrdenar.firstChild);
    }

    arrayNumeros = [];
}