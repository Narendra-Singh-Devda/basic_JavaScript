// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);

console.log("C ", myArr);
const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);


// =================


let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(array2);

let myArr3 = array2.slice(0, 5)

console.log(array2);
console.log(myArr3);


// SPLICE operation manipulate the orignal array 