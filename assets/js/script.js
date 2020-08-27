var global = 0;

function varGlobal(){
    for (var i = 0; i < 5; i++){
        global = i;
    }
}

varGlobal();
console.log(global);

// LOCAL - es declarado dentro de un bloque de código

function varLocal(){
    var local = "Hola mundo!!";     /* Se declara una variable local */
    console.log(local);
}

varLocal();
/* console.log(local);   /* Nos arroja un error ya que es una variable local */

function varPrueba(){
    var x = 70;
    if(true){
        var x = 50;
        console.log(x);     // Aquí aparece 50
    }

    console.log(x)      // 50
}

function letPrueba(){
    let y = 30;
    if(true){
        let y = 60;
        console.log(y);     // Imprime 60
    }

    console.log(y);     // Imprime 30
}




let sumar = (a,b) => a+b;
console.log(sumar(10, 15));

console.log(sumar(13, 13));

let hola = function(){
    return "Hola, cómo estás?";
}

console.log(hola());

let color = prompt("Ingrese un color en Ingles");

if(color =="red"){
    document.write("<h1 style = 'color:red'> Si el color es red-rojo </h1>");
}
else{
    document.write("<h1 style = 'color " + color + " ' > No el color no es Red, el color escogido fue " + color + "</h1>");
}


/*  = Operador de asignacion
    == Operador de Igualdad
    === Estrictamente igual
    != Diferente o distinto
    !== No identico, hasta el tipo de dato debe ser diferente

    < menor que
    <=  menor o igual que
*/

let year=2020;
if(year != 2020){
    document.write("El año es diferente a 2020");
}
else{
    document.write("Si, el año es 2020");
}

let pais = "peru";

if(pais=="mexico" || pais=="peru"){
    document.write("<br> El pais pertenece a Latino América");
} else{
    document.write("<br> A dónde pertenece ese país?");
}

alert("Vamos a realizar una operacion matematica! ");
var operacion= prompt("Escoge entre: suma, resta, multiplicacion y division.");

let num1 = parseFloat(prompt("Ingrese un número"));
let num2 = parseFloat(prompt("Ingrese el segundo número"));

switch(operacion){
    case "suma": /* Si es igual a suma */
        document.write("<br> El resultado de la suma es: " + (num1 + num2));
        break;

    case "resta":
        document.write("<br> El resultado de la resta es: " + (num1 - num2));
        break;

    case "multiplicacion":
        document.write("<br> El resultado de la multiplicación es: " + (num1 * num2));
        break;

    case "division":
        document.write("<br> El resultado de la división es: " + (num1 / num2));
        break;

    default:
        alert("Error, no es una de las opciones esperadas")
        break;
}