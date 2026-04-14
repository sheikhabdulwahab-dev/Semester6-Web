// Task 1

// const numbers = [1, 2, 3, 4, 5 ];
// let  count = 0 ;

// numbers.forEach((value)=> {
     
//     if (value > 50)
//     {
//          count++ ;
//     }
// })

// console.log(count) ;

//TAsk 4

// const students = [
//     {name : "Ali" , marks : 80},
//     {name : "Sara" , marks : 45},
//     {name : "John" , marks : 60} 
// ]

// students.forEach((value)=> {
//     if(value.marks >= 50)
//         console.log(value.name) ;

    
// })

// let result = students.filter((value , index , array )=> value.marks>=50) ;

// for(let i of result)
//     console.log(i.name);

// Example Lab

let truckdistance = [
    {name :  "truckA" , dailyDistance : [2,12,10,5]},
    {name :  "truckB" , dailyDistance : [2,10,10,15]},
    {name : "truckC" , dailyDistance : [20,1,12,50]},
    {name : "truckD" , dailyDistance : [21,11,1,5]}
];

truckdistance.forEach((value  )=> {

    let total = 0 ;
    for(let i of value.dailyDistance)
        total +=  i  ;

console.log("Truck ID "+  value.name + " Total Distance " + total + " Total Earning " + total*10) ;


})

/// map()
//Example 1: Multiply each number by 2

let num = [1,2,3,4,5];
let newarray = num.map(function(value){
    return value*2 ;
});
console.log(newarray)

//Example 2

let truck_distance = [
    {name :  "truckA" , dailyDistance : [2,12,10,5]},
    {name :  "truckB" , dailyDistance : [2,10,10,15]},
    {name : "truckC" , dailyDistance : [20,1,12,50]},
    {name : "truckD" , dailyDistance : [21,11,1,5]}
];

let arr = truck_distance.map((value) =>{

    let totaldis = 0 ;
    for(let i of value.dailyDistance)
        totaldis += i

 return {TruckID : value.name , TotalDistance : totaldis} ;
  
});

console.log(arr) ;

//Task 6

// const shoppingCart = [
//  { name: "Laptop", price: 1000, quantity: 1 },
//  { name: "Phone", price: 700, quantity: 2 },
//  { name: "Headphones", price: 150, quantity: 3 },
//  { name: "Smartwatch", price: 250, quantity: 1 }
// ];

// const total_slip = shoppingCart.map((currentitem) => {

//     totalprice = currentitem.price * currentitem.quantity ;

  

// return {name: currentitem.name , price: currentitem.price , quantity: currentitem.quantity , Totalprice: totalprice};
// });
//  console.log(total_slip);


 ///Task 7 Create an array of student marks and return a new array with grades:

 const result = [
{id: 'student-1', marks: 45},
{id: 'student-1', marks: 78},
{id: 'student-1' , marks: 88},
{id: 'student-1' , marks: 59},
{id: 'student-1' , marks: 90}
];

let Total_Result = result.map((data)=>{
    let grade = '' ;

    if(data.marks >= 90) {
         grade = 'A+'
    }
    else if(data.marks>=80 && data.marks <=89 ) //80–89 → "A"
    {grade = 'A'}
    else if(data.marks>=70 && data.marks <=79 ) //70–79 → "B"
    {grade = 'B'}
     else if(data.marks>=60 && data.marks <=69 ) //60–69 → "C"
    {grade = 'C'}
     else if(data.marks < 60) //<60 → "F"
    {grade = 'F'}

    return {
        id : data.id ,
        marks : data.marks ,
        Grade : grade 

    } ;

});
console.log(Total_Result) ;

// reduce()
//Task 8

// const number = [1,2,3,4,5];
// const sum = number.reduce((accumulater , currentvalue)=> {
//     return accumulater + currentvalue

// } , 0);

// console.log(sum) ;



 

/// count how many even numbers  reduce()

// const number = [1,2,3,4,5];
// const high_value = number.reduce((accumulater , currentvalue)=> {
//      let even_num = currentvalue%2 ;
      
//      if(even_num == 0){
//          return ++accumulater; 
//      }
//      else{
//         return accumulater;
//      }
      
// } , 0);
// console.log(high_value) ;


/// find max value using reduce

const number = [1,2,3,4,5];
const high_value = number.reduce((accumulater , currentvalue)=> {
      
      
     if(currentvalue > accumulater){
         return  currentvalue; 
     }
     else{
        return accumulater;
     }
      
} , 0);
console.log(high_value) ;

///Calculate total cart value using reduce() after multiply price * quantity

const shoppingCart = [
 { name: "Laptop", price: 1000, quantity: 1 },
 { name: "Phone", price: 700, quantity: 2 },
 { name: "Headphones", price: 150, quantity: 3 },
 { name: "Smartwatch", price: 250, quantity: 1 }
];

let total = shoppingCart.reduce((acc , val  ) =>{
      
    
      return   acc + (val.price * val.quantity) ;

} , 0) ;
console.log( {TotalCartValue : total}) ;

//Task 10 Count frequency of elements in an array

 const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const frequency = fruits.reduce((acc, val) => {
    if(acc[val] === undefined){
        acc[val] = 1 ;
    }
    else{
        acc[val]++ ;
    }
    return acc
    
 
    
}, {});  

console.log(frequency);

//Filter Even Numbers task 11

// const numbers = [1, 2, 3, 4, 5, 6];

// let even = numbers.filter((value) => {

//     if(value%2 == 0) 
//     {
//         return value
//     }

// });
// console.log(even);

//Filter Passed Students and Return students with marks ≥ 50 task 12

const students = [
{ name: "Ali", marks: 80 },
{ name: "Sara", marks: 45 },
{ name: "John", marks: 60 }
];

let pass = students.filter((value) => {
    
     
        return value.marks >= 50 ;
    
})

console.log(pass) ;

///Find First Even Number task 13
const numbers = [1, 3, 5, 6, 7];

let even = numbers.find((val) => val%2 ==0)
console.log(even) ;


//Find first product with price greater than 500 task13
const products = [
 { name: "Laptop", price: 1000 },
 { name: "Mouse", price: 50 },
 { name: "Phone", price: 700 }
];

let pro = products.find((val) => val.price > 500)
console.log(pro) ;

