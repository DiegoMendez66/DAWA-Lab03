const express = require('express')

const port = 3500

const app = express()

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/myfile', (req, res) => {
    res.sendFile('/arquitectura.png', {
        root: __dirname
    })
})

app.get('/user', (req, res) => {
    res.json({ nombre:"Diego",
               apellido:"Mendez",
               edad:21,
               points:[1,2,3],
               adress: {
                ciudad: "Lima - Peru",
                distrito: "Ate",
                calle: "Av 2 de Mayo"
               }
            })
})

app.get('/isAlive', (req, res) => {
    res.sendStatus(204)
})