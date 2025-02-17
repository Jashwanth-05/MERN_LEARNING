// //task 1
// obj1={
//     firstname:"st.Joseph's",
//     lastname:"institute",
//     depts:["CSE","ADS","IT","ECE"],
//     training:"mern"
// }
// for({k,v} of Object.entries(obj1)){
//     console.log(k,v) //prints all keys and values as undefined why?
// }
// for(i of Object.entries(obj1)){
// console.log(i) 
// }
// // each element is in the form of array
// // To destructure an array element, you need to use square brackets

// //task 2
// //functions
// //1)without parameter without argument
// function testfunc1(){
//     console.log("this is a test func")
// }
// testfunc1()

// //2)with parameter without argument
// function testFunc2(a) {
//     console.log("Parameter is:", a);  //undefined
// }
// testFunc2(); 
  
// //3)without parameter with argument
// function testFunc3() {
//     console.log("hello");
//   }
//   testFunc3("Extra argument"); //ignored 
  
// //4)with parameter with argument
// function testFunc4(a) {
//     console.log("Parameter is:", a);
// }
// testFunc4(10); 

// //task 3
// Object.entries(obj1).forEach((key,val)=>{
//     console.log(key,val) //why 0,1,2,3 is printed? 
// })
// // key receives the entire entry 
// // val receives the index (0, 1, 2, …).

// Object.entries(obj1).forEach(([key, value]) => { 
//     console.log(key, value);
// });