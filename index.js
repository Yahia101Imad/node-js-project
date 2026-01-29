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