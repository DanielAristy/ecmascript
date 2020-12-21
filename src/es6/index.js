//Parametros por defecto
function newFunction(name, age, country){
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'CO';
    console.log(name, age, country);
}

//es6
function newFuction2(name = 'Oscar', age = 32, country = 'CO'){
    console.log(name, age, country);
}

newFuction2();
newFuction2('Daniel', 25, 'MX');

//Anterior
let hola = 'Hola';
let mundo = 'Mundo';
let saludar = hola + ' ' + mundo;
console.log(saludar)

//Actual en es6
let saludar2 = `${hola} ${mundo}`
console.log(saludar2)


//Anterior
 let lorem = "Lorem Ipsum is simply dummy text of \n"
 + "the printing and typesetting industry."

 //Actual en es6
let lorem2 = `Una frase epica donde se hace uso
de emascript 6 para separar estos textos
`;
console.log(lorem)
console.log(lorem2)


//Anterior
let person = {
    'name': 'Oscar',
    'age': 25,
    'country': 'CO'
}
console.log(person.name, person.age, person.country)

//es6
let { name, age, country } = person;
console.log(name, age, country);

//Anterior
let team1 = ['Oscar', 'Ricardo', 'Pedro'];
let team = ['Lina', 'Camila', 'Angelica'];

let education = ['David', 'Oscar', 'Ricardo', 'Pedro', 'Lina', 'Camila', 'Angelica'];

console.log(education);
//es6
let education1 = ['David', ...team1, ...team];
console.log(education1);


let name = 'Daniel';
let age = 26;
//Anterior
obj = {name: name, age: age};

//es6
obj2 = {name, age};
console.log(obj2);

//Arrow functions

const names = [
    {name: 'Daniel', age: 26},
    {name: 'Jose', age: 32}
]

//Anterior
let listOfNames = names.map(function (item) {
    console.log(item.name)
})

//es6
let listOfNames2 = names.map(item => console.log(item.name));

//Promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!')
        }else {
            reject('Ups!')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error));


//Objetos
class Calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();

console.log(calc.sum(1, 15));

import { hello } from './module';
hello();

//Generator

function* helloWorld(){
    if (true) {
        yield 'Hello!'
    }
    if (true) {
        yield 'World!'
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);



