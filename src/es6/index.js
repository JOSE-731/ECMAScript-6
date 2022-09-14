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
