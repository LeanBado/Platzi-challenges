function calcularEndeudamiento(ingresos, gastos, porcentaje){
    return (ingresos - gastos) * porcentaje;
}

const botonCalculo = document.getElementById("boton");

botonCalculo.addEventListener('click', function(){
    var capacidad = document.getElementById("capacidad").value / 100;
    var ingresos = document.getElementById("mensual").value;
    var gasto = document.getElementById("gastos").value;
    var resultadoEndeudamiento = document.getElementsByClassName("resultado")[0];
    
    if(ingresos == "" || gasto == ""){
        alert("El campo ingresos y gastos no deben quedar vacios")
    }  else {
        var endeudamiento = calcularEndeudamiento(ingresos,gasto,capacidad);
        if(endeudamiento < 0){
            resultadoEndeudamiento.innerText = "$"+ endeudamiento;   
        }else{
            resultadoEndeudamiento.innerText = "$"+ endeudamiento;
        }
    }
});