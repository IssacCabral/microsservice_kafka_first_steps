import {Kafka} from 'kafkajs'
import env from '../config/env'

// if(!env.KAFKA_BROKER){
//     throw new Error('kafka broker address not set!')
// }

export const kafka = new Kafka({
    clientId: 'purchases',
    brokers: ['kafka1:9092', 'kafka2:9092']
})