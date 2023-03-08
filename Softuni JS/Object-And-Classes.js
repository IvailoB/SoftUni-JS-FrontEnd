//------------------------------ Ex No.1 Person Info -----------------------------------------


// function personInfo(firstName, lastName, age) {
//     let person = {firstName, lastName, age};

//     return person;
// }

// console.log(personInfo(
//     "Peter",
//     "Pan",
//     "20"
// ))

//------------------------------ Ex No.2 City -----------------------------------------

// function cityInfo(city){
//     let keys = Object.keys(city);
//     for(const key of keys) {
//         console.log(`${key} -> ${city[key]}`)
//     }
// }

// cityInfo(
//     {
//         name: "Sofia",
//         area: 492,
//         population: 1238438,
//         country: "Bulgaria",
//         postCode: "1000"
//     }
// )

//------------------------------ Ex No.3 City Taxes -----------------------------------------

// function cityTaxes(name, population, treasury){
//     let city ={
//         name,
//         population,
//         treasury,
//         taxRate: 10,
//         collectTaxes() {
//             this.treasury = Math.ceil(this.treasury + this.population * this.taxRate);
//         },
//         applyGrowth(percentage){
//             this.population = Math.ceil(this.population + this.population * (percentage/100));
//         },
//         applyRecession(percentage) {
//             this.treasury = Math.ceil(this.treasury - this.treasury * (percentage/100));
//         }
//     }
//     return city;
// }

// const city =
// cityTaxes('Tortuga',
// 7000,
// 15000);
// city.collectTaxes();
// city.applyGrowth(5);
// console.log(city.population);
// city.applyRecession(5);
// console.log(city.treasury);

//------------------------------ Ex No.4 Convert to object -----------------------------------------


// function convertToObj(jsonString){
//     let data = JSON.parse(jsonString);
//     let arr = [11,22,33]
//     for (const index in arr){
//         console.log(index)
//     }
// }
// convertToObj(
//     '{"name": "George", "age": 40, "town": "Sofia"}'
// )

//------------------------------ Ex No.5 Factorial Division -----------------------------------------
//------------------------------ Ex No.6 Phone Book  -----------------------------------------

// function phoneBookParser(input) {
//     let phoneBook = {};

//     for(const line of input){
//         let [name, phoneNumber] = line.split(' ');
//         if(!phoneBook.hasOwnProperty(name)){
//             phoneBook[name] = phoneNumber

//         }
//     }

//     for(const key in phoneBook) {
//         console.log(`${key} -> ${phoneBook[key]}`)
//     }

// }

// phoneBookParser(
//     ['Tim 0834212554',
//         'Peter 0877547887',
//         'Bill 0896543112',
//         'Tim 0876566344']
// )

//------------------------------ Ex No.7 Meetings -----------------------------------------
//------------------------------ Ex No.8 Address Book -----------------------------------------

// function addressBook(input) {
//     let addressBookMap = {};
//     for (const line of input) {
//         let [name, address] = line.split(':');
//         addressBookMap[name] = address
//     }

//     let names = Object.keys(addressBookMap)
//         .sort((nameA, nameB) => nameA.localeCompare(nameB));
//     for (const name of names) {
//         console.log(`${name} -> ${addressBookMap[name]}`)
//     }
// }

// addressBook(
//     ['Tim:Doe Crossing',
//         'Bill:Nelson Place',
//         'Peter:Carlyle Ave',
//         'Bill:Ornery Rd']
// )

//------------------------------ Ex No.9 Cats -----------------------------------------

function solve(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    let cats = [];
    for (const line of input) {
        let [name, age] = line.split(' ');
        age = Number(age);
        cats.push(new Cat(name, age))
    }

    for(const cat of cats) {
        cat.meow();
    }
}

solve(
    ['Mellow 2', 'Tom 5']
)

//------------------------------ Ex No.10 Songs  -----------------------------------------
