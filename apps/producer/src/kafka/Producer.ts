import { Kafka, Producer as KafkaProducer, Message } from 'kafkajs'

interface IProduceProps {
    topic: string
    messages: Message[]
}

export default class Producer {
    private producer: KafkaProducer

    construtor() {
        const kafka = new Kafka({
            brokers: ['kafka:9092']
        })

        this.producer = kafka.producer({
            allowAutoTopicCreation: true
        })
    }

    public async produce({topic, messages}: IProduceProps){
        await this.producer.connect().then(() => {
            console.log('[Purchases] Kafka producer connected!')
        })

        await this.producer.send({
            topic,
            messages
        })

        await this.producer.disconnect()
    }
}