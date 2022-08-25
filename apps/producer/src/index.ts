import "reflect-metadata"
import express from 'express'
import env from './config/env'
import './database/data-source'
import mainRouter from "./routes/main-router"

const app = express()
const PORT = env.TYPEORM_SERVERPORT

app.use(express.json())
app.use(mainRouter)

app.get('/', (req, res) => {
    console.log('Você está na rota principal')
    return res.send({message: 'Producer Server'})
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})