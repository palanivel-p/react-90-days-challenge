//arrow function
const sum = (a,b)=> a+b;
console.log(sum(3,5));

//destructuring
const user = {name:'palani',age:7};
const {name,age} = user;
console.log(name);

//spread operator 
const user = {name:'palani',age:11};
const details = {mark: 8};
const copyuser = {...user,...details}
console.log(copyuser);

//map()
const numbers = [1, 2, 3];

const result = numbers.map(num => num * 2);

console.log(result);

//filter()
const numbers = [1, 2, 3, 4, 5];

const result = numbers.filter(num => num > 3);

console.log(result);

//reduce()
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum);
