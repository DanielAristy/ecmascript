//Operador de reposo
let person = {
    'name': 'Oscar',
    'age': 25,
    'country': 'CO'
}

let { name, ...all } = person
console.log(name, all);

//En este caso, solo imprme el nombre y edad
let { country, ...all } = person
console.log( all);

//Propiedades de propagacion anidar objetos
let person = {
    'name': 'Oscar',
    'age': 25
}

let person1 = {
    ...person,
    'country': 'CO'
}

console.log(person1)

//Promise.finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? resolve('Hello world')
        :reject(new Error('Test Error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.error(error))
    .finally(() => console.log('Finalizó'))


    //Fecha
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = regexData.exec('2018-04-20')

const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day)