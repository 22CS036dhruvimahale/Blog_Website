import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import router from './routes/route.js';
dotenv.config();

const app=express();   
app.use('/',router);




const PORT=8000;

app.listen(PORT,() => console.log(`Server is running successfully on port ${PORT}`));//to make express server,second function is the call back function

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;


Connection(USERNAME,PASSWORD);
