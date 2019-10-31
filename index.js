const express = require('express');
const cors = require('cors')
const helmet = require('helmet')

const app = express()
const port = process.env.PORT || 9800

app.use(express.json())
app.use(helmet())
app.use(cors())

const friends = [
    {
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Doe"
    },
    {
        id: 3,
        name: "Mary"
    }
]

app.get('/api/friends', (req, res) => {
    res.status(200).json(friends)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})