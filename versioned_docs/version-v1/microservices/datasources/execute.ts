import { randomUUID } from "crypto";

export default async function(args:{[key:string]:any;}) {
    console.log('** com.sample.execute args: %o',args);
    let kafka: any;
    if(args.datasource) {
        kafka = args.datasource.client;
        let data = args.data;

        if (!Array.isArray(args.data)) {
            data = [args.data];
        }
    
        let producer = await kafka.producer();
    
        console.log('** Sending messages to topic %s', args.config.topic);
    
        return producer.send({
            topic: args.config.topic,
            messages: data.map((value:any) => ({
                key: randomUUID(),
                value: JSON.stringify(value)
            })),
        });
    } else {
        console.error('** datasource not defined');
        return { success: false, code: 500, data: 'datasource not found in the workflow' };
    }
}