import env from 'dotenv'

env.config()

export default {
    SERVER_PORT: process.env.SERVER_PORT
}