console.log("Function hoisting: " + sum(5,6)); //function hoisting
function sum(a, b){ //parameters
    return a+b;
    console.log("This will not print");
}
console.log(sum(2,3)); //arguments

//console.log(a(3,4)); - error because of hoisting not supported;
const a = function sum1(a,b){
    return a +b;
}
console.log(a(3,4));

const c=(a,b)=>a+b;
console.log(c(2,7));

const d=d=>d+2;
console.log(d(5));

const e = ()=>({a:1, b:2}) //this, super and arguments key words not in arrow functions
console.log(e());

function tot(){
    console.log(arguments);
    console.log(arguments[0]+arguments[1]);
}
tot(14,54);

const total = (a,...number)=>{ //rest operator, rest parameter should be the last formal parameter
    console.log("a = " + a);
    console.log("rest = " + number);
}
total(1, 2, 3, 4, 5, 6);

arr = [1, 2, 3, 4, 5, 6];
console.log(...arr);//spread operator
console.log(Math.max(...arr));


//Callback function
function f1(f2){
    return f2;
}
function f2(){
    console.log("Hello");
}
const f3 = f1(f2);
f3();

//lexical scope
function outer(){
    var v = 3; //same behaviour with const and let
    function inner(){
        console.log(v);
    }
    inner();
}
outer();


function f(a = 4){
    console.log(a);
}
f(3);

//closure
function out(){
    let w = 3;
    return function inn(){
        w++;
        console.log(w);
    }
}
const fu = out();
console.log("Closure example: ");
fu();
fu();

//array declaration
arr = [1,2,3,4,5];
const brr = new Array(1, 2, 3, 4, 5); //new - allocates memory during run time, stored in heap
//array starts with 0 becasue of memory offset
console.log(brr);
console.log(brr.at(-1)); //.at to use negative indexing


//for of loop / for in loop
for(item of arr){
    console.log(item); //of - value / in - index
}


//map - transform, new array, arrow function
const arrm = arr.map(item=>item*item);
console.log("Map : " + arrm);

//filter - condition based, new array, arrow function
const arrf = arr.filter(item=>item%2==0);
console.log("Filter : " + arrf);

//reduce - 

let addr ="address";
const student = {
    name: "Divyana",
    age: 20,
    address: "Chandigarh",
    greet: function () {
        console.log("Heyyyyy");
        console.log(this.name);
    },
    greet1: ()=>{
        console.log(this.name);
    }
};
console.log(student.name);
//console.log(student[age]); //error as age is not a variable
console.log(student["age"]);
console.log(student[addr]); //key is here stored in a variable
console.log(student.greet());
console.log(student.greet1());

const person = new Object();
person.name = "Yati";
person.age = 20;
console.log(person);