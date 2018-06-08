'use strict'

const Hapi = require('hapi');
const path = require('path');
const Inert = require('inert');
const fs = require('fs');
const Request = require('request');
const nodemailer = require('nodemailer');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const server = new Hapi.Server({
  port: process.env.PORT || 3000
  // host: 'localhost'
});

let smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'geni.cube.429@gmail.com',
    pass: 'happyday0429?'
  }
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

  let mailOptions;

  server.route({
    method: 'POST',
    path: '/email',
    handler: async (request, h) => {
      mailOptions = {
        to: request.payload.email,
        subject: 'Please confirm your Email account [CuBe]',
        html: '<a href="http://localhost:3000/init/password">인증 완료</a>'
      }

      let isError = false;

      await smtpTransport.sendMail(mailOptions, (error, response) => {
        console.log(`send to ${response.envelope.to[0]}`);
        if (error) isError = true;
      });

      if (isError) return h.response('Error').code(500);
      return h.response('Email send success').code(200);
    }
  });

  server.route({
    method: 'POST',
    path: '/google-signin',
    handler: async (request, h) => {
      await console.log(request.payload);

      return h.response('hello!').code(200);
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