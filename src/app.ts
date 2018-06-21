import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import { router } from './routes';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/users');

const port: number = Number(process.env.PORT) || 8080;

app.use('/api', router);
app.listen(port);
console.log('API running on http://localhost:' + port + "/api");
