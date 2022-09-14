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