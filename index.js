//console.log("learning the express.js framework:")
const express = require('express')
require('dotenv').config()
const app = express()
//const port = 3000

console.log('process.env.PORT = ',process.env.PORT )
console.log('process.env.URL = ',process.env.URL )

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login',(req,res)=>{
    res.send('Login Page');
})

app.get('/signup',(req,res)=>res.send('<h1>sign up now </h1>'))

app.get('/youtube',(req,res)=>{
    res.send('<h2>youTube</h2>')
})
app.get('/jsondata',(req,res)=>{
    res.json([
        {
            name:"Bharat",
            age:23,
            city:"indore"
        },
        {
            name:"saurabh",
            age:22,
            city:"delhi"
        },
        {
            name:"sandip",
            age:24,
            city:"bhopal"
        },
        {
            name:"saurabh",
            age:22,
            city:"delhi"
        }
    ])
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})