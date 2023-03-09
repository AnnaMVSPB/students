require('@babel/register');
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const renderComponents = require('./middleware/renderComponent');
const indexRouter = require('./routes/index.route');
const sessionConfig = require('./config/sessionConfig');
const {
  cookiesCleaner, getUser,
} = require('./middleware/auth');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cookieParser());
app.use(session(sessionConfig));
app.use(cookiesCleaner);
app.use(getUser);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(renderComponents);
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));

app.use('/', indexRouter);
app.listen(PORT, () => { console.log(`Сервер пашет на ${PORT} порту`); });
