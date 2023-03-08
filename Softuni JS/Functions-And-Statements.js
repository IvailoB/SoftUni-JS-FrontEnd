
//------------------------------ Ex No.1 SMALLEST OF THREE NUMBER -----------------------------------------

// function smallestOfThree(firstNum, secondNum, thirdNum) {
//     let min = Math.min(firstNum, secondNum, thirdNum);
//     return min;
// }

// const smallestOfThree = (firstNum, secondNum, thirdNum) => Math.min(firstNum, secondNum, thirdNum);

// console.log(
//     smallestOfThree(2,3,5)
// )



//------------------------------ Ex No.2 Add and Subtract -----------------------------------------

// function calculations(firstNum, secondNum, thirdNum){
// const sum = (a,b) => a+b;
// const subtract = (mySum, num) => mySum - num;

// return subtract(sum(firstNum,secondNum), thirdNum)
// }

// console.log(
//     calculations(23,6,10)
// )

//------------------------------ Ex No.3 Characters in Range -----------------------------------------

// function charactersInRange(firstChar,secondChar){

//     const getFirstCharAsciiCode = (char) =>char.charCodeAt(0);
//     let firstCharAscii = getFirstCharAsciiCode(firstChar);
//     let secondCharAscii = getFirstCharAsciiCode(secondChar);

//     let minAscii = Math.min(firstCharAscii,secondCharAscii);
//     let maxAscii = Math.max(firstCharAscii,secondCharAscii);

//     let chars = [];

//     for (let index = minAscii + 1; index < maxAscii; index++) {
//         chars.push(String.fromCharCode(index));
//     }

//     return chars.join(' ');
// }

// console.log(
//     charactersInRange('a', 'd')
// )
// console.log(
//     charactersInRange('#', ':')
// )
// console.log(
//     charactersInRange('#', 'C')
// )

//------------------------------ Ex No.4 Odd And Even Sum -----------------------------------------
//------------------------------ Ex No.5  Palindrome Integers-----------------------------------------
// function palindrome(numbers) {
//     numbers
//         .forEach(num => {
//             console.log(isPalindrome(num))
//         });

//     function isPalindrome(num) {
//         let reversed = Number([...num.toString()].reverse().join(''));

//         return num === reversed;
//     }
// }

// palindrome(
//     [123,323,421,121]
// )

//------------------------------ Ex No.6 Password Validator -----------------------------------------


// function passwordValidator(password) {
//     const isValidLength = (pass) => pass.length >= 6 && pass.length <= 10;
//     const hasOnlyLetterAndDigits = (pass) => /^[A-Za-z0-9]+$/g.test(pass)
//     const hasAtLeastToDigits = (pass) => [...pass.matchAll(/\d/g)].length >= 2;

//     let passIsValid = true;

//     if (!isValidLength(password)) {
//         console.log('Password must be between 6 and 10 characters')
//         passIsValid = false;
//     }
//     if (!hasOnlyLetterAndDigits(password)) {
//         passIsValid = false;
//         console.log('Password must consist only of letters and digits')
//     }
//     if (!hasAtLeastToDigits(password)) {
//         passIsValid = false;
//         console.log('Password must have at least 2 digits')
//     }

//     if(passIsValid){
//         console.log('Password is valid')
//     }
// }

// passwordValidator('login')
// passwordValidator('MyPAss123')
// passwordValidator('PaS$ss$')



//------------------------------ Ex No.7 NxN Matrix -----------------------------------------

// (n) => new Array(n).fill(new Array(n).fill(n)).forEach(row => console.log(row.join(' ')))

//------------------------------ Ex No.8 Perfect Number -----------------------------------------

// function isPerfect(number) {

//     let divisors =[];

//     for (let currentNum = 1; currentNum < number; currentNum++){
//         if(number % currentNum === 0){
//             divisors.push(currentNum)
//         }
// 1       
//     }

//     let divisorsSum = divisors.reduce( (previousVal, currentVal) => {
//         return previousVal + currentVal;
//     }, 0 );

//     if(divisorsSum === number){
//         console.log('We have a perfect number!')
//     }else{
//         console.log("It's not so perfect.")
//     }
// }


// isPerfect(6)
// isPerfect(28)
// isPerfect(1236498)

//------------------------------ Ex No.9 Loading Bar -----------------------------------------
//------------------------------ Ex No.10 Factorial Division -----------------------------------------

// function getFactorial(number) {
//     if(number === 1) {
//         return number;
//     }
//     return number * getFactorial(number - 1)
// }

// console.log(getFactorial(4))

