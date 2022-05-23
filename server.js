require('dotenv').config()
const express = require('express')

const app=express()
const mongoose = require('mongoose')


mongoose.connect(process.env.DATABASE_URL)
const db=mongoose.connection
db.on('error', err => console.error(err))
db.once('open', () => console.log('Connected to database'))

app.use(express.json())

const subscribersRouter=require('./routers/subscribers')
app.use('/',subscribersRouter)

app.listen(5000,()=>console.log('listening on 5000'))