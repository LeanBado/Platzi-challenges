function calcularF(valor){
    return (valor * 1.8) + 32;
}
function calcularK(valor){
    return valor + 273.15;
}


const boton = document.querySelector("#botonCalcular");

boton.addEventListener("click", function(){
    var gradosValue = document.querySelector("#grados").value;

    var temperaturaF = calcularF(gradosValue);
    var temperaturaK = calcularK(Number(gradosValue));

    document.querySelector(".resultadoFaren").value = temperaturaF;
    document.querySelector(".resultadoKel").value = temperaturaK;
})