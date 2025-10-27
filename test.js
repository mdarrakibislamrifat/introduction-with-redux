// const arr = ["Rifat", "Anikur", "Sadi", "Tonmoy", "Kamruzzaman"];

// const arr2 = [...arr, "New Member"]

// console.log(arr);
// console.log(arr2);




// function currying

const add = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}

const level = add(1);
console.log(level(2)(2));

