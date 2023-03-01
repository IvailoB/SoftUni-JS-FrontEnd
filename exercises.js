
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

function sumDigits(number) {
    let numberAsString = number.toString();
    let sum = 0;
    for (const digitAsString of numberAsString) {
        let digit = Number(digitAsString);
        sum += digit;
    }
    console.log(sum)
}

sumDigits(
    245678
)

sumDigits(
    97561
)

sumDigits(
    543
)
//------------------------------ Ex No.2 -----------------------------------------



//------------------------------ Ex No.2 -----------------------------------------


//------------------------------ Ex No.2 -----------------------------------------


//------------------------------ Ex No.2 -----------------------------------------


//------------------------------ Ex No.2 -----------------------------------------


//------------------------------ Ex No.2 -----------------------------------------


