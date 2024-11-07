import express from 'express'
const app = express();
const PORT = 3000 || process.env.PORT
import connectDb from './config/connect.js';
import {message} from './models/message.js';
import { config } from 'dotenv';
import cors from 'cors'
import { Telegraf } from 'telegraf';

config()
//connectDb()

app.use(cors())

const bot = new Telegraf('7950790583:AAEagDNrVgGgjrWav8DR9TamnqFHsbinZJU')
bot.start((ctx) => ctx.reply('Welcome'))

app.get('/helth', (req,res)=>{
    res.json({
        data:'hey master server is runnig healthy...🏃‍♀️',
        status:'200'
    })
})

app.get('/messages',async (req,res)=>{
    let allMessage = await message.find({})
    if(allMessage){
        res.json(allMessage).status(200)
    }else{
        res.send('not found yet or some thing went wrong')
    }
})


app.listen(PORT,()=>{
    console.log(`app listen on ${PORT}`);
})
