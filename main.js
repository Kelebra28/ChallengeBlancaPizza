//Inputs
var preguntaNombre = document.getElementById('preguntaNombre');
var preguntaPizza = document.getElementById('preguntaPizza');
var preguntaDireccion = document.getElementById('preguntaDireccion');
var preguntaTelefono = document.getElementById('preguntaTelefono');
// etiqueta p
var nombre = document.getElementById('name');
var telefono = document.getElementById('telefno');
var pizza = document.getElementById('pizza');
var direccion = document.getElementById('direccion');
//Boton
var boton = document.getElementById('orden');
//Card
var respuesta = document.getElementById('respuesta')
//Img
var pizzaP = document.getElementById('pizzaPepperoni')
var pizzaH = document.getElementById('pizzaHawaiana')

// console.log(preguntaDireccion, preguntaNombre, preguntaTelefono, preguntaPizza);

// console.log(nombre, telefono, pizza, direccion);
// console.log(boton);



function resultados (){
    var dataNombre = preguntaNombre.value;
    var dataTelefono = preguntaTelefono.value;
    var dataPizza = preguntaPizza.value;
    var dataDireccion = preguntaDireccion.value;

    var dataPizzaReal = dataPizza.toLowerCase();


    nombre.innerHTML = dataNombre;
    telefono.innerHTML = dataTelefono;
    direccion.innerHTML = dataDireccion;

    if(dataPizzaReal === 'si'){ 
        pizzaH.classList.remove('none')
        pizzaP.classList.add('none')
    }else if(dataPizzaReal === 'no'){
       pizzaP.classList.remove('none')
       pizzaH.classList.add('none')
    }else{
         pizza.innerHTML = 'Escribe si o no  :s'
         pizzaP.classList.add('none')
         pizzaH.classList.add('none')

    }

    console.log(respuesta.classList);
    respuesta.classList.remove('none')

    
}

boton.addEventListener('click',resultados)