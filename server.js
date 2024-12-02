const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const helmet = require('helmet');
const compression = require('compression');
  const indexRouter = require('./routes');
  /* Helmet can help protect app from some well-known web
vulnerabilities by setting HTTP headers appropriately.*/
  app.use(helmet());

  // Enabling Gzip compression
  app.use(compression());

  // view engine setup
  app.set('views', path.join(__dirname, '/public/views'));
  app.set('view engine', 'pug');

  app.use(express.json());
  app.use(express.urlencoded({extended: false}));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/api', indexRouter);

  // Error handler

  app.listen(4001, () => console.log('Application running on port:4001'));
