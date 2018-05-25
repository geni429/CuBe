'use strict'

const Hapi = require('hapi');
const path = require('path');
const Inert = require('inert');
const fs = require('fs');
const Request = require('request');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

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

      let channelInfo = {
        channelName: '',
        subscriberCount: '',
        views: '',
        registerDate: '',
        profileImgSrc: ''
      }

      function parsingAboutData() {
        let options = {
          url: `${channelLink}/about`,
          headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'
          }
        }

        return new Promise((resolve, reject) => {
          Request(options, (error, response, body) => {
            if (error) reject(error);

            const dom = new JSDOM(body).window.document;

            console.log(dom.querySelector('#gh-banner'));

            let channelName = dom.querySelector('.qualified-channel-title-text a').textContent;
            let subscriberCount = dom.querySelectorAll('.about-stats .about-stat')[0].textContent;
            let views = dom.querySelectorAll('.about-stats .about-stat')[1].textContent;
            let registerDate = dom.querySelectorAll('.about-stats .about-stat')[2].textContent;
            let registerDateArr = registerDate.replace(/\./gi, '').split(' ');
            let profileImgSrc = dom.querySelector('.appbar-nav-avatar').getAttribute('src');
            let bannerImg;

            channelInfo.channelName = channelName;
            channelInfo.subscriberCount = subscriberCount.split(' ')[1].replace(/명/, '');
            channelInfo.views = views.split(' ')[3].replace(/회/, '');
            channelInfo.registerDate = {
              year: registerDateArr[1],
              month: registerDateArr[2],
              day: registerDateArr[3]
            };
            channelInfo.profileImgSrc = profileImgSrc;

            resolve(channelInfo);
          });
        });
      }

      try {
        await parsingAboutData();
        
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