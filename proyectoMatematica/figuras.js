// Código del cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}
function areaCuadrado(lado) {
  return lado * lado;
}

// Código del triángulo
function perimetroTriangulo(lado1, lado2, base) {
    var a = Number(lado1);
    var b = Number(lado2);
    var c = Number(base);
    return  a+b+c;
}

function areaTriangulo(base, altura) {
    var c = Number(base);
    var d = Number(altura);
  return (base * altura) / 2;
}

function alturaIsosceles(lado1, lado2, base){
    var a = Number(lado1);
    var b = Number(lado2);
    var c = Number(base);
    if(a == b){
        if(a != c){
            var altura = Math.sqrt((a*a)-((c*c)/4));
            altura.toFixed(1);
        } else{
            alert("los lados no son distintos a la altura, no es un triangulo isosceles");
        }
    } else {
        alert("lado 1 y lado 2 no son iguales, no es triangulo isosceles")
    }
}
// Código del círculo

function diametroCirculo(radio) {
  return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
  var diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return (radio * radio) * PI;
}


function calcularPerimetroCuadrado() {
  var input = document.getElementById("InputCuadrado");
  var value = input.value;

  var perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  var input = document.getElementById("InputCuadrado");
  var value = input.value;

  var area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo(){
    var ladoUno = document.querySelector(".lado1").value;
    var ladoDos = document.querySelector(".lado2").value;
    var base = document.querySelector(".base").value;

    var perimetro = perimetroTriangulo(ladoUno, ladoDos, base);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    var base = document.querySelector(".base").value;
    var altura = document.querySelector(".altura").value;

    var area = areaTriangulo(base, altura);
    alert(area);
}
function alturaTrianguloIsosceles(){
    var ladoUno = document.querySelector(".lado1").value;
    var ladoDos = document.querySelector(".lado2").value;
    var base = document.querySelector(".base").value;

    var h = alturaIsosceles(ladoUno, ladoDos, base);
    alert(h);
}

function calcularDiametroCirculo(){
    var radio = document.querySelector("#InputCirculo").value;

    var diametro = diametroCirculo(radio);
    console.log(radio)
    alert(diametro);
}
function calcularAreaCirculo(){
    var radio = document.querySelector("#InputCirculo").value;

    var area = areaCirculo(radio).toFixed(2);
    console.log(area)
    alert(area);
}
function calcularCircunferenciaCirculo(){
    var radio = document.querySelector("#InputCirculo").value;

    var perimetro = perimetroCirculo(radio).toFixed(2);
    console.log(perimetro)
    alert(perimetro);
}
