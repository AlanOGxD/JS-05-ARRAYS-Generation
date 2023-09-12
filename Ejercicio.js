let corredores = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia"];//Aregllo inicial


let posicionFinal = corredores.slice();//Copia del arreglo "corredores"

/*
ejemplo visual de como inician los pasos y la cadena final
Jorge, roberto
Ramiro a jorge
Roberto sale
Andrea baja posicion
ramiro 4
jose 5 


Ramiro
jorge
Andrea
Sofia
Jose
*/

pos = posicionFinal.indexOf("Jorge");//Se obiente la posicion de Jorge
posicionFinal.splice(pos, 1);//Se elimina Jorge
posicionFinal.unshift("Jorge");//Se agrega en el inicio

pos2 = posicionFinal.indexOf("Ramiro");//Se obtiene la posicion de Ramiro
posicionFinal.splice(pos2, 1);//Se elimina ramiro de esa posicion
posicionFinal.unshift("Ramiro");//Se agrega al inicio antes de jorge

pos3 = posicionFinal.indexOf("Roberto");//Se obtiene la posicion de Roberto
posicionFinal.splice(pos3, 1);//Se elimina por lesion


pos4 = posicionFinal.indexOf("Andrea");//Se obtiene la posicion de andrea
posicionFinal.splice(pos4, 1);//Se elimina
posicionFinal.splice(pos4 + 1, 0, "Andrea");//se agrega una posicion posterior


posicionFinal.push("Jose");//se agrega a jose en la quinta posicion


console.log(corredores);//Impresion de cadena inicial
console.log(posicionFinal);//Impresion de posiciones finales

