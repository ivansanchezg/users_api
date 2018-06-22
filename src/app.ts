import express = require('express');
import bodyParser = require('body-parser');
import mongoose = require('mongoose');
import { router } from './routes';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/users');

const port: number = Number(process.env.PORT) || 8080;

app.use('/api', router);
app.listen(port);
console.log('API running on http://localhost:' + port + "/api");
