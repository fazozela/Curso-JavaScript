function f1(name, age, city) {
    var name = name || "Pablo"
    var age = age || 25
    var city = city || "BO"
    console.log(name, age, city);
}
// ES6
function f2(name = "Félix", age = 26, city = "BO") {
    console.log(name, age, city);
}

f2()
f2("Marina", 24, "BO")

//Template literals
let nombre = "Felix"
let appelido = "Zelaya"

let saludo = `Hola ${nombre} ${appelido}`
console.log(saludo)


//Concatenación
let frase =
    `Esta es la primera parte de la frase
esta es la segunda parte`;
console.log(frase);


//desectruccturación
let robot = {
    name: "Said",
    battery: false
}

let { name, battery } = robot
console.log(`Hi we are coming from an object, ${name}, ${battery}`)


//Propagación
let team1 = ["Oscar", "Julian", "Ricardo"]
let team2 = ["Valeria", "Yesica", "Camila"]

let education = ["David", ...team1, ...team2]
console.log(education)


//var, let, const
{
    var test_var = "Hola soy el var";
}

{
    let test_let = "Hola soy el let";
    console.log(test_let);
}

console.log(test_var);

const test_const = "Hola"
test_const = 3



//parametros en objetos
let name = 'Felix';
let age = 26;

obj = { name, age };
console.log(obj)



//arrow functions
//es5
const names = [
    { name: 'Felix', age: 26 },
    { name: 'Oscar', age: 34 }
]

let list_of_names = names.map(function(item) {
    console.log(item.name)
})

//1ra forma
let list_of_names2 = name.map(item => console.log(item.name));

//2da forma
let list_of_names3 = (param1, param2, param3) => {
    ...
}

let list_of_names4 = param => {
    ...
}

let square = num => num * num;



///PROMESAS
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("Hey, we resolved!");
        } else {
            reject("Ups, something went wrong");
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(response => console.log(response))



//CLASSES
class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        return valueA + valueB;
    }
}

let calcu = new Calculator();
console.log(calcu.sum(3, 4))

import { sayHello } from './module.js';

console.log(sayHello())