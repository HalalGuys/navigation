const faker = require('faker');

console.log(`title, host, city, photoURL`)

const imageEndpoint = 'https://s3.amazonaws.com/fec-overview-service-images';

for (let i = 0; i < 10; i++) {
    console.log(`${faker.random.words()},${faker.name.findName()},${faker.address.city()},${imageEndpoint}/home_${5}.jpg`)
}
