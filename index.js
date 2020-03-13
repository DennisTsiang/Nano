const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000
const fullyQualifiedURL = process.env.REDIRECT || "http://localhost:8040"
app.get('*', (req, res) => res.redirect(fullyQualifiedURL + req.originalUrl))

app.listen(port, () => console.log(`Nano listening on port ${port}!`))
