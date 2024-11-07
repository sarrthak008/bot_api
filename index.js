import express from 'express'
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

const bot = new Telegraf('7950790583:AAEagDNrVgGgjrWav8DR9TamnqFHsbinZJU')
bot.start((ctx) => ctx.reply('Welcome'))



bot.launch(()=>{
    console.log('bot launched')
})

app.listen(PORT,()=>{
    console.log(`app listen on ${PORT}`);
})
