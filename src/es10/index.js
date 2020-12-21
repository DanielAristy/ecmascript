let array = [1,2,3, [1,2,3, [1,2,3]]];
//El parametro que se le envia el metodo es la profundidad
// en la que se quiere trabajar
console.log(array.flat(2));

//
let array = [1,2,3,4,5,6];
console.log(array.flatMap(value => [value, value*2]));
//[ 1, 2, 2, 4, 3, 6, 4, 8, 5, 10, 6, 12 ]

//Elimianr espacios de un String
let hello = '    Hola Perros!';

//Eliminar espacios adelante
console.log(hello) //    Hola Perros!
console.log(hello.trimStart()); //Hola Perros!

//Eliminar espacios atras
let hello = 'Hola Perros!      ';
console.log(hello)//Hola Perros!      /
console.log(hello.trimEnd())//Hola Perros!

// catch sin parametro
try {
    
} catch  {
    console.log(error)
}

//Convertir un arreglo a Objeto
let entries = [['name', 'oscar'],['age', 32]];
console.log(Object.fromEntries(entries));

//Simbolos
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);