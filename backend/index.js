const { default: axios } = require('axios')
const express=require('express')
const { env } = require('process')

const app=express()

app.get('/',(req,res)=>{
   axios.get(env("url")) 
})

app.listen(3000,()=>{
    console.log(`server is running on port 3000`)
})

