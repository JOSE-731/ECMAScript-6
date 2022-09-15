//Como se hacia antes

 function test1(nombre, edad, pais){
    var  nombre = nombre || "Jose";
    var  edad = edad || 2;
    var  pais = pais || "Colombia";

    console.log(nombre, pais, edad)
    test3()
    test2()
}


//Con Es6

function test2(nombre = "Jose", pais = "Colombia", edad="20"){
    console.log(nombre,pais,edad)
}

function test3(nombre = "Jose", pais = "Colombia", edad="250"){
    console.log(nombre,pais,edad)
}

test1()


//Objeto
let info = {
    'name': 'Jose',
    'edad': 15,
    'pais' : "España"
}

//Antes de Es6 accediamos de esta forma al objeto
console.log(info.name, info.edad, info.pais)

//Con Es6, empezó la desestructuración una nueva manera de acceder al objeto
let {name, edad, pais} = info;
console.log(edad, name, pais);


//Array
let data1 = ["CO", "PE", 4];
let data2 = ["CO", "PE", 4];

//Con Es6, unir array
let union = [...data1, ...data2]

console.log(union)

//Objetos con variables
let name1 = "Jose";
let edad1 = 1;

//Antes de Es6
objt1 = {
   name: name1,
   edad: edad1
};

//Con Es6
objt2 = {
    name1, edad1
}

console.log(objt1)

//Funciones flecha
//Las funciones flecha (arrow functions) consiste en una función anónima con la siguiente estructura:

//Antes de Es6
function nombre (parámetros) {
    return (valorRetornado)
}

function suma (num1, num2) {
    return num1 + num2
}



//Despues de Es6
//Función flecha
const nombre = (parámetros) => {
    return (valorRetornado)
}

const suma = (num1, num2) => num1 + num2

//Promesas
//Una promesa es una forma de manejar el asincronismo en JavaScript.

const promesa = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve( "Se ha resuelto la promesa" );
        }else {
            reject( "Se ha rechazado la promesa" );
        }
    });
}

promesa()
    .then( respuesta => console.log(respuesta) ) //En caso que se ejecute resolve
    .catch( error => console.log(error) ) //En caso que se ejecute reject
    

//Clase

class calculadora{
    //Declaramos las variables
    contructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    //Inicializamos
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;

        return valueA + valueB;
    }
}

const calc = new calculadora();
console.log(calc.sum(2, 894))


//Llamar modulo
const saludo = require('./module')

console.log(saludo())