const lista = [100,200,300,400,500,600,700,800,900,1000];

function calcularPromedioAritmetico(lista){
    let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista += lista[i];
    }
    promedioLista = sumaLista / lista.length;
    return promedioLista;
}

console.log(calcularPromedioAritmetico(lista))