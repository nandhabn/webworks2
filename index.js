// //1. Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.
// function equalObject() {
//     var obj1 = {
//         name: "car",
//         // model: "AUDI"
//         model: "BMW"
//     }
//     var obj2 = {
//         name: "car",
//         model: "AUDI"
//     }
//     var found = true
//     for (var a in obj1) {
//         if (obj2.hasOwnProperty(a) && obj2[a] != obj1[a]) {
//             found = false;
//             break;
//         }
//     }
//     if (!found) {
//         console.log("not equal")
//     }
//     else {
//         console.log("equal")
//     }
// }



// //2.copy content from input to clipboard
// window.onload=()=>{
//     document.getElementById("ws").innerHTML="<input id='ip'></input> <input type='button' id='mb' value='copy'>"
//     document.getElementById("mb").onclick = () =>{
//         document.getElementById("ip").select();
//         document.execCommand("copy");
//     }
// }


// 3.read txt from clipboard
// window.onload = () => {
//     document.getElementById("ws").innerHTML = "<input id='ip'></input> <input type='button' id='mb' value='paste'>"
//     document.getElementById("mb").onclick = async () => {
//         document.getElementById("ip").value = await navigator.clipboard.readText()
//     }
// }

// // 4.digits to arrary 
// window.onload = ()=>{
//     document.getElementById("ws").innerHTML = "<input id='ip'></input> <input id='mb' readonly>"   
//     document.getElementById("ip").oninput=()=>{document.getElementById("mb").value=document.getElementById("ip").value}
// }


// // 5.array sum
// window.onload = ()=>{
//     var arr = [2,1,3,4]
//     document.getElementById("ws").innerHTML = "sum is " + arraysum(arr)
// }
// const arraysum = (a)=>{
//     return a.reduce((tot,cur)=>{return tot+cur},0)
// }

// // 6. JavaScript program to remove specified elements from the left of a given array of elements.
// window.onload = () => {
//     var a = [2, 5, 2, 6, 3]
//     document.getElementById("ws").innerHTML = "new array " + rede(a,3)
// }
// const rede = (ar, i) => {
//     return ar.filter((n, ind) => {
//         return ind != i;
//     })
// }




// // 7.factorial
// window.onload = () => {
//     document.getElementById("ws").innerHTML = "<input type='number' id='num'> <input type='number' id='res'>"
//     document.getElementById("num").oninput = (ev) => {
//         document.getElementById("res").value = fact(ev.target.value)
//     }
// }
// var fact = (n)=>{
//     if( n == 1 ){
//         return 1
//     }
//     return n * fact(n-1)
// }

// //JSON to CSV data
// const JSONToCSV = (arr, columns, delimiter = ',') =>
//   [
//     columns.join(delimiter),
//     ...arr.map(obj =>
//       columns.reduce(
//         (acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
//         ''
//       )
//     )
//   ].join('\n');

// console.log(JSONToCSV([{ x: 10, y: 20 }, { x: 30, y: 40, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y']));
// console.log(JSONToCSV([{ x: 10, y: 20 }, { x: 30, y: 40, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y'], ';'));

// //csv to JSON data
// const CSVToJSON = (data, delimiter = ',') => {
//     const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
//     return data
//       .slice(data.indexOf('\n') + 1)
//       .split('\n')
//       .map(v => {
//         const values = v.split(delimiter);
//         return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
//       });
//   };
//   console.log(CSVToJSON('col1,col2\na,b\nc,d'));
//   console.log(CSVToJSON('col1;col2\na;b\nc;d', ';'));

// // match in es6 
// const matches = (obj, source) =>
//   Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
// console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); 
// console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); 
// console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); 

// // split num into array
// const digitize = n => [...`${n}`].map(i => parseInt(i));
// console.log(digitize(123));
// console.log(digitize(1230));

// // min max using prompt
// var num1, num2;
// num1 = window.prompt("Input the First integer", "0");
// num2 = window.prompt("Input the second integer", "0");                                              
// if(parseInt(num1, 10) > parseInt(num2, 10)) 
//   { 
//   console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
//   }   
// else
//   if(parseInt(num2, 10) > parseInt(num1, 10)) 
//   {
//   console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
//   }                  
// else
//   {
//    console.log("The values "+ num1+ " and "+num2+ " are equal.");
//   }


//  // sign of multiplication
// var x = 3;
// var y = -7;
// var z = 2;
// if (x > 0 && y > 0 && z > 0) {
//     alert("The sign is +");
// }
// else if (x < 0 && y < 0 && z < 0) {
//     console.log("The sign is +");
// }
// else if (x > 0 && y < 0 && z < 0) {
//     console.log("The sign is +");
// }
// else if (x < 0 && y > 0 && z < 0) {
//     console.log("The sign is +");
// }
// else {
//     console.log("The sign is -");
// }



// // sort 3 numbers 
// var x = 0;
// var y = -1;
// var z = 4;
// if (x > y && x > z) {
//     if (y > z) {
//         console.log(x + ", " + y + ", " + z);
//     }
//     else {
//         console.log(x + ", " + z + ", " + y);
//     }
// }
// else if (y > x && y > z) {
//     if (x > z) {
//         console.log(y + ", " + x + ", " + z);
//     }
//     else {
//         console.log(y + ", " + z + ", " + x);
//     }
// }
// else if (z > x && z > y) {
//     if (x > y) {
//         console.log(z + ", " + x + ", " + y);
//     }
//     else {
//         console.log(z + ", " + y + ", " + x);
//     }
// }        


// // odd or even
// for (var x = 0; x <= 15; x++) {
//     if (x === 0) {
//         console.log(x + " is even");
//     }
//     else if (x % 2 === 0) {
//         console.log(x + " is even");
//     }
//     else {
//         console.log(x + " is odd");
//     }
// }


// // addition of two numbers
// var x = add(4, 3);
// document.write("<p id='ans'>")
// document.getElementById("ans").innerHTML = x;

// function add(a, b) {
//     return a + b;
// }

// // arrow function
// var x = function(a,b) {return a+b};
// var a = x(5,1);
// document.write("<p id='ans'>")
// document.getElementById("ans").innerHTML = a;


// // Function's constructor
// var fun = new Function("a" , "b" , "return a*b");
// document.write("<p id='ans'>")
// var a = fun(2,5);
// document.getElementById("ans").innerHTML = a;

// // function hoisting
// document.write("<p id='ans'>")
// var x = fun(5);
// document.getElementById("ans").innerHTML = x;
// function fun(a) {
//     return a * a;
// }


// // Self invoking Function
// document.write("<p id='ans'>")
// (function fun() {
//     document.getElementById("ans").innerHTML = "hello!!";
// })();

// // Function as values
// document.write("<p id='ans'>")
// var x = fun(2, 3);
// var y = x + 5;
// document.getElementById("ans").innerHTML = y;
// function fun(a, b) {
//     return a + b;
// }

// // function as string
// document.write("<p id='ans'>")
// function fun(a, b) {
//     return a * b;
// }
// document.getElementById("ans").innerHTML = fun.toString();

// // Arrow function with  return
// document.write("<p id='ans'>")
// var a = (x, y) => { return x * y };
// document.getElementById("ans").innerHTML = a(3, 3);

// // default parameter
// function fun(x=2,y=2){

//     return x*y;
// }
// document.body.innerHTML = fun();


// // Max number with Argument Object
// function Max() {
//     var i;
//     var max = -Infinity;
//     for (i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// } 
// document.body.innerHTML = Max(4, 7,9);

// // Min number with Argument Object
// function Min() {
//     var i;
//     var min = +Infinity;
//     for (i = 0; i < arguments.length; i++) {
//         if (arguments[i] < min) {
//             min = arguments[i];
//         }
//     }
//     return min;
// }
// document.body.innerHTML = Min(4, 7, 9);


// //  sum of array with argument Object
// function addAll() {
//     var i;
//     var sum = 0;
//     for (i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }
// document.body.innerHTML = addAll(4, 5, 6);


// // Function in object
// var obj = {
//     firstWord: "nandha ",
//     secondWord: "nila",
//     fullWord: function () {
//         return this.firstWord + " " + this.secondWord;
//     }
// }
// document.body.innerHTML = obj.fullWord();


// // call method
// var person = {
//     fullName: function () {
//         return this.firstName + " " + this.secondName;
//     }
// }
// var person1 = {
//     firstName: "Steve",
//     secondName: "Jobs"
// }
// var person2 = {
//     firstname: "Tim",
//     secondName: "Cook"
// }

// document.body.innerHTML = person.fullName.call(person1);


// // call method with arguments
// var person = {
//     fullName: function (location, city, state) {
//         return this.firstName + " " + this.secondName + ", " + location + ", " + city + ", " + state;
//     }
// }
// var person1 = {
//     firstName: "Steve",
//     secondName: "Jobs"
// }

// var person2 = {
//     firstName: "Tim",
//     secondName: "Cook"
// }

// document.body.innerHTML = person.fullName.call(person2, "One Apple Park Way", "Cupertino", "California");


// // compared with call method
// var person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
//   var person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   var person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }
//   var x = person.fullName.call(person1, "Oslo", "Norway"); 
//   document.body.innerHTML = x; 


// // max function in Math module
// document.body.innerHTML = Math.max(1,2,3); 

// Apply method
// document.body.innerHTML = Math.max.apply(null, [1,2,3]); 

