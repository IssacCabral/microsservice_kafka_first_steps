import env from 'dotenv'

env.config()

export default {
    TYPEORM_CONNECTION: process.env.TYPEORM_CONNECTION,
    TYPEORM_HOST:  process.env.TYPEORM_HOST,
    TYPEORM_USERNAME: process.env.TYPEORM_USERNAME,
    TYPEORM_PASSWORD: process.env.TYPEORM_PASSWORD,
    TYPEORM_DATABASE: process.env.TYPEORM_DATABASE,
    TYPEORM_PORT: process.env.TYPEORM_PORT,
    TYPEORM_SERVERPORT: process.env.TYPEORM_SERVERPORT,
    TYPEORM_MIGRATIONS: process.env.TYPEORM_MIGRATIONS,
    TYPEORM_MIGRATIONS_DIR: process.env.TYPEORM_MIGRATIONS_DIR
}