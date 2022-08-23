import express from 'express'
import env from './config/env'

const app = express()
const PORT = env.SERVER_PORT

app.get('/', (req, res) => {
    return res.send({message: 'Consumer Server'})
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})