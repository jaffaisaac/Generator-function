/**
 * for a function tobe called a generator function should have  the " * " symbol in between the function keyword and the name f the function .
 * Generator are functions the can pause and resume during the execution .
 * during the execution , with the function reach the yield keyword , it pause and waits for the next() iterator to bbe called z\
 * 
 */

function *gen(){
    yield "Hello";
    yield "from";
    yield "generators"
}
// creating an iterator 

let obj = gen();

console.log(obj.next())
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())