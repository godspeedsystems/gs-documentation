import { Kafka, Producer }  from 'kafkajs';
import axios from 'axios';
import nodeCleanup from 'node-cleanup';

class KafkaMessageBus {
    config: Record<string, any>;

    kafka: Kafka;

    _producer?: Producer;

    async producer() {
        if (!this._producer) {
            let p = this.kafka.producer();
            try {
              await p.connect();
              nodeCleanup(function() {
                console.log('* calling kafka producer disconnect...');
                //@ts-ignore
                this.disconnect();
              }.bind(p));
              this._producer = p;
            } catch(error){
              console.error('* error: ',error);
            }

        }

        return this._producer;
    }

    constructor(config: Record<string, any>) {
        this.config = config;

        console.log('* loader.ts: Connecting to kafka ', config);

        let brokers = config.brokers;

        if (typeof(brokers) == 'string') {
          brokers = brokers.split(',').map(s => s.trim());
        }

        this.kafka = new Kafka({
            clientId: config.client_id,
            brokers: config.brokers ? config.brokers : async () => {
                //Getting brokers from Confluent REST Proxy
                const clusterResponse = await axios(`${config.kafka_rest_base_url}/v3/clusters`, {
                  headers:  {
                    Accept:  'application/vnd.api+json',
                  }
                });

                const clusterUrl = clusterResponse.data[0].links.self;

                const brokersResponse = await axios(`${clusterUrl}/brokers`, {
                  headers: {
                    Accept: 'application/vnd.api+json',
                  }
                });

                const brokers = brokersResponse.data.map((broker: any) => {
                  const { host, port } = broker.attributes;
                  return `${host}:${port}`;
                });

                return brokers;
              },
        });

        this.producer();
    }
}

export default async function(args:{[key:string]:any;}) {
    const ds = {
        ...args,
        client: new KafkaMessageBus(args)
        };
    return ds;    
}