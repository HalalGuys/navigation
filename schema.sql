DROP DATABASE IF EXISTS listings;
CREATE DATABASE listings;
\c listings;


CREATE TABLE searchListing (
    listingId SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    host VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    photoURL VARCHAR(200) NOT NULL
);

CREATE TABLE searchRecord (
    id SERIAL PRIMARY KEY,
    recordText VARCHAR(30) NOT NULL,
    createdAt DATE NOT NULL
);


-- psql example < schema.sql
