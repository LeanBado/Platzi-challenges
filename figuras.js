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
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return (radio * radio) * PI;
}


function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo(){
    const ladoUno = document.querySelector(".lado1").value;
    const ladoDos = document.querySelector(".lado2").value;
    const base = document.querySelector(".base").value;

    const perimetro = perimetroTriangulo(ladoUno, ladoDos, base);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const base = document.querySelector(".base").value;
    const altura = document.querySelector(".altura").value;

    const area = areaTriangulo(base, altura);
    alert(area);
}
function alturaTrianguloIsosceles(){
    const ladoUno = document.querySelector(".lado1").value;
    const ladoDos = document.querySelector(".lado2").value;
    const base = document.querySelector(".base").value;

    const h = alturaIsosceles(ladoUno, ladoDos, base);
    alert(h);
}

function calcularDiametroCirculo(){
    const radio = document.querySelector("#InputCirculo").value;

    const diametro = diametroCirculo(radio);
    console.log(radio)
    alert(diametro);
}
function calcularAreaCirculo(){
    const radio = document.querySelector("#InputCirculo").value;

    const area = areaCirculo(radio).toFixed(2);
    console.log(area)
    alert(area);
}
function calcularCircunferenciaCirculo(){
    const radio = document.querySelector("#InputCirculo").value;

    const perimetro = perimetroCirculo(radio).toFixed(2);
    console.log(perimetro)
    alert(perimetro);
}
