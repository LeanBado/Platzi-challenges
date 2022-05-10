const lista = [1000,800,100,300,200,300];
const mitadLista = parseInt(lista.length / 2);
console.log(mitadLista)
let mediana;

function esPar(nro){
    if(nro % 2 == 0){
        return true;
    } else{
        return false;
    }
}

function calcularPromedioAritmetico(lista){
    let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista += lista[i];
    }
    promedioLista = sumaLista / lista.length;
    return promedioLista;
}

if(esPar(lista.length)){
    var elemento1 = lista[mitadLista -1];
    var elemento2 = lista[mitadLista];
    var promedioElementos = calcularPromedioAritmetico([elemento1, elemento2])

    mediana = promedioElementos;
} 
    else{
    mediana = lista[mitadLista];
    console.log(mediana)
}
console.log(mediana)
console.log(esPar(lista.length))