import express, { urlencoded } from 'express'
const app = express();
const PORT = 3000 || process.env.PORT
import connectDb from './config/connect.js';
import {message} from './models/message.js';
import { config } from 'dotenv';
import cors from 'cors'
import { Telegraf } from 'telegraf';

config()
connectDb()

app.use(cors())
app.use(express.json())
app.use(urlencoded({extended:true}))

app.get('/health',(req,res)=>{
  res.send('server is running healthy...');
})

app.post('/health',(req,res)=>{
  res.send('server is running healthy...');
})

app.listen(PORT,()=>{
    console.log(`app listen on ${PORT}`);
})
