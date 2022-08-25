import { kafka } from "./kafka";

/**
 * Objeto que vai me permitir enviar mensagens para dentro de um tópico no kafka
 */
export const producer = kafka.producer({
    allowAutoTopicCreation: true
})

producer.connect().then(() => {
    console.log('[Purchases] Kafka producer connected!')
})