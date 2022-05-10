function calculaPrecioConDescuento(precio,descuento){
    var descuentoPorcentaje = 100 - descuento;
    descuentoPorcentaje
    var precioFinal = (precio * descuentoPorcentaje)/100;
    precioFinal
    return precioFinal;
}

function calculoDescuento(){
    var precioValue = document.querySelector("#precioProducto").value;
    var descuentoValue = document.querySelector("#descuentoProducto").value;
    var selection = document.querySelector("#cuponProducto").value;

        if(descuentoValue == 0){
            var precioFinal = calculaPrecioConDescuento(precioValue, selection);
            document.querySelector("#precioFinalTexto").textContent = precioFinal;
            return;
        }

    var precioFinal = calculaPrecioConDescuento(precioValue, descuentoValue);

    document.querySelector("#precioFinalTexto").textContent = precioFinal;
}

