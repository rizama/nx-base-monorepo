import { Injectable } from '@nestjs/common';
import { PayloadInterface } from '@nx-base-monorepo/payload-message';
import { Kafka } from 'kafkajs';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AppService {
    getData(): { message: string } {
        return { message: 'Welcome to case-kafka!' };
    }

    async producer(): Promise<void> {
        const kafka = new Kafka({
            clientId: 'my-app',
            brokers: [process.env.KAFKA_BROKER_URI1],
        });

        const producer = kafka.producer({
            allowAutoTopicCreation: false,
        });

        const status = [true, false];

        await producer.connect();
        for (let index = 0; index < 10; index++) {
            const data: PayloadInterface = {
                id: uuid(),
                message: `Test Kafka From NX - ${index + 1}`,
                status: status[Math.floor(Math.random() * 2)],
            };

            await producer.send({
                topic: 'tms-mono-dev-test-2',
                messages: [
                    { key: `key-${index}`, value: JSON.stringify(data), partition: 0 },
                ],
            });
        }

        await producer.disconnect();
    }

    async consumer(): Promise<void> {
        const kafka = new Kafka({
            clientId: 'my-app',
            brokers: [process.env.KAFKA_BROKER_URI1],
        });

        const consumer = kafka.consumer({ groupId: 'local_dev_test' });

        await consumer.connect();
        await consumer.subscribe({
            topic: 'tms-mono-dev-test-2',
            fromBeginning: false,
        });

        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                console.log({
                    topic,
                    partition,
                    value: message.value.toString(),
                });
            },
        });
    }
}
