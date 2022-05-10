let asd = {nombre: "leandro",
     apellido: "Bado",
     edad: 29,
     domicilio: "av. centenario",
     altura: 2427,
     piso: "noveno"}
function cualquier (parametro){
    for( objeto in parametro){
        console.log(parametro[objeto])
    }

}
cualquier(asd);


//Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).