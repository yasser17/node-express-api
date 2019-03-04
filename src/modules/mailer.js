const path = require('path')

const nodemailer = require('nodemailer')

const exphbs = require('express-handlebars')

const hbs = require('nodemailer-express-handlebars')
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525, 
    auth: {
      user: "3ccde1d2713a01",
      pass: "42f78378a5c481"
    }
});


const viewPath = path.resolve('./src/resources/mail/');

transport.use('compile', hbs({
  viewEngine: exphbs.create({ partialsDir: path.resolve('./src/resources/mail/partials') }),
  viewPath,
  extName: '.html'
}));﻿

module.exports = transport;