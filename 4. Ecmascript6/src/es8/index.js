const object_team = {
    frontend: "fazo",
    backend: "cristian",
    design: "fazo"
}

const entries = Object.entries(object_team)
console.log(entries)
console.log(entries.length)

const values = Object.values(object_team)
console.log(values)
console.log(values.length)


//paddings
const string = "hola"
console.log(string.padStart(7, "Ah "))
console.log(string.padEnd(7, " !!"))



//ASYNC AWAIT
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => resolve("Resolved!!"), 3000): reject(new Error("La fregamos"))
    })
};

const helloAsync = async() => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();


const anotherFunction = async() => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error)
    }
}

anotherFunction()