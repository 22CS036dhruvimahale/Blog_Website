//server contains the backend of the project
//express server
//this the the entry point/file

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Router from './Routes/route.js';


dotenv.config();

const app=express();                //initializing express as a func

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',Router);

const PORT=8000;

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);

app.listen(PORT,() => console.log(`Server is running successfully on port ${PORT}`));//to make express server,second function is the call back function


