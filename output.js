let num= 23.6

console.log(~~(num+.5)) 



let arr = [1, 2, 22, 4, 5, -6, 7];
arr.length = 0;
console.log(arr);



console.log("Start");

setTimeout(()=>{
    console.log("Time out");
},0)
console.log("End");


Array.prototype.extraProperties="AAAA"
let arr=[1,2,3]
for( let i in arr){
    if(arr.hasOwnProperty(i))
    console.log(i)
}


for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}


for (Let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
=========

{

    let a=10;
    let b=20;
    console.log(a)
     console.log(b)
    
    
}
 console.log(a)
     console.log(b)



  ==============



function any(){

    let a=10;
    let b=20;
     c=100;
    console.log(a)
     console.log(b)
    
    
}
any()

console.log(c)
 console.log(a)
     console.log(b)


 =====================



foo()

var foo=10;

function foo(){
    console.log("Foo")
}
console.log(foo)
foo()


=====================

const arr=[1,2,3]
arr[4]=4
console.log(arr.length)
console.log(arr.indexOf(20))


=================how to freeze key in json

const data1={
name:"anki",
    age:12
}
Object.defineProperty(data1,"name",{
  writable: false,      // Prevents modification of the "name" key
  configurable: false   // not able to delete if its true
})

data1.name="paddi" // Your JSON not update as per code


console.log({} == {}); 
console.log({} ==={}); 
console.log(2*2)/ mul
console.log(2**2) 2 ki power 2

let a = {
    name: "Ank8t",
};

let b = { 
    ...a // Spread operator creates a shallow copy
};

b.name = "lala"; 

console.log(b.name); // Output: "lala"
console.log(a.name); // Output: "Ank8t"


let a=10
let b= new Number(10)
ley c=10

console.log(a===b)
console.log(b===c)
console.log(a==b)
console.log(b==c)

Primitive vs Object:
a and c are primitives (number).
b is an object (Number instance).
=== checks both type & value → false when comparing primitives with objects.
== allows type conversion → true when an object (Number) is compared to a primitive.






