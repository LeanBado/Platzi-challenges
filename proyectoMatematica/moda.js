var lista = [1,1,1,1,4,5,5,9,9,9];
var listaObjeto = {};

lista.map(
    function (elemento){
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
listaObjetoArray

var moda = listaObjetoArray[listaObjetoArray.length - 1];

console.log(moda)