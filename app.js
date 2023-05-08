//VARIABLES GLOBALES

//Incio de la operacion y bienvenida

function inicio(){
    let nombre = prompt("Ingrese su nombre y apellido")
    let edad = Number( prompt("Indique su edad"))
    if (edad >=18){
        alert (`Bienvenido ${nombre} que operacion desea realizar?`)
        servicio()
        valorFinal()
    }
        else if (edad < 18){
            alert ("Usted no puede ingresar")
        }
}

//SERVICIO A OFRECER

function servicio(){
    let i = 1
    operacion = prompt(`Indique con un numero que desea realizar
    1- Compra
    2- Venta
    3- Permuta
    4- Terminar
    `)
    if (operacion === "1"){
        auto = Number(prompt("Indique valor del auto"))
    }
    else if (operacion === "2"){
        auto = Number(prompt("Indique valor del auto"))
    }
    else if (operacion === "3"){
        auto = Number(prompt("Indique valor del auto"))
    }   else if (operacion !=="1"||"2"||"3"){
        while (i <= 2) {
        operacion = prompt(`Indique con un numero que desea realizar
        1- Compra
        2- Venta
        3- Permuta
        4- Terminar
        `) ; i++; alert("Gracias por su visita")
        }
        }
    }
// VALOR FINAL DE LA OPERACION
function valorFinal(){
    if (operacion === "1"){
        alert("El valor final de su vehiculo es "+ auto * 1.09)   
    } else if (operacion ==="2"){
        alert("La compra de su vehiculo es en "+ auto * 1.15 + " menos los gastos de reparacion")
    }else if (operacion ==="3"){
        alert("El permtua de su vehiculo es en "+ auto * 1.15 + " menos los gastos de reparacion")
    }
}
let auto
let operacion

//Operacion que quiere desarrollar
inicio()




/* ---------------------------------------------------

/* let nombre = "Juan";
let segundoNombre = " Jose"
let apellido = "Borda"
const nombrecompleto = " " + nombre+ segundoNombre + " " + apellido+" "+ miEdad;
console.log(nombrecompleto)

let nombreDelAlumno = prompt("ingrese su nombre");
let apellidoDelAlmno = prompt("ingrese su apellido");
alert(nombreDelAlumno + " " + apellidoDelAlumno); */

/* let estado = prompt("Es culpable?");

if (estado === "si") {
    console.log ("Iras a la carcel")
} else if(estado === "no"){
    console.log("Iras a casa")
}
else(console.log("Documentacion por favor")) */

/* let gusto = prompt("Ingrese el sabor");

if (gusto === "oreo") {
    console.log(precioFinal = "El precio del helado de " + gusto + " es de $1.00")
} else if(gusto === "kitkat"){
    console.log(precioFinal = "El precio del helado de " + gusto + " es de $1.50")
} else if(gusto === "chocolate"){
    console.log(precioFinal = "El precio del helado de " + gusto + " es de $0.75")
} else if(gusto=== "vainilla"){
    console.log(precioFinal = "El precio del helado de " + gusto + " es de $0.95") 
} else(console.log("No tenemos stock")
) */
 




