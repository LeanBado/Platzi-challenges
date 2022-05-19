// Función para calcular la tasa de interés. Acá va en base al porcentaje
function calculoTasaInteres(interesRate) {
    const operacion = Math.pow(1 + (interesRate / 100), 1 / 12) - 1;
    return operacion;
}
// Función para calcular la cuota mensual: Interes/
function calculoPlazos(cantidadCompra, cuotas, tasaInteresMes) {
    const num = Math.pow(1 + tasaInteresMes, cuotas) * tasaInteresMes * cantidadCompra;
    const den = Math.pow(1 + tasaInteresMes, cuotas) - 1;
    return num / den;
}

// Función completa para calcular los resultados
function calculate() {

    const cantidadCompra = Number(document.getElementById('valorPrestamo').value);
    const interesRate = Number(document.getElementById('interes').value);
    const cuotas = Number(document.getElementById('meses').value);
    const cuotasVal = Number.isInteger(cuotas)


    const tasaInteresMes = calculoTasaInteres(interesRate);
    const cantidadCuotas = calculoPlazos(cantidadCompra, cuotas, tasaInteresMes);


    if(cantidadCompra <=0 || interesRate<=0 || cuotas<=0){

        const textCond = document.getElementById('texto-condicional');
        textCond.innerHTML = `Los campos no pueden estar vacios y deben ser valores positivos`;

        const textCuota = document.getElementById('texto-mensual');
        textCuota.innerHTML = ``;
        const resultCuota = document.getElementById('resultado-mensual');
        resultCuota.innerHTML = ``;

        const textInteres = document.getElementById('texto-interes');
        textInteres.innerHTML = ``;
        const resultInteres = document.getElementById('resultado-interes');
        resultInteres.innerHTML = ``;

        const textTotal = document.getElementById('texto-total');
        textTotal.innerHTML = ``;
        const resultTotal = document.getElementById('resultado-total');
        resultTotal.innerHTML = ``;
    }
    else if(cuotasVal==0){

        const textCond = document.getElementById('texto-condicional');
        textCond.innerHTML = `El campo de los meses debe ser un número mayor a 0`;

        const textCuota = document.getElementById('texto-mensual');
        textCuota.innerHTML = ``;
        const resultCuota = document.getElementById('resultado-mensual');
        resultCuota.innerHTML = ``;

        const textInteres = document.getElementById('texto-interes');
        textInteres.innerHTML = ``;
        const resultInteres = document.getElementById('resultado-interes');
        resultInteres.innerHTML = ``;

        const textTotal = document.getElementById('texto-total');
        textTotal.innerHTML = ``;
        const resultTotal = document.getElementById('resultado-total');
        resultTotal.innerHTML = ``;
    }
    else{
        // Imprime la Cuota Mensual
        const textCond = document.getElementById('texto-condicional');
        textCond.innerHTML = `RESULTADOS:`;
        const textCuota = document.getElementById('texto-mensual');
        textCuota.innerHTML = `Cuota`;
        const resultCuota = document.getElementById('resultado-mensual');
        resultCuota.innerHTML = `$${(cantidadCuotas).toFixed(2)*1}`;

        // Imprime los Intereses
        const textInteres = document.getElementById('texto-interes');
        textInteres.innerHTML = `Interés`;
        const resultInteres = document.getElementById('resultado-interes');
        resultInteres.innerHTML = `$${((cantidadCuotas)*cuotas-cantidadCompra).toFixed(2)}`;

        // Imprime el Total a Pagar
        const textTotal = document.getElementById('texto-total');
        textTotal.innerHTML = `Total`;
        const resultTotal = document.getElementById('resultado-total');
        resultTotal.innerHTML = `$${(cantidadCuotas).toFixed(2)*cuotas}`;
    }
}