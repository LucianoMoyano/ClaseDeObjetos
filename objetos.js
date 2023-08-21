("-----------------------------------CLASE DE OBJETOS------------------------");

/* Pensando en nuestro dia a dia , cuando hablamos de un objeto en particular, ya sea una mesa, no hablamos de una lista ordenada, sino de una lista de propiedades. 
Por ejemplo, una mesa tiene una altura, un color , un material, ... No importa el orden de la propiedades, sino el nombre de las mismas. Por eso es que en este caso, no usamos arreglos, el orden deja de ser importante para acceder a los valores.

El como accedo a los valores en un arreglo difiere a como accedo en los objetos. 

- Se declara con la apertura y cierre de las { } , tanto con o sin las proiedades dentro. 

let nombreObjeto = {
  nombrePropiedad1: valorPropiedad1,// Las propiedades se escriben en formato key-value pair (en castellano, par clave-valor) y se separan con comas. El valor de cada clave puede ser cualquier tipo de dato, inclusive otros Objetos, Arreglos o Funciones.
  nombrePropiedad2: valorPropiedad2,
};
*/
//Ejemplo:

let persona = {
  nombre: "Luciano",
  apellido: "Moyano",
  edad: 27,
  estaVivo: true,
  mascotas: ["pepe", "Limon", "Kuka"],
  grupoFamiliar: {
    papa: "Marcelo",
    mama: "Nancy",
    hermano: "Leandro",
    hijo: "Tiziano",
  },
};

/*
Es sumamente importante poner las comas despues de cada propiedad dentro del objeto! No basta con incluir un slato de linea 

-----------DOT NOTATION VS BRACKET NOTATION--------------

Hay dos maneras de acceder a los valores de un Objeto en JavaScript:

Bracket notation (del inglés Notación por corchetes)
Dot notation (del inglés Notación por punto)

Al igual que cuando almacenamos otros tipos de datos en las variables, podemos cambiar los valores de las propiedades del objeto en cualquier momento durante un programa, al usar la notación de punto o de corchetes:

BRACKET NOTATION => nombreArreglo["nombre propiedad"]


DOT NOTATION => nombreArreglo.nombrePropiedad  

----------- Ventajas Y Limitaciones-------------

Si bien Dot notation es más cómodo y rápido de escribir, es un poco más limitado porque:

1. No acepta Variables.

Por ejemplo, si escribiéramos auto.propiedad, va a buscar el texto "propiedad" de forma literal.

Cuando utilicemos loops con Variables que cambien de valor, se va a notar más este problema.

2. No nos permite acceder a Propiedades que tengan números al principio o espacios.

-------------- Modificar Objetos -----------------

Para modificar las Propiedades de un Objeto se puede realizar tanto con Bracket como Dot notation.

*/
//CODIGO

let heroe = {
  nombre: "Mario",
  trabajo: "Plomero",
}

//Si quisiéramos modificar el nombre (y reemplazar "Mario" por "Luigi"), podríamos hacer lo siguiente:

//Dot notation

heroe.nombre = "Luigi"

//Bracket notation

heroe['nombre'] = 'Luigi'


/*
---------------- Agregando Propiedades A Un Objeto -------------------

si quisiéramos agregar la nacionalidad del Objeto heroe, podríamos hacerlo utilizando Bracket o Dot notation.

Hasta ahora, la Propiedad nacionalidad no existe (y devolvería undefined). Entonces, podríamos declararla de las siguientes formas:

*/

//Dot notation

heroe.nacionalidad = "italiano"

//Bracket notation

heroe['nacionalidad'] = 'italiano'

/*
------------ ELIMINANDO UNA PROPIEDAD -----------------

Si quisieramos eliminar una propiedad entera, tanto su key como su valor podemos usar la palabra reservada delete : 

delete arreglo.key --> dot notation 
delete arreglo["key"] ---> bracket notation 
 */

/*

----------------- Objetos Dentro De Arreglos --------------------

Podemos acceder a los Objetos dentro de Arreglos a través de Bracket o Dot notation.

Realizar un ejemplo donde se propone crear el objeto de un auto. Debe tener un arreglo llamado partes.
*/

//CODIGO 

let auto = {
  marca: "Tesla",
  modelo: "Model Y",
  kilometros: 0,
  nuevo: true,
  arrancar: function() {
          alert("el auto se enciende!")
      },
  partes: [{ nombre: "bateria", estado: "nuevo"}, {nombre: "motor", estado: "nuevo"}]
  }

// Utilizando Dot notation nos devuelve el Arreglo partes

auto.partes

// 0: {nombre: "bateria", estado: "nuevo"}
// 1: {nombre: "motor", estado: "nuevo"}

//Si quisieramos entrar al primer objeto? 

auto.partes[0]
//{nombre: “bateria”, estado: “nuevo”}

//si quisiéramos acceder al Valor de la clave estado

auto.partes[0].estado
//"nuevo"

//Usando Bracket notation se vería así:

auto["partes"][0]["estado"]
//"nuevo"



/* 
 EJERCICIO ECOMMERCE

Creando Stock del Ecommerce de Luciano:

Luciano se incorporo a la empresa y nos pide que le creemos su primer stock con su precio correspondiente y la cantidad de articulos que nos da...

 Samsung TV= 6000, art=10
 DELL notbook= 4000, art=30
 Auriculares Sony= 1500, art=15
 Monitor Philips= 12000, art=20
 Teclado logitech= 3000, art=5

Pasar todos estos productos y articulos a sus objetos correspondientes.

*/

let ecommerce = [
  { nombre: "Samsung TV", precio: 6000, articulos: 10 },
  { nombre: "DELL notbook", precio: 4000, articulos: 30 },
  { nombre: "Auriculares Sony", precio: 1500, articulos: 15 },
  { nombre: "Monitor Philips", precio: 12000, articulos: 20 },
  { nombre: "Teclado logitech", precio: 3000, articulos: 5 },
];

/*
Elements

Nuestro cliente Luciano nos pide que de todo su inventario creemos una funcion que nos devuelva solamente los nombres de toso los productos que tiene en su ecommerce, ademas crear lo mismo para que nos devuelva el precio

Escribí una función llamada Elements que tenga dos parámetros, en primer lugar un arreglo de objetos y ademas el nombre de una propiedad. La función tendrá que devolver un arreglo que solamente contenga los valores dentro de la propiedad recibida.

Utilizar la variable creada anteriormente.

Ejemplo: 

Elements(ecommerce, 'nombre') // ["Samsung TV", "DELL notbook", "Auriculares Sony", "Monitor Philips", "Teclado logitech"]

Luciano nos pide que creems 3 funciones para devolver esto..
1. Utilizando metodo .push()
2. Solamente javascrip Vanilla, utilizando .length()
3. Utilizando metodo. forEach()
*/


//Metodo .push()
function Elements(array, property) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i][property]);
  }
  return newArr;
}

Elements(ecommerce, "nombre")("---------------------------------");

//JS vanilla
function Elements(arr, k) {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i][k];
  }
  return newArr;
}

("----------------------------------");
//El método forEach() ejecuta la función indicada una vez por cada elemento del array.
//Metodo .forEach()
function Elements(array, property) {
  let newArray = [];
  array.forEach((element) => {
    newArray.push(element[property]);
  });
  console.log(newArray);
}
Elements(ecommerce, "precio");

/*
TotalDeArticulos

Lo que nos pide Luciano ahora es que saquemos el valor total de todos los articulos que se encuentren en la tienda, pero que esten separados por seccion, cada articulo diferenciado de otro sin estar en el mismo arreglo!!

Vamos a tener que crear una nueva función llamada TotalDeArticulos que como parametro que tenga, haga referencia a un arreglo de productos de nuestro ecommerce. La función en general tendra que devolver un nuevo arreglo con objetos que tengan el nombre de cada producto y el valor total de todos los Articulos que se ecuentren en la tienda 

Utilizar la variable creada anteriormente

Output esperado:

TotalDeArticulos(ecommerce) // Debe retornar (5) [{…}, {…}, {…}, {…}, {…}]
 {Samsung TV: 60000}
 {DELL notbook: 120000}
 {Auriculares Sony: 22500}
 {Monitor Philips: 240000}
 {Teclado logitech: 15000} 
*/


function TotalDeArticulos(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = { [arr[i]["nombre"]]: arr[i]["precio"] * arr[i]["articulos"] };
  }
  return newArr;
}

TotalDeArticulos(ecommerce);

("------------------------------------------------------");

function TotalDeArticulos(array) {
  let newArray = [];
  array.forEach((element) => {
    let newObject = {
      [element["nombre"]]: element["precio"] * element["articulos"],
    };
    newArray.push(newObject);
  });
  console.log(newArray);
}
TotalDeArticulos(ecommerce);
