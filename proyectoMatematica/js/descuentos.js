function calculaPrecioConDescuento(precio,descuento){
    var descuentoPorcentaje = 100 - descuento;
    descuentoPorcentaje
    var precioFinal = (precio * descuentoPorcentaje)/100;
    return precioFinal;
}
//boton calcular
var botonCalcular = document.querySelector("#botonCalcular");
botonCalcular.addEventListener("click", function(){
    var precioValue = document.querySelector("#precio").value;
    var descuentoValue = document.querySelector ("#descuento").value;
    var selectionValue = document.querySelector("#cuponProducto").value;
    if (precioValue == ""){
        alert("Digite el precio del producto");
      }else {
        if(descuentoValue == 0){
            var precioFinal = calculaPrecioConDescuento(precioValue, selectionValue);
            document.querySelector("#resultado").textContent = precioFinal;
            return;
        }

        var precioFinal = calculaPrecioConDescuento(precioValue, descuentoValue);
        document.querySelector("#resultado").textContent = precioFinal;
    }
})