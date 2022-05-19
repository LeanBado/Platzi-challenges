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
            var altura = Math.sqrt((a*a)-((c*c)/4)).toFixed(1);
        } else{
            alert("los lados no son distintos a la altura, no es un triangulo isosceles");
        }
    } else {
        alert("lado 1 y lado 2 no son iguales, no es triangulo isosceles")
    }
    return altura
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

//interaccion con HTML
const botonCuadrado = document.querySelector("#botonCuadrado");
const botonTriangulo = document.querySelector("#botonTriangulo");
const botonTrianguloIsosceles = document.querySelector("#botonTrianguloIsosceles");
const botonCirculo = document.querySelector("#botonCirculo");

//calculo del cuadrado
botonCuadrado.addEventListener("click", function(evento){
  evento.preventDefault();

  var input = document.querySelector("#cuadrado");
  var value = input.value;

  if (value == ""){
    alert("El valor del lado del cuadrado no puede quedar vacio");
  }else{
  var area = areaCuadrado(value);
  var perimetro = perimetroCuadrado(value);
  document.querySelector(".resultadoAreaCuadrado").value = area
  document.querySelector(".resultadoPerimetroCuadrado").value = perimetro
}
})

//calculo triangulo
botonTriangulo.addEventListener("click", function(evento){
  evento.preventDefault();

  var ladoUno = document.querySelector("#trianguloLado1").value;
  var ladoDos = document.querySelector("#trianguloLado2").value;
  var base = document.querySelector("#trianguloBase").value;
  var altura = document.querySelector("#trianguloAltura").value;

  if (ladoUno == "" || ladoDos == "" || base == "" || altura == ""){
    alert("Los valores no pueden quedar vacios");
  }else{
    var area = areaTriangulo(base, altura);
    var perimetro = perimetroTriangulo(ladoUno, ladoDos, base);
    document.querySelector(".resultadoAreaTriangulo").value = area
    document.querySelector(".resultadoPerimetroTriangulo").value = perimetro
  }
})
botonTrianguloIsosceles.addEventListener("click", function(evento){
  evento.preventDefault();

  var ladoUno = document.querySelector("#trianguloLado1").value;
  var ladoDos = document.querySelector("#trianguloLado2").value;
  var base = document.querySelector("#trianguloBase").value;
  
  if (ladoUno == "" || ladoDos == "" || base == ""){
    alert("Los valores no pueden quedar vacios");
  }else{
    var h = alturaIsosceles(parseFloat(ladoUno), parseFloat(ladoDos), parseFloat(base));
    document.querySelector(".resultadoTrianguloIsosceles").value = h;
  }
})

//calculo circulo
botonCirculo.addEventListener("click", function(evento){
  evento.preventDefault();
  var radio = document.querySelector("#circuloRadio").value;
  if (radio == ""){
    alert("El radio no puede quedar vacio");
  }else{
    var diametro = diametroCirculo(radio);
    var area = areaCirculo(radio).toFixed(2);
    var perimetro = perimetroCirculo(radio).toFixed(2);

    document.querySelector(".resultadoDiametro").value = diametro;
    document.querySelector(".resultadoCircunferencia").value = perimetro;
    document.querySelector(".resultadoAreaCirculo").value = area;
  }
})