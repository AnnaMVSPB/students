require('@babel/register');
const express = require('express');

const cors = require('cors');
const indexRouter = require('./routes/index.route');

const app = express();

const PORT = 4000;

const corsOptions = { origin: ['http://localhost:3000'], credentials: true };
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);

app.listen(PORT, () => { console.log(`Сервер пашет на ${PORT} порту`); });
