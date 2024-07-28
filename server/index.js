//server contains the backend of the project
//express server
//this the the entry point/file

import express from 'express';
import dotenv from 'dotenv';

import Connection from './database/db.js';

dotenv.config();

const app=express();                  //initializing express as a func

const PORT=8000;
app.listen(PORT,() => console.log(`Server is running successfully on port ${PORT}`));//to make express server,second function is the call back function



const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);