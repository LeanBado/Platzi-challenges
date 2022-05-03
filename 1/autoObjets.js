var autos = [];
function auto(_marca, _modelo, _año){
    this.marca = _marca;
    this.modelo = _modelo;
    this.año = _año;
}
for(var i= 0; i< 30; i++){
    var marca = prompt("Ingrese la marca del auto");
    var modelo = prompt("Ingrese el modelo del auto");
    var año = prompt("Ingrese el año del auto en número");
    autos.push(new auto(marca, modelo, año));
}
for (var i = 0; i< autos.length; i++){
    console.log(autos[i]);
}