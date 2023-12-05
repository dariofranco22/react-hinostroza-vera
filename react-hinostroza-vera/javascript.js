/* /* let saldo = 600
if(saldo > 1000){
    console.log("estas ganando bien lokita");
}else if(saldo >= 900){
    console.log("estoy safando con lo que gano");   
}else if(saldo >= 700){
    console.log("vivo con lo justo mano");   
}else {
    console.log("buscate un laburo serio brother");   

} */

// bucle while
/* let i = 0
while(i<10){
    console.log(i);
    i = i + 1;
} */


// bucle for
/* for(i = 0 ; i<=10; i = i + 1){
    console.log(i);
} */


// FUNCIONES
/* function datos(nombre,edad){
    console.log("hola mi nombre es: "+nombre);
    console.log("y mi edad es "+edad);
}
datos("dario",22) */

/* function multiplicacion(numer1,numer2){
    let multiplicador = numer1 * numer2;
    return multiplicador
}
console.log(multiplicacion(2,5)); */


// ARREGLO O ARRAYS
/* nombres = ["juan" , "jose" , "camilo" , "paolo"]
for (let i=0 ; i < 4 ; i++){
    console.log("este es el indice: "+i);
    let name = nombres[i];
  console.log(name);  
} */


// OBJETOS
/* let objeto1 = {
    nombre :"dario",
    edad :22,
    masculino : true
}

let objeto2 = {
    nombre :"daniela",
    edad :27,
    femenino : true
}
console.log(objeto1);
console.log(objeto2); */

const textOperador1 = document.getElementById("operador1")
const textSigno = document.getElementById("signo")
const textOperador2 = document.getElementById("operador2")
const textCalcular = document.getElementById("calcular")
const textResultado = document.getElementById("resultado")

textCalcular.addEventListener('click', calcular)
function calcular(){

const signo = textSigno.value
const op1 = parseFloat(textOperador1.value)
const op2 = parseFloat(textOperador2.value)
if(signo=="+" || signo=="-" || signo=="*" || signo=="/"){
    let resultado
    switch (signo){
        case "+":
            resultado =  op1 +op2
        break;
        case "-":
            resultado =  op1 -op2
        break;
        case "*":
            resultado =  op1 *op2
        break;
        case "/":
            resultado =  op1 /op2
        break;
    }
    textResultado.innerText="= "+ resultado ;
}else{
    textResultado.innerText="calculo imposible";
}

}
