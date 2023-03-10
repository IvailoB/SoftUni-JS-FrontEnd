//------------------------------ Ex No.1 Employees -----------------------------------------

// function parseEmployee(input) {
//     let employees = {};
//     for (const employee of input) {
//         employees[employee] = employee.length;
//     }
//     for (const key in employees) {
//         console.log(`Name: ${key} -- Personal Number: ${employees[key]}`)
//     }
// }

// parseEmployee(
//     [
//         'Silas Butler',
//         'Adn Buckley',
//         'Juan Peterson',
//         'Brendan Villarreal'
//     ]
// )

//------------------------------ Ex No.2 Towns -----------------------------------------

// function townsParser(input) {
//     let towns = [];
//     for (const line of input) {
//         let [town, latitude, longitude] = line.split(' | ');
//         let townObj = { town, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2) };

//         towns.push(townObj);
//     }

//     for (const town of towns) {
//         console.log(town)
//     }
// }

// townsParser(
//     ['Sofia | 42.696552 | 23.32601',
//         'Beijing | 39.913818 | 116.363625']
// )
//------------------------------ Ex No.3 Store Provision -----------------------------------------
// function storeProvision(stock, orderedProducts) {
//     let combined = [...stock, ...orderedProducts];
//     let store = {};

//     for (let index = 0; index < combined.length; index++) {
//         let prop = combined[index];
//         if (index % 2 === 0) {
//             if (!store.hasOwnProperty(prop)) {
//                 store[prop] = 0;
//             }
//         } else {
//             value = Number(prop)
//             let previousProp = combined[index - 1];
//             store[previousProp] += value
//         }
//     }

//     for (const key in store) {
//         console.log(`${key} -> ${store[key]}`)
//     }
// }

// storeProvision(
//     [
//         'Chips', '5', 'CocaCola', '9', 'Bananas',
//         '14', 'Pasta', '4', 'Beer', '2'
//     ],
//     [
//         'Flour', '44', 'Oil', '12', 'Pasta', '7',
//         'Tomatoes', '70', 'Bananas', '30'
//     ]
// )

//------------------------------ Ex No.4 Movies -----------------------------------------

// function moviesParser(input) {
//     let movies = [];

//     for (const line of input) {
//         let commandTokens = line.split(' ');
//         if (line.includes('addMovie')) {
//             let movieName = commandTokens.slice(1).join(' ');
//             addMovie(movieName);
//         } else if (line.includes('directedBy')) {
//             let indexOfCommand = commandTokens.indexOf('directedBy');
//             let movieName = commandTokens.slice(0, indexOfCommand).join(' ');
//             let director = commandTokens.slice(indexOfCommand + 1).join(' ');
//             addDirector(movieName, director);
//         } else {
//             let indexOfCommand = commandTokens.indexOf('onDate');
//             let movieName = commandTokens.slice(0, indexOfCommand).join(' ');
//             let date = commandTokens.slice(indexOfCommand + 1).join(' ');
//             addDate(movieName, date);
//         }
//     }

//     for (const movie of movies) {
//         if (movie.hasOwnProperty('name') && movie.hasOwnProperty('date') && movie.hasOwnProperty('director')) {
//             console.log(JSON.stringify(movie));
//         }
//     }

//     function addMovie(name) {
//         movies.push({name});
//     }
//     function addDirector(name, director) {
//         let movie = movies.find((m) => m.name === name);
//         if (movie) {
//             movie.director = director;
//         }
//     }

//     function addDate(name, date) {
//         let movie = movies.find((m) => m.name === name);
//         if (movie) {
//             movie.date = date;
//         }
//     }
// }

// moviesParser([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
// ])

//------------------------------ Ex No.5 Inventory -----------------------------------------
// function inventory(input) {
//     let heroes = [];

//     for (const line of input) {
//         let [ hero, level, items ] = line.split(' / ');
//         level = Number(level);
//         heroes.push({hero, level, items });
//     }
//     let sortedHeroes = (heroes.sort( (heroA, heroB) => heroA.level - heroB.level ))

//     for (const {hero, level, items} of sortedHeroes) {
//         console.log(`Hero: ${hero}`);
//         console.log(`level => ${level}`);
//         console.log(`items => ${items}`);
//     }
// }

// inventory(
//     [
//         'Isaac / 25 / Apple, GravityGun',
//         'Derek / 12 / BarrelVest, DestructionSword',
//         'Hes / 1 / Desolator, Sentinel, Antra'
//     ]
// )

// let heroes = [
//     {
//         hero: 'Hero 1',
//         level: 33,
//     },
//     {
//         hero: 'Hero 2',
//         level: 5,
//     },
//     {
//         hero: 'Hero 4',
//         level: 1,
//     },
//     {
//         hero: 'Hero 3',
//         level: 1,
//     },
// ];

// let sortedHeroes = heroes
//     .sort((heroA, heroB) => {
//         let result = heroA.level - heroB.level;

//         if (result === 0) {
//             return heroA.hero.localeCompare(heroB.hero)
//         }

//         return result;
//     });

// sortedHeroes.forEach((h) => console.log(h));


//------------------------------ Ex No.6 Word Tracker -----------------------------------------

// function wordsTracker(input) {
//     let searchedWords = input.shift().split(' ');
//     let words = {};
//     for (const word of searchedWords) {
//         let count = input.filter((w) => w === word).length;
//         words[word] = count;
//     }
//     let sortedWord = Object.entries(words)
//         .sort((wordA, wordB) => {
//             let [_nameA, countA] = wordA;
//             let [_nameB, countB] = wordB;

//             return countB - countA;
//         });

//     for (const [word, count] of sortedWord) {
//         console.log(`${word} - ${count}`)
//     }

// }

// wordsTracker(
//     [
//         'this sentence',
//         'In', 'this', 'sentence', 'you', 'have',
//         'to', 'count', 'the', 'occurrences', 'of',
//         'the', 'words', 'this', 'and', 'sentence',
//         'because', 'this', 'is', 'your', 'task'
//     ]
// )
//------------------------------ Ex No.7 Odd Occurrences -----------------------------------------
//------------------------------ Ex No.8 Piccolo -----------------------------------------

// function piccolo(input) {
//     let carNumbers = [];

//     for (const line of input) {
//         let [command, carNum] = line.split(', ');
//         if (command === 'IN' && !carNumbers.includes(carNum)) {
//             carNumbers.push(carNum);
//         } else if (command === 'OUT' && carNumbers.includes(carNum)) {
//             let index = carNumbers.indexOf(carNum);
//             carNumbers.splice(index, 1)
//         }
//     }

//     if (carNumbers.length === 0) {
//         console.log('Parking Lot is Empty')
//     } else {
//         let sortedNumbers = carNumbers.sort( (carNumA,carNumB) => carNumA.localeCompare(carNumB) )

//         sortedNumbers.forEach( (num) => {
//             console.log(num);
//         } )
//     }

// }

// piccolo(
//     ['IN, CA2844AA',
//         'IN, CA1234TA',
//         'OUT, CA2844AA',
//         'IN, CA9999TT',
//         'IN, CA2866HI',
//         'OUT, CA1234TA',
//         'IN, CA2844AA',
//         'OUT, CA2866HI',
//         'IN, CA9876HH',
//         'IN, CA2822UU']
// )
//------------------------------ Ex No.9 Make a Dictionary -----------------------------------------
//------------------------------ Ex No.10 Class Vehicle -----------------------------------------
// class Vehicle {
//     constructor(type, model, parts, fuel) {
//         this.type = type;
//         this.model = model;
//         this.parts = {
//             engine: parts.engine,
//             power: parts.power,
//             quality: parts.engine * parts.power,
//         }
//         this.fuel = fuel;
//     }

//     drive(fuel) {
//         this.fuel -= fuel
//     }
// }

// let parts = { engine: 6, power: 100 };

// let vehicle = new Vehicle('a', 'b', parts, 200);
// vehicle.drive(100);
// console.log(vehicle.fuel);
// console.log(vehicle.parts.quality);
