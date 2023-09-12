//Variables que estan "Sueltas"
let nombre = "Felipe";
let edad = 31;
let puesto = "Instructor";


//usar un array (arreglo) para "Juntar" nuestras variables
//Agregamos los elementos al array separados por coma
let personasDeLaCH31 = ["Felipe", "Jose Angel", "Marco", "Evelyn", "Alejandro"];

//Podemos almacenar cualquier tipo de dato en un array
let cosasRandom = ["Pelota", 31, true, undefined, null];
console.log(typeof (cosasRandom)); //object


//Al imprimir el tipo de dato de nuestro arreglo, obtenemos un object porque los arrays  son objetos (después veremos que tenemos muchos tipos de objetos)

//Los arreglos al ser objetos, cuentan con métodos que nos permiten manipularlos.

//Ya que tengo mi arreglo, ¿cómo podemos acceder a esta informacion?
//Para mostar la cantidad de elementos que tengo en un arreglo, usamos un método llamado length


//Método length dpara mostar los elementos de un array
console.log(personasDeLaCH31.length);

//declarar un array
[5, 4, 3, 2, 1]

//inicializar un array
let cuentaRegresiva = [5, 4, 3, 2, 1];

//Acceder a un elemento en specifico utilizansdo los indices

console.log(personasDeLaCH31[0]);//Felipe
console.log(personasDeLaCH31[25]);//Undefined porque el elemento no existe

//Tambien podemos acceder a un elemento de mi arreglo por medio de una variable


//Declaro elm indice en una variable
let index = 4;

//Paso esta variable como indice del arreglo
console.log(personasDeLaCH31[index]); //Alejandro


//Ejemplo de un array para un consultorio dental

let pacientes = [];

let dentistas = ["DR. Smith", "Dra. Garcia", "Dr. House", "Dr. Simi"];

dentistas[3] = "Similares";



dentistas[8] = "Dr. Strange";
console.log(dentistas);

console.log(typeof (dentistas[7]));

//Función para imprimir asteriscos y poner una división en al información de mi consola
function imprimirAsteriscos() {
    console.log("**********************************************");
}

//Invocación de la función
imprimirAsteriscos();

let listaDelSuper = ["Gansitos", "Coca-Colas", "Arroz", "Atún", "Verduritas"];

//Método length para conocer la longitud del array
console.log("La cantidad de elementos de mi array es de: " + listaDelSuper.length);

//Método push() para pner elemento al final de mi array
listaDelSuper.push("Jabón para ropa", "Jabón para trastes");

console.log(listaDelSuper);

// function push(){

// }

//Método  pop() para eliminar elementos del array
listaDelSuper.pop();

console.log(listaDelSuper);
console.log(listaDelSuper.length);

//Agregar un elemento al principio del array con el método unshift()
listaDelSuper.unshift("Sabritones");
console.log(listaDelSuper);


//Eliminar el primer elemento del array shift elimina elementos al principio del array
listaDelSuper.shift();
console.log(listaDelSuper);

//saber la posicion de la verduritas
console.log(listaDelSuper.indexOf("Verduritas"));



//Metodo splice para agregar, eliminar o reemplazar elementos

//nombreArreglo.splice(Inicio, cantidadElementosAEliminar, elementoAInsertar1, elementoAInsetar2, ...);

listaDelSuper.splice(2, 0, "Cacahuates", "Manzana");

console.log(listaDelSuper);


//Metodo .map()

let numeros = [1, 2, 3, 4, 5];
//Crear otro arreglo con los numeros multiplicados x2 [2, 4, 6, 8, 10];

let numerosPorDos = numeros.map(function (numero) {
    return numero * 2;

});

console.log(numerosPorDos);


/**
 * 
Imaginemos que tenemos un array de pacientes. Este arreglo tiene datos registrados como nombre, edad. Necesitamos modificar este arreglo para que revisemos la edad de cada paciente, y si la edad es mayor a 40 años, el paciente necesita una atencion especial.

Aspectos a considerar

    -2 arreglos (Original y el modificado)
    -Condicion if
    -Funcion para agregar el nuevo dato a cada elemento
    -metodo map()

 */

//Arreglo de pacientes original

let pacientesConsultorio = [{ nombre: "Felipe", edad: 31 }, { nombre: "Fatima", edad: 26 }, { nombre: "Jesus", edad: 51 }];

function agregarEstadoSalud(paciente) {
    let estado = "Saludable";

    if (paciente.edad >= 40) {
        estado = "Necesita atencion especial";
    }
    //paciente.estado = estado;
    return {
        ...paciente, //copia del paciente
        estado: estado,//para agregar un nuevo campo o variable (como la edad o el numero)
    };
};



//vamos a aplicar la funcion en cada elemento del arreglo con el map
let pacientesConsultorioConEstado = pacientesConsultorio.map(agregarEstadoSalud);
console.log(pacientesConsultorio);
console.log(pacientesConsultorioConEstado);
