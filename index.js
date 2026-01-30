const express = require("express")

const app = express()

app.get('/home', (req, res) => {
    res.send('Home')
})

//==============================================================================================//

// Query parameters

app.get('/multiplication/:num1/:num2', (req, res) => {
    const num1 = Number(req.params.num1)
    const num2 = Number(req.params.num2)
    res.send(`multiplication = ${num1 * num2}`)
})

// Ex 
// localhost:3000/multiplication/10/20

//==============================================================================================//

// Body parameters

app.use(express.json())

app.post('/name', (req, res) => {
    res.send(`My name is : ${req.body.name}`)
})

// Ex (in the body)
// {
//     "name": "Imad"
// }

//==============================================================================================//

// Query parameters 

app.get('/age', (req, res) => {
    res.send(`My age is : ${req.query.age}`)
})

// Ex 
// localhost:3000/age?age=20

//==============================================================================================//

app.listen(3000, () => {
    console.log("i am listening !")
})


// building html with EJS 

app.get('/index', (req, res) => {


    res.render('index.ejs', {
        name: "Imad",
        age: 20,
        field: "Petroleum Industry"
    })
})

// unit 01

console.log("Hi Node")
console.log(10 + 20)

// unit 02

const math = require('./math')
console.log(math.sum(3,5))

// process
console.log(`Current directory: ${__dirname}`)
console.log(`Current file: ${__filename}`)

// global
global.myName = 'Imad'
console.log(myName)

// timing (ex: setTimeout, ...)
setTimeout(() => {
    console.log('Generated after 2 seconds')
},2000)

// unit 03
