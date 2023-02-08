# The Lord of the Rings SDK

This SDK is a thin wrapper around the [Lord of the Rings API](https://the-one-api.dev/documentation), making it easier for other developers to access the movie data from the API.

## Installation

You can install this SDK using npm:

```bash
    cd my-project
    npm install ehsan-lord-of-the-ring
```

## Usage

You can use this SDK in your JavaScript application by importing it and creating an instance:
javascript

```javascript
    const LordOfTheRingsAPI = require("ehsan-lord-of-the-ring");

    const api = new LordOfTheRingsAPI();

```

## API

The SDK provides the following methods:

`getMovies()`: Returns a list of all Lord of the Rings movies.

`getMovieById(id)`: Returns a Lord of the Rings movie by its ID.

`getQuotesForMovie(id)`: Returns a list of quotes for a Lord of the Rings movie by its ID.

Each method returns a Promise that resolves with the data from the API. If an error occurs, the Promise will be rejected with an error.

## Testing

You can run the test suite for this SDK by executing the following command in your terminal:
bash

```bash
    npm test
```
