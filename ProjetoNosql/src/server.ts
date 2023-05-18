import express, {Request, Response} from 'express';
import path from 'path';
import dotenv from 'dotenv';
import mustache  from 'mustache-express';
import {mongoConnect} from './database/mongo';
import router from './routes';

dotenv.config();
mongoConnect();
const server = express();

server.set('view engine', 'mustache');
server.engine('mustache', mustache());

server.set('views', path.join(__dirname, 'views' ));
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));
server.use(router);


server.listen(process.env.PORT);



