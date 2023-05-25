

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
//---------------------SERVICIOS A OFRECER---------------------

function servicio(){
    let i = 1
    operacion = prompt(`Indique con un numero que desea realizar
    1- Compra
    2- Venta/permuta
    3- Ver stock
    4- Terminar
    `)
    if (operacion === "1"){
        compra()
    }
        else if (operacion === "2"){
            ventaPermuta()
        }
            else if (operacion === "3"){
                stock()
            }
                else if (operacion === "4"){
                    alert("Gracias por su visita")
                }
                else if (operacion !=="1"||"2"||"3"){
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

//-------------------OPERACION COMPRA-------------------

function compra(){
    tipo = prompt(`Indique con un numero que desea realizar
        1- particular
        2- familiar
        3- utilitario
        4- volver al menu principal
        `)
        if (tipo === "1"){
            particular.forEach((car) => {
                alert(`${car.modelo} ${car.version} $${car.precio}`)
            })
        }
            else if (tipo === "2"){
                familiar.forEach((car,o)=>{
                    alert(` ${o}: ${car.modelo} ${car.version} $${car.precio}`)
                })
            }
                else if (tipo === "3"){
                    utilitario.forEach((car,o)=>{
                        alert(` ${o}: ${car.modelo} ${car.version} $${car.precio}`)
                    })
                }
                else if(tipo === "4"){
                    servicio()
                }
}

//------------------OPERACION VENTA/PERMUTA-------------------

class Producto {
    auto(modelo,version,precio){
        this.marca = marca
        this.version = version
        this.fecha = fecha
        this.precio = precio
}
}
function ventaPermuta(){
    let marca = prompt("Ingrese marca");
    let version = prompt("Ingrese version");
    let fecha = prompt("Ingrese año");
    let precio = Number( prompt("Ingrese valor pretendido"));
    const nuevaPermuta = new Producto (marca,version,fecha,precio);
    arrayPermuta.push(nuevaPermuta);
    alert(`Ingresado al stock`)
    let valorToma = precio - (precio * 15 / 100) 
    alert(`El valor de toma de su unidad es de $${valorToma}`)
}


//------------------Stock---------------------
function stock(){
    particular.forEach((car) => {//PARA AGREGAR INDICE (car,o) O PUEDO PONER SOLO (CAR) PARA MOSTRAR OBJETO
        console.log(`${car.modelo} ${car.version} $${car.precio}`)
    })
    familiar.forEach((car)=>{//PARA AGREGAR INDICE (car,o) O PUEDO PONER SOLO (CAR) PARA MOSTRAR OBJETO
        console.log(`${car.modelo} ${car.version} $${car.precio}`)
    })
    utilitario.forEach((car)=>{ //PARA AGREGAR INDICE (car,o) O PUEDO PONER SOLO (CAR) PARA MOSTRAR OBJETO
        console.log(`${car.modelo} ${car.version} $${car.precio}`)
    })
}
//-----------------AUTOS--------------------

const arrayPermuta = []

const particular = [
    {modelo: "208" ,version: "Active", precio: 4000000},
    {modelo: "208" ,version: "Allure", precio: 4200000},
    {modelo: "208" ,version: "Feline", precio: 4300000},
    {modelo: "208" ,version: "Sport", precio: 4400000},
]
const familiar = [
    {modelo: "2008" ,version: "Active", precio: 4000000},
    {modelo: "2008" ,version: "Allure", precio: 4200000},
    {modelo: "2008" ,version: "Feline", precio: 4300000},
    {modelo: "2008" ,version: "Sport", precio: 4400000},
    ]
const utilitario = [
    {modelo: "Partner" ,version: "Comfort", precio: 8000000},
    {modelo: "Expert" ,version: "Comfort", precio: 9200000},
    {modelo: "Boxer" ,version: "Comfort", precio: 10300000},
    ]

    //----------FUNCIONES--------------------
    inicio()
    servicio()
    compra()
    permutaVenta()
    stock()

//INICIO





/* mostrarVersiones()
//Mostrar versiones
function mostrarVersiones(){
    arrayModelo.forEach((auto)=>{
        console.log(auto)
    })
}
let arrayModelo = []
 */

/* ingreseModelo()
function ingreseModelo(){
    let modelo = prompt(`Ingrese modelo
1- Particular
2- Familiar
3- Utilitario
`)
if (modelo === "1"){
    arrayModelo.push(vehiculo[0])
    arrayModelo.push(vehiculo[1])
    arrayModelo.push(vehiculo[2])
    arrayModelo.push(vehiculo[3])
}
    else if (modelo === "2"){
        arrayModelo.push(vehiculo[4])
        arrayModelo.push(vehiculo[5])
        arrayModelo.push(vehiculo[6])
        arrayModelo.push(vehiculo[7])
    }
    else if (modelo === "3"){
        arrayModelo.push(vehiculo[8])
        arrayModelo.push(vehiculo[9])
        arrayModelo.push(vehiculo[10])
    }
} */




