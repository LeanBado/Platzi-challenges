function calcularPromedioAritmetico(lista){
    let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista += lista[i];
    }
    promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(nro){
    if(nro % 2 == 0){
        return true;
    } else{
        return false;
    }
}


const botonCalcular = document.querySelector("#button");

botonCalcular.addEventListener("click", function(){
    var sueldosValue = document.querySelector("#listaNumeros").value;
    var sueldosArray = sueldosValue.split(",");
    var arrayNumber = sueldosArray.map(Number); //ACA ESTÁ EL ARRAY CON TODOS LOS NÚMEROS

    //promedio:
    var promedio = calcularPromedioAritmetico(arrayNumber);
    document.querySelector(".resultadoPromedio").textContent = promedio;
   
    //Mediana:
    var mitadLista = parseInt(arrayNumber.length / 2);
    var mediana;
    if(esPar(arrayNumber.length)){
        var elemento1 = arrayNumber[mitadLista -1];
        var elemento2 = arrayNumber[mitadLista];
        var promedioElementos = calcularPromedioAritmetico([elemento1, elemento2]);
    
        document.querySelector(".resultadoMediana").textContent = promedioElementos;
    } else{
        document.querySelector(".resultadoMediana").textContent = arrayNumber[mitadLista];
    }

    //Moda:
    var listaObjeto = {};
    arrayNumber.map(function (elemento){
            if(listaObjeto[elemento]){
                listaObjeto[elemento] += 1;
            } else{
                listaObjeto[elemento] = 1;
            }
        }
    )
    var listaObjetoArray = Object.entries(listaObjeto).sort(function (elementoA, elementoB){
        return elementoA[1] - elementoB[1];
     });
     document.querySelector(".resultadoModa").textContent = `${listaObjetoArray[listaObjetoArray.length - 1]} repeticiones`;
})
