const express = require('express')
const route = require('./routes/route')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.use(express.json())
const PORT = process.env.PORT || 3000

app.use('/', route)

app.use((req, res) => {
    res.status(404).send({ status: false, message: `Page Not Found , Given URL ${req.url} is incorrect for this application.` })
})

app.listen(PORT, () => console.log(`connected to ${PORT}`))