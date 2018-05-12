'use strict'

const Hapi = require('hapi');
const path = require('path');
const Inert = require('inert');
const fs = require('fs');
const Request = require('request');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const cheerio = require('cheerio');

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

  server.route({
    method: 'GET',
    path: '/channel',
    handler: async (request, h) => {
      const channelLink = request.query.channelLink;
      let options = {
        url: channelLink,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'
        }
      }

      let channelInfo = {
        subscriberCount: 0
      }
      
      function parsing() {
        return new Promise((resolve, reject) => {
          let data = Request(options, (error, response, body) => {
            if (error) reject(error);

            const dom = new JSDOM(body).window.document;
            let subscriberCount = dom.getElementsByClassName('yt-subscription-button-subscriber-count-branded-horizontal')[0].textContent.split(',').join('');
            channelInfo.subscriberCount = Number.parseInt(subscriberCount);

            resolve(channelInfo);
          });
        })
      }

      try {
        let parsed = await parsing();
        
        return h.response(channelInfo).code(200);
      } catch(e) {
        console.log(e);

        return h.response('error').code(500);
      }
    }
  });

  await server.start();
  console.log(`Server is running at ${server.info.uri}`);
}

start();