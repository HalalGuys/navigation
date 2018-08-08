const fs = require('fs');
const faker = require('faker');

let file = fs.createWriteStream('./listingsIdAndName0.csv');

const imageEndpoint = 'https://s3.amazonaws.com/fec-overview-service-images';

file.write(`title, host, city, photoURL`)

for (let i = 0; i < 1000000; i++) {
    file.write(`${i},${faker.random.words()}${i}\n`)
}

file.end();

file = fs.createWriteStream('./listingsIdAndName1.csv');

for (let i = 1000000; i < 2000000; i++) {
    file.write(`${i},${faker.random.words()}${i}\n`)
}
file.end();

file = fs.createWriteStream('./llistingsIdAndName2.csv');

for (let i = 2000000; i < 3000000; i++) {
    file.write(`${i},${faker.random.words()}${i}\n`)
}

file.end();

file = fs.createWriteStream('./listingsIdAndName3.csv');

for (let i = 3000000; i < 4000000; i++) {
    file.write(`${i},${faker.random.words()}${i}\n`)
}
file.end();

file = fs.createWriteStream('./listingsIdAndName4.csv');

for (let i = 4000000; i < 5000000; i++) {
    file.write(`${i},${faker.random.words()}${i}\n`)
}

file.end();

file = fs.createWriteStream('./listingsIdAndName5.csv');

for (let i = 5000000; i < 6000000; i++) {
    file.write(`${i},${faker.random.words()}${i}\n`)
}
file.end();

file = fs.createWriteStream('./listingsIdAndName6.csv');

for (let i = 6000000; i < 7000000; i++) {
    file.write(`${i},${faker.random.words()}${i}\n`)
}

file.end();

file = fs.createWriteStream('./listingsIdAndName7.csv');

for (let i = 7000000; i < 8000000; i++) {
    file.write(`${i},${faker.random.words()}${i}\n`)
}
file.end();

file = fs.createWriteStream('./listingsIdAndName8.csv');

for (let i = 8000000; i < 9000000; i++) {
    file.write(`${i},${faker.random.words()}${i}\n`)
}

file.end();

file = fs.createWriteStream('./listingsIdAndName9.csv');

for (let i = 9000000; i < 10000001; i++) {
    file.write(`${i},${faker.random.words()}${i}\n`)
}

file.end();