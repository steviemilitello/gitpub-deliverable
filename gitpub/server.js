const express = require('express')
const app = require('liquid-express-views')(express())
const port = 3000
const drinks = require('./models/drinks.js')

const reqLog = (req) => {
    console.log('===========================')
    console.log('this is the request object sent from the browser')
    console.log(`${req.method} request sent to ${req.url}`)
    console.log('req params are: ', req.params)
    console.log('===========================')
}

app.get('/', (req, res) => {
    reqLog(req)
    res.send('Welcome to the Gitpub App!')
})

// INDEX route for drinks 
app.get('/drinks', (req, res) => {
    // res.send(drinks)
    res.render('index', {drink: drinks})
})

// SHOW route for drinks 

app.get('drinks/:id', (req, res) => {
    res.render('show', {drink: drinks[req.params.id]})
})

app.listen(port, () => {
    console.log('server is running ', port)
})