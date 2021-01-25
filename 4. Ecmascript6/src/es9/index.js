const obj = {
    name: 'fazo',
    age: 26,
    country: 'BO',
};

let { name, age, ...all } = obj;
console.log(name, age, all)


const obj1 = {
    name: 'fazo',
    age: 26,
    country: 'BO',
};

const obj2 = {
    ...obj1,
    dev: true
};

console.log(obj2);


//ASYNC FINALLY
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => resolve("Resolved!!"), 3000): reject(new Error("La fregamos"))
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizado'))



//REGEX
const regex_data = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regex_data.exec('2021-03-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);