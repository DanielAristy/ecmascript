//Object.entries

const data = {
    frontend: 'Jose',
    backend: 'Diana',
    desing: 'Martha'
}

//Devuelve el objeto en una matriz
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//object values

const data = {
    frontend: 'Jose',
    backend: 'Diana',
    desing: 'Martha'
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

const string = 'Hello';

console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '--------'));


//Arrow functions, Promise and Aync await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
        ? setTimeout(() => resolve('Hola perros'), 3000)
        : reject(new Error('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();
