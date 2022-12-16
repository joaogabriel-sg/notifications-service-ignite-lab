import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['normal-gibbon-12666-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'bm9ybWFsLWdpYmJvbi0xMjY2NiQSae48M1u1DAvb0iVNkwGZpH_KcGNnLdiJeAs',
          password:
            'l0WW760M9JnKA_07iWHyYxtEHiFDspZ6RNUr8XLce-czxeQmc1KJkBMXU-QTZ9aiigj-hQ==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
