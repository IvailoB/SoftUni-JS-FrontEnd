
// Ex No.2

// function vacation(peopleCount, typeOfGroup, dayOfWeek) {
//     let totalPrice = 0;

//     switch (typeOfGroup) {
//         case 'Students':
//             if (dayOfWeek === 'Friday') {
//                 totalPrice = peopleCount * 8.45;
//             } else if (dayOfWeek === 'Saturday') {
//                 totalPrice = peopleCount * 9.80;
//             } else {
//                 totalPrice = peopleCount * 10.46;
//             }

//             if (peopleCount >= 30) {
//                 totalPrice -= totalPrice * 0.15;
//             }
//             break;
//         case 'Business':

//             if (peopleCount >= 100) {
//                 peopleCount -= 10;
//             }

//             if (dayOfWeek === 'Friday') {
//                 totalPrice = peopleCount * 10.90;
//             } else if (dayOfWeek === 'Saturday') {
//                 totalPrice = peopleCount * 15.6;
//             } else {
//                 totalPrice = peopleCount * 16;
//             }
//             break;
//         case 'Regular':
//             if (dayOfWeek === 'Friday') {
//                 totalPrice = peopleCount * 15;
//             } else if (dayOfWeek === 'Saturday') {
//                 totalPrice = peopleCount * 20;
//             } else {
//                 totalPrice = peopleCount * 22.5;
//             }
//             if (peopleCount >= 10 && peopleCount <= 20) {
//                 totalPrice -= totalPrice * 0.05;
//             }
//             break;
//     }
//     console.log(`Total price: ${totalPrice.toFixed(2)}`)
// }

// vacation(
//     30,
//     "Students",
//     "Sunday"
// );
// vacation(
//     40,
//     "Regular",
//     "Saturday"
// )


//------------------------------ Ex No.3 -----------------------------------------

// function leapYear(year) {
//     if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//         console.log('yes')
//     }else{
//         console.log('no')

//     }
// }

// leapYear(1984);
// leapYear(2003);
// leapYear(4);


//------------------------------ Ex No.4 -----------------------------------------
// function printAndSum(start, end) {
//     let sum = 0;
//     let output = [];

//     for (let currentNum = start; currentNum <= end; currentNum++) {

//         output.push(currentNum);
//         sum += currentNum
//     }
// console.log(`${output.join(' ')}`);
// console.log(`Sum: ${sum}`);
// }
// printAndSum(
//     5,10
// )


// printAndSum(
//     0,26
// )

//------------------------------ Ex No.6 -----------------------------------------

// function sumDigits(number) {
//     let numberAsString = number.toString();
//     let sum = 0;
//     for (const digitAsString of numberAsString) {
//         let digit = Number(digitAsString);
//         sum += digit;
//     }
//     console.log(sum)
// }

// sumDigits(
//     245678
// )

// sumDigits(
//     97561
// )

// sumDigits(
//     543
// )



//------------------------------ Ex No.12 -----------------------------------------

// function cookingByNumbers(numberAsString, ...operations) {
// let number = Number(numberAsString)

// operations
// .forEach((operation) => {
//     switch (operation) {
//         case 'chop':
//             number /=2;
//             break;

//             case 'dice':
//             number = Math.sqrt(number);
//             break;

//             case 'spice':
//             number++;
//             break;

//              case 'bake':
//             number *=3;
//             break;

//              case 'fillet':
//             number *= 0.8;
//             break;

//     }
// console.log(number);
// })

// }

// cookingByNumbers('32','chop','chop','chop','chop','chop');
// cookingByNumbers('9','dice','spice','chop','bake','fillet');



//------------------------------ Ex No.13 -----------------------------------------

// function arrayRotations(numbers, rotations) {

//     rotations %= numbers.length;

//     for (let index = 0; index < rotations; index++) {
//         let firsrtNumber = numbers.shift();
//         numbers.push(firsrtNumber);
//     }

//     console.log(numbers.join(' '))
// }

// arrayRotations(
//     [51,47,32,61,21], 2
// )

// arrayRotations(
//     [32,21,61,1], 4
// )

// arrayRotations(
//     [2,4,15,31], 5
// )

//------------------------------ Ex No.15 -----------------------------------------

// function listOfNames(names) {

//     return [...names]
//         .sort((a, b) => a.localeCompare(b))
//         .map((el, index) => `${index + 1}.${el}`)
//         .join(`\n`)
// }

// console.log(
//     listOfNames(
//         ['IVA', 'ASQ', 'BOB', 'EMA']
//     )
// )


//------------------------------ Ex No.16 -----------------------------------------


//------------------------------ Ex No.2 -----------------------------------------


//------------------------------ Ex No.2 -----------------------------------------


