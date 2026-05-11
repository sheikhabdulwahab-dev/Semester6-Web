// let add = function () {
//     return "Hellow  ggg world";

// }

// console.log(add());

// function add(name) {
//     return `My name is ` + name;
// }

// console.log(add("Abdul"));


// let add = () => "hallo kkkjkjkjworld"

// console.log(add());

// let obj = { name: "ali", age: 23, rollno: 4567 };

// console.log(obj.name);

// let obj1 = new Object();

// obj1.name = "aaa";

// obj1.name = "skjdka"
// console.log(obj1.name);

// console.log(Object.keys(obj1));

// let obj = { name: "ali", age: 24 };
// let obj1 = obj;

// obj1.name = "ahmed";

// obj.gender = "male";

// console.log(obj);

// let number = new Set([1, 2, 3, 3, 4, 4, 5]);

// console.log(number);
////

//    let acc = new Map([["name", "ali"], ["name1", "ab"]]);

  

// console.log(acc);

// console.log("hello world ");
///

// let arr = ["ali" , 1 , "a" , 5];

// let as = "askalklkl"

// for (let [key , value] of acc){
//     console.log(key , value);
// }
///

// let obj = {name: "ali" , id : 1};

// for (let value in obj){
//     console.log(obj[value]);
// }

// let fruit = ["apple" , "banana" , "orange" , "grape"] ;
// fruit.splice(1, 0  , "kiwi") ;

// console.log(fruit);

// const task = ["buy " , "pay bill" , "clean room" , "walk dog"];
// // task.splice(1,1);
// // task.push("wash dises") ;

// task.splice(3,1 , "Take dog");
// console.log(task);

///

// let x = [{'name': 'Ahmad', 'Age': 33},{'name': 'Noman', 'Age': 46}];
//   for(var y in x)
//      for(var z in x[y])
//         console.log(x[y][z]);

// const salaries= { Jack : 24000, Paul : 34000, Monica : 55000 } 
// // using for...in 
// for ( let i in salaries) { 
// 	// add a currency symbol 
// 	let salary = "$" + salaries[i];
// 	// display the values 
// 	console.log(`${i} : ${salary}`);
// }
///

// let num = [23,45,23,456,56];
// num.forEach ((n) => {
// 	console.log(n);
// });

// for (let i of num){
//     console.log(i);


// let arr = [1,2,3,4];

// arr.forEach((n , index) => arr[index] = n*n ) ; 

// console.log(arr);
//

// let arr = [1,2,3,4];
// let arr1 = arr.map((n) => n*3) ;

// console.log(arr1);
// console.log(arr);

// let num = [1,2,3,4,5] ;

// let total = num.reduce((acc , val) => acc+val ,10) ;

// console.log(total);

// let num = [1,2,3,4,5] ; 

// let fin = num.find((n) => n>3 );
// console.log(fin);

// let arr = [9,2,3,4,5] ;
// console.log(arr.sort()) ;

// let user = [{name: "ali , marks"}]

//

// const owners = [ 
// { ownerId: "1234", name: "Noman", liveIn: "Lahore" }, 
// { ownerId: "2356", name: "Ali", liveIn: "Multan" }, 
// { ownerId: "5678", name: "Wasif", liveIn: "Lahore" }, 
// { ownerId: "9101", name: "Hamza", liveIn: "Karachi" } 
// ]; 


// const trucks = [ 

// { truckId: "Truck A", ownerId: "1234", dailyDistances: [50, 60, 70, 80, 90], condition: "Excellent" }, 
// { truckId: "Truck B", ownerId: "1234", dailyDistances: [40, 60, 55, 65, 70], condition: "Good" }, 
// { truckId: "Truck C", ownerId: "2356", dailyDistances: [100, 120, 130, 110, 115], condition: "Excellent" }, 
// { truckId: "Truck D", ownerId: "2356", dailyDistances: [30, 40, 50, 60, 45], condition: "Bad" }, 
// { truckId: "Truck E", ownerId: "5678", dailyDistances: [20, 80, 70, 90, 45], condition: "Good" }, 
// { truckId: "Truck F", ownerId: "9101", dailyDistances: [20, 30, 40, 50, 35], condition: "Bad" } 
// ];

// // trucks.forEach((val) =>{
// //     let total = 0 ;
// //     val.dailyDistances.reduce((acc, val) => total  = acc + val ,0)

// //     console.log(val.truckId + total*50)

 
// // } )

// let fil = trucks.map((val) => {

//     if(val.condition == "Excellent"){
//         return val.ownerId
//     }

     

// })

 

// let set = fil.filter((val) => val != undefined) ;

// console.log(set) ;

// owners.forEach((val) =>{

//     if(set.some((x) =>  x == val.ownerId))
//         console.log(val.name) ;

// })

// let arr = [2,4,6,8] ;
// const found = arr.some((x) => x>4) ;
// console.log(found) ;

///

// let arr = ["apple" , 'banana' , 'orange'];
// arr.splice(3,1 , 'mango') ;

// console.log(arr) ;

// let a = "abdulwahab , ali , zia" ;
// let piece = a.split(",") ;
// console.log(piece) ;

 
















