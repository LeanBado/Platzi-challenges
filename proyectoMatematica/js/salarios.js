const argentina = [];
argentina.push({
  name: "Camila",
  salary: 500,
});
argentina.push({
  name: "Nath",
  salary: 1500,
});
argentina.push({
  name: "Luisa",
  salary: 1800,
});
argentina.push({
  name: "Laura",
  salary: 1000,
});
argentina.push({
  name: "Daniela",
  salary: 2200,
});
argentina.push({
  name: "Esperancita",
  salary: 200,
});
argentina.push({
  name: "Carla",
  salary: 500,
});
argentina.push({
  name: "Antonieta",
  salary: 1500,
});
argentina.push({
  name: "Alicia",
  salary: 1300,
});
argentina.push({
  name: "Ana",
  salary: 2400,
});
argentina.push({
  name: "Julia",
  salary: 3400,
});
argentina.push({
  name: "Rosa",
  salary: 400,
});
argentina.push({
  name: "Angélica",
  salary: 400,
});
argentina.push({
  name: "Tatiana",
  salary: 400,
});
argentina.push({
  name: "Lorena",
  salary: 600,
});
argentina.push({
  name: "Carolina",
  salary: 1600,
});
argentina.push({
  name: "Fernanda",
  salary: 2600,
});
argentina.push({
  name: "Nora",
  salary: 1000,
});
argentina.push({
  name: "Gisselle",
  salary: 2000,
});
argentina.push({
  name: "Bill Gates",
  salary: 100000000,
});

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


const salariosArg = argentina.map(function(sueldo){
    return sueldo.salary
});


const salariosOrdenados = salariosArg.sort(function(salarioA, salarioB){
    return salarioA - salarioB;
})


function medianaSalarios(lista){
    const mitadLista = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        var elemento1 = lista[mitadLista -1];
        var elemento2 = lista[mitadLista];

        var promedioElementos = calcularPromedioAritmetico([elemento1, elemento2])

        return mediana = promedioElementos;

    } 
        else{
        return mediana = lista[mitadLista];
    }
}

//mediana del top 10% salarios
const corte = (salariosOrdenados.length *90) /100;
const contador = salariosOrdenados.length - corte
const salariosTop10 = salariosOrdenados.splice(corte, contador);

const medianaSalarioTop10 = medianaSalarios(salariosTop10);