## Introduction

This SDK is designed to provide a simple and convenient way for developers to access the movie data from the Lord of the Rings API. The SDK uses the Axios library to make HTTP requests to the API and returns the data in a format that is easy to work with in JavaScript.

## Design

The SDK is implemented as a class with methods for each endpoint of the movie API. The methods return Promises making it easy to use the SDK in a asynchronous environment such as Node.js.

## Endpoints

The following endpoints are covered by this SDK:

`/movie`: Returns a list of all Lord of the Rings movies.

`/movie/{id}`: Returns a Lord of the Rings movie by its ID.

`/movie/{id}/quote`: Returns a list of quotes for a Lord of the Rings movie by its ID.

## Implementation

The SDK is implemented using JavaScript and the Axios library. The Axios library is used to make HTTP requests to the Lord of the Rings API and returns the data in a format that is easy to work with in JavaScript. The SDK uses Promises to handle the asynchronous nature of the API requests and makes it easy to handle errors that occur during the requests.

## Deployment

The SDK is deployed as a npm package, making it easy for other developers to install and use in their projects.

## Conclusion

This SDK provides a simple and convenient way for developers to access the movie data from the Lord of the Rings API. The SDK is easy to use and provides a convenient way to handle errors that occur during API requests. With its deployment as an npm package, it is also easy to share and use in other projects.
