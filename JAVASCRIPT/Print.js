// console.log("hello")

// declarations
// a=10
// b=15
// c=true
// d=10.345
// e="hi"
// f='h'
// console.log(typeof(a),typeof(b),typeof(c),typeof(d),typeof(e),typeof(h))

// var a=10;
// let b="hi"
// const c=true
// console.log(c)
// c=false


//  --secondary datatypes

// 1)array
// arr=[1,23.3,"hi"]
// console.log(arr[1])
// console.log(typeof(arr))

// 2)object
// type 1)
// obj1={
//     firstname:"st.Joseph's",
//     lastname:"institute",
//     depts:["CSE","ADS","IT","ECE"],
//     training:"mern"
// }
// console.log(obj1)

// type 2)
// obj2={}
// obj2["firstname"]="hello"
// obj2["lastname"]="world"
// console.log(obj2)

// console.log(obj2.firstname)
// console.log(obj2["firstname"]) //quotes compulsory(single or double)

// type 3)
// object3 =new Object()
// console.log(object3)
// object3.training="MERN"
// object3.Depts=["CSE","IT","AD","ECE"]
// console.log(object3.Depts)

// 3)set
// set=new Set()
// console.log(set)
// set=new Set("hello")
// console.log(set)
// set=new Set(["hello"])
// console.log(set)
// set.add("hi") //added based on the prev added type
// console.log(set)
// set.add("hi")
// console.log(set) //no duplicates added

//logical operators
// console.log(5 && 10)
// console.log(10 && 5)
// console.log(true && 10)
// console.log(false && 10)
// console.log(false || 10)
// console.log(true || 5)
// console.log(5 || true)
// console.log(5 || 10)
// console.log(10 || 5)
// console.log(false && true)
// console.log(true && false)
// console.log(false || true)
// console.log(true || false)

//Relational Operators
// a='5'
// b=5
// console.log("This is == operator",a==b); // datatype is not consider
// console.log("this is === operator",a===b); //datatype is consider

// //bitwise 
// console.log(70&35);
// console.log(70^35);
// c=1
// console.log(~c);

//conditional statement
//1)simple if
//2)if....else..
//3)nested if
//4)else if ladder
//5)switch

//looping statements
//1)while
//2)do...while   (; not mandatory after while)
//3)for loop (use let n)
//4)for in
//5)for of
//6)for Each

//4)for in
// arr=[10,20,30,"abc",true,"hello",[10,20,30]]
// for (a in arr){  //(var a is not necessary)
//     console.log(a)
// } //prints the keys

// obj1={
//         firstname:"st.Joseph's",
//         lastname:"institute",
//         depts:["CSE","ADS","IT","ECE"],
//         training:"mern"
//     }
// for(i in obj1){
//     console.log(i) //prints the keys
// }

// for(i in obj1){
// console.log(obj1[i])
// }

// //5)for of
// arr=[10,20,30,"abc",true,"hello",[10,20,30]]
// for (a of arr){  //(var a is not necessary)
//     console.log(a)
// } //prints the value at the key

// for(i of obj1){
//     console.log(i)  //non iterable
// }

// for(i of Object.values(obj1)){
//     console.log(i)  //prints the values resp
// }
// console.log("\n")
// for({k,v} of Object.entries(obj1)){
//     console.log(k,v)  //prints the keys and values resp
// }
// console.log("\n")
// for([k,v] of Object.entries(obj1)){
//     console.log(k,v)  //prints all keys and values as undefined why??(task 1)
// }

//for each
// arr.forEach((ele)=>{
//     console.log(ele)
// })

// Object.keys(obj1).forEach((ele)=>{
//     console.log(ele)
// })

// Object.entries(obj1).forEach((key,val)=>{
//     console.log(key,val) //why 0,1,2,3 is printed? task4
// })

//functions
// 1)without parameter without argument
// function testfunc(){
//     console.log("this is a test func")
// }
//  2)with parameter without argument
//  3)without parameter with argument
//  4)with parameter with argument

// es6 features:
// 1)variables-let,const

// 2)arrow function
// var arrowfunc=()=>{
//     console.log("this is arrow func")
// }
// arrowfunc()

