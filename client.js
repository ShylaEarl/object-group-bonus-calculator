const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

let empBonusObj = [];
let item;

// for (let person of employees){
//   console.log('in for of loop: ', person);
//   item = person;
//   //item = calculateBonus(person);
// }

for (let i = 0; i < employees.length; i++){
  console.log(employees[i]);
  item = employees[i];
  //item = calculateBonus(employees[i]);
}

//employees[i].reviewRating
function calculateBonus(item){
 
   if(item.reviewRating === 3){
     return item.annualSalary * .04;
   } else if (item.reviewRating === 4){
     return item.annualSalary * .06;
   } else if (item.annualSalary === 5){
     return item.annualSalary * .1;
   } else {
     return item.annualSalary;
   }
   empBonusObj.push(item);
}//end calculateBonus function

console.log('testing function', calculateBonus(employees));
console.log('in bonus array', empBonusObj);

for (let i = 0; i < employees.length; i++){
  console.log(employees[i]);
  //let item = employees[i];
  let item = calculateBonus(employees[i]);
}

//   for (let i = 0; i < employees.length; i++){
//     console.log(employees[i]);
//     let result = employeeBonus(employees[i]);
//   }
  
// console.log('In employeeBonus:');
//   function employeeBonus(array) {
//     return console.log(array);
//   }
// console.log(employeeBonus(employees[1]));
/////////////////////////////////////////////
// function listAll(array){
//   let person = {};
//   for(let i = 0; i < array.length; i++){
//     person = array[i];
//   }
//   return person;
// }

// console.log( listAll(employees) );

// function personBonus (object) {
//   let newObject = {
//     name: name,
//     bonusPercentage: bonusPercentage,

//   }
// }

// console.log(personBonus({name: 'Atticus',
// employeeNumber: '2405',
// annualSalary: '47000',
// reviewRating: 3}));

