# Morfy - Backend Challenge

Welcome to the Morfy Backend Challenge! This challenge involves using Node.js, Express, and MongoDB to create a backend application.

## Requirements

### Node.js

Ensure you have Node.js installed. We recommend using [nvm](https://github.com/nvm-sh/nvm) to manage your Node.js versions. Install the latest LTS version (Hydrogen v18.20.4 or greater):

```bash
nvm install lts/hydrogen
nvm use
```

### MongoDB

Download and install [MongoDB v6.0](https://docs.mongodb.com/manual/installation/) or a later version.

## Setup

1. **Environment Variables**: Create a `.env` file for development. Refer to the [.env.example](.env.example) file for the required environment variables.

2. **Install Dependencies**: Run the following command to install the necessary npm packages:

```bash
npm install
```

## Running

To start the server with file watching and automatic reloading, use:

```bash
npm run dev
```

You should see output similar to:


```json
{ "message": "App listening on port 3000!", "level": "info" }
```

## Tests

To run the test suite using [mocha](https://mochajs.org/):

1. **Environment Variables**: Create a `.env.test` file for unit testing.

2. **Run tests**: Use the following command to run the tests:

```bash
npm run test
```

## Challenge

Open [http://localhost:3000](http://localhost:3000) in your browser to start the challenge!

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
