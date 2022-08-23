import express from 'express'
import env from './config/env'

const app = express()
const PORT = env.SERVER_PORT

app.get('/', (req, res) => {
    console.log('Você está na rota principal')
    return res.send({message: 'Producer Server'})
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})