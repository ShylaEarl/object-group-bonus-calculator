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

console.log( employees );

function calculateBonus( employee ) {

  let bonusPercentage = calculateBonusPercent(employee);
  let bonusAmount = bonusPercentage/100 * Number(employee.annualSalary)
  
  let employeeBonus = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: Number(employee.annualSalary) + bonusAmount,
    totalBonus: bonusAmount
  }
  return employeeBonus;
}

for ( let person of employees ) {
  console.log( calculateBonus(person) );
}

function calculateBonusPercent( employee ) {

  let bonusPercent = 0;

  if ( employee.reviewRating === 3 ) {
    // - If rating of a 3 should receive a base bonus of 4% 
    bonusPercent += 4;
  } 
  else if ( employee.reviewRating === 4 ) {
    // - If rating of a 4 should receive a base bonus of 6% 
    bonusPercent += 6;
  } else if ( employee.reviewRating === 5 ) {
    // - If rating of a 5 should receive a base bonus of 10% of their base annual income.
    bonusPercent += 10;
  } 

  // If employee number is 4 digits long, they have 15+ years with company & get an extra 5%
  if ( employee.employeeNumber.length === 4 && employee.reviewRating > 2 ) {
    bonusPercent += 5;
  }

  // - However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
  if ( employee.annualSalary > 65000 ){
    bonusPercent -= 1;
  }
  
  // - No bonus can be above 13% or below 0% total.
  if ( bonusPercent > 13 ) {
    bonusPercent = 13;
  } else if ( bonusPercent < 0 ) {
    bonusPercent = 0;
  }

  return bonusPercent;
}

console.log('Testing reviewRating 2, expect 0:', calculateBonusPercent(
  {
    name: 'Blah',
    employeeNumber: '999',
    annualSalary: '50000',
    reviewRating: 2
  }
));

console.log('Testing reviewRating 2 & long term employee, still expect 0:', calculateBonusPercent(
  {
    name: 'Blah',
    employeeNumber: '9999',
    annualSalary: '50000',
    reviewRating: 2
  }
));

console.log('Testing reviewRating 2 & over 65k, still expect 0:', calculateBonusPercent(
  {
    name: 'Blah',
    employeeNumber: '999',
    annualSalary: '150000',
    reviewRating: 2
  }
));

console.log('Testing reviewRating 1, expect 0:', calculateBonusPercent(
  {
    name: 'Blah',
    employeeNumber: '999',
    annualSalary: '50000',
    reviewRating: 1
  }
));

console.log('Testing reviewRating 3, expect 4:', calculateBonusPercent(
  {
    name: 'Blah',
    employeeNumber: '999',
    annualSalary: '50000',
    reviewRating: 3
  }
));

console.log('Testing reviewRating 4, expect 6:', calculateBonusPercent(
  {
    name: 'Blah',
    employeeNumber: '999',
    annualSalary: '50000',
    reviewRating: 4
  }
));

console.log('Testing reviewRating 5, expect 10:', calculateBonusPercent(
  {
    name: 'Blah',
    employeeNumber: '999',
    annualSalary: '50000',
    reviewRating: 5
  }
));

console.log('Testing reviewRating 5 & long term employee, expect 13:', calculateBonusPercent(
  {
    name: 'Blah',
    employeeNumber: '9999',
    annualSalary: '50000',
    reviewRating: 5
  }
));

console.log('Testing reviewRating 4 & long term employee, expect 11:', calculateBonusPercent(
  {
    name: 'Blah',
    employeeNumber: '9999',
    annualSalary: '50000',
    reviewRating: 4
  }
));

console.log('Testing reviewRating 3 & long term employee, expect 9:', 
    calculateBonusPercent(
      {
        name: 'Blah',
        employeeNumber: '9999',
        annualSalary: '50000',
        reviewRating: 3
      }
    )
);

console.log('Testing reviewRating 3 & long term employee & over 65k, expect 8:', 
    calculateBonusPercent(
      {
        name: 'Blah',
        employeeNumber: '9999',
        annualSalary: '150000',
        reviewRating: 3
      }
    )
);

console.log('Testing reviewRating 5 & long term employee & over 65k, expect 13:', 
    calculateBonusPercent(
      {
        name: 'Blah',
        employeeNumber: '9999',
        annualSalary: '150000',
        reviewRating: 5
      }
    )
);

console.log('Testing reviewRating 5, expect 9:', calculateBonusPercent(
  {
    name: 'Blah',
    employeeNumber: '999',
    annualSalary: '150000',
    reviewRating: 5
  }
));

// Testing calculateBonus 

console.log('Testing bonus of 0, expect name=Blah, bonusPercentage=0, totalCompensation=50k,' +
  'totalBonus=0', calculateBonus(
  {
    name: 'Blah',
    employeeNumber: '999',
    annualSalary: '50000',
    reviewRating: 1
  }
));

