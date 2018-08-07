# CRUD
To get Listings, send a get request to /api/searchListings/

To get search Records, send a get request to /api/searchRecords

To post a new search record, send a post request to /api/searchRecords with the data you want in the request body in this shape:
{ text: your text }

To update listing, send a put request to /api/searchListings/:listingId with the id you want to be deleted in place of :listingId
and in the request body put the new data you want in the format of the following:
{
  listingId: { type: Number, unique: true },
  title: String,
  host: String,
  city: String,
  photo: String,
};

To delete a listing, send a delete request to /api/searchListings/:listingId with the id you want to be deleted in place of :listingId


# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

