//<!-- function sumarDosNumeros(numero1 +numero2) {
//    let resultado = numero1 +numero2;
//   console.log (resultado); Muestra el resultado.
//} -->

//<!-- sumarDosNumeros(10;20); Llama a la accion. -->
/*
function sumatoria (num1, num2 ) {
   let resultado = num1 + num2;
   console.log(resultado)
}

sumatoria(10,20);

function nombres(){
    console.log ("hola, " + nombres + "como estas?")
}
nombres("lorenzo");

function mtsCuadrados(largo, ancho){
    let mts = largo * ancho;
    console.log(mts + "m2");
}
mtsCuadrados(6,1);
mtsCuadrados(3,5);

function radioCirculo(pi, radio){
    let radio = pi*radio*radio;
    console.log(pi + radio);
}

radioCirculo(3.14,2)*/

var nombreIngresado= prompt ("Ingrese su nombre")

function saludo(nombre)
{
    alert("Bienvenido " + nombre);   
}
var nombreIngresado;

while(nombreIngresado == '')
{
 nombreIngresado = prompt("Ingrese su nombre");
}

saludo(nombreIngresado);
saludo
if(nombreIngresado != ""){
} else {
        alert("No ingreso su nombre")
}

var edad = prompt("Ingrese su edad");

const mayorEdad = 0 ;
if(mayorEdad >= 15) {
    console.log ("Es mayor de edad, puede realizarse un servicio");
} else {
    console.log("Es menor de edad, no puede realizarse ningun servicio");
}
var servicio = prompt ("Es su primera vez en realizarse un servicio")
