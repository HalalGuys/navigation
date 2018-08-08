const fs = require('fs');
const faker = require('faker');

let file = fs.createWriteStream('./listingsData0.csv');

const imageEndpoint = 'https://s3.amazonaws.com/fec-overview-service-images';

// file.write(`title, host, city, photoURL`)

for (let i = 0; i < 1000000; i++) {
    file.write(`${i},${faker.name.findName()},${faker.address.city()},${imageEndpoint}/home_${5}.jpg \n`)
}

file.end();

file = fs.createWriteStream('./listingsData1.csv');

for (let i = 1000000; i < 2000000; i++) {
    file.write(`${i},${faker.name.findName()},${faker.address.city()},${imageEndpoint}/home_${5}.jpg`)
}
file.end();

file = fs.createWriteStream('./listingsData2.csv');

for (let i = 2000000; i < 3000000; i++) {
    file.write(`${i},${faker.name.findName()},${faker.address.city()},${imageEndpoint}/home_${5}.jpg`)
}

file.end();

file = fs.createWriteStream('./listingsData3.csv');

for (let i = 3000000; i < 4000000; i++) {
    file.write(`${i},${faker.name.findName()},${faker.address.city()},${imageEndpoint}/home_${5}.jpg`)
}
file.end();

file = fs.createWriteStream('./listingsData4.csv');

for (let i = 4000000; i < 5000000; i++) {
    file.write(`${i},${faker.name.findName()},${faker.address.city()},${imageEndpoint}/home_${5}.jpg`)
}

file.end();

file = fs.createWriteStream('./listingsData5.csv');

for (let i = 5000000; i < 6000000; i++) {
    file.write(`${i},${faker.name.findName()},${faker.address.city()},${imageEndpoint}/home_${5}.jpg`)
}
file.end();

file = fs.createWriteStream('./listingsData6.csv');

for (let i = 6000000; i < 7000000; i++) {
    file.write(`${i},${faker.name.findName()},${faker.address.city()},${imageEndpoint}/home_${5}.jpg`)
}

file.end();

file = fs.createWriteStream('./listingsData7.csv');

for (let i = 7000000; i < 8000000; i++) {
    file.write(`${i},${faker.name.findName()},${faker.address.city()},${imageEndpoint}/home_${5}.jpg`)
}
file.end();

file = fs.createWriteStream('./listingsData8.csv');

for (let i = 8000000; i < 9000000; i++) {
    file.write(`${i},${faker.name.findName()},${faker.address.city()},${imageEndpoint}/home_${5}.jpg`)
}

file.end();

file = fs.createWriteStream('./listingsData9.csv');

for (let i = 9000000; i < 10000001; i++) {
    file.write(`${i},${faker.name.findName()},${faker.address.city()},${imageEndpoint}/home_${5}.jpg`)
}

file.end();