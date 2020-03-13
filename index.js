const express = require('express')
require('dotenv').config()

const app = express()
const port = 3000
const azunyanFullyQualifiedURL = process.env.AZUNYAN || "http://localhost:8040"
app.get('*', (req, res) => res.redirect(azunyanFullyQualifiedURL + req.originalUrl))

app.listen(port, () => console.log(`Nano listening on port ${port}!`))
