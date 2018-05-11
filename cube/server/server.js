'use strict'

const Hapi = require('hapi');
const path = require('path');
const Inert = require('inert');
const fs = require('fs'); 

const server = new Hapi.Server({
  port: 3333,
  host: 'localhost'
});

const start = async () => {
  await server.register(Inert);

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: path.resolve(__dirname, '..', 'build'),
        listing: false,
        index: true
      }
    }
  });

  await server.start();
  console.log(`Server is running at ${server.info.uri}`);
}

start();