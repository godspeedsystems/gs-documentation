# Create npm plugin for your custom eventsource

Godspeed has a [plugin based](https://github.com/godspeedsystems/gs-plugins.git) ecosystem and you can install the plugins using [CLI](/docs/microservices-framework/CLI.md).

In this section, let us understand how a developer can contribute a plugin to godspeed [plugin repo](https://github.com/godspeedsystems/gs-plugins.git) or for internal use. 

### Steps to create new plug-in:

1. Begin by installing the `godspeed-plugin-generator` globally using the following commands:

   ```bash
   npm install -g generator-godspeed-plugin
   npm install -g yo
   ```

2. To initiate the creation of your plugin, execute the following command in your terminal:

   ```bash
   yo godspeed-plugin
   ```

3. After running the above command, you'll be prompted to enter your desired plugin name. Proceed by typing it in:

   ```bash
   ? Enter your plugin name: (your-plugin-name)
   ```

4. Select the type of plugin that aligns with your project's requirements. You can choose from the following options:

   ```bash
   ? Select the type of plugin: (Use arrow keys)
   ❯ DataSource 
     EventSource 
     DataSource-As-EventSource 
   ```

   ⚠️ **Note:** In certain network environments, particularly on WiFi connections, you may encounter a `Request failed with status code 403` error due to network security protocols or firewall restrictions that 
   block specific API requests. To bypass this limitation, consider switching to a **mobile data hotspot**, which often has fewer restrictions. This workaround can help ensure successful command execution and 
   avoid network-related request failures.

5. Depending on your selection, the plugin generator will generate a template with your chosen plugin name, such as "your-plugin-name-as-datasource." The structure of the generated files will be as follows:

   ```
   .
   ├── src
   |   └── index.ts
   |
   ├── package.json
   |
   ├── README.md
   |
   ├── tsconfig.json
   |
   ├── .gitignore
   |
   └── .npmignore
   ```

6. To customize your plugin, navigate to the `index.ts` file located in the `src` directory. You can modify the content within this file to meet your specific plugin requirements. There's no need to make changes to any other files outside of `index.ts`.

**If you opt for `EventSource`, the `index.ts` file appears as follows:**
  ```
    import { PlainObject, GSActor, GSCloudEvent, GSStatus, GSEventSource, GSDataSource, GSContext } from "@godspeedsystems/core";


    class EventSource extends GSEventSource {

    protected initClient(): Promise<PlainObject> {
        // initialize your client
    }
    async subscribeToEvent(eventRoute: string, eventConfig: PlainObject, processEvent: (event: GSCloudEvent, eventConfig: PlainObject) => Promise<GSStatus>): Promise<void> {
        try {
          //  subscribeToEvent
          
        } catch (error) {
          throw error;
        }
    }
    }

    const SourceType = 'ES';
    const Type = "p"; // this is the loader file of the plugin, So the final loader file will be `types/${Type.js}`
    const CONFIG_FILE_NAME = "p"; // in case of event source, this also works as event identifier, and in case of datasource works as datasource name
    const DEFAULT_CONFIG = {};

    export {
      EventSource,
      SourceType,
      Type,
      CONFIG_FILE_NAME,
      DEFAULT_CONFIG
    }
  ```
**If you opt for `DataSource-As-EventSource `, the `index.ts` file appears as follows:**

  ```

    import { GSContext, GSDataSource, PlainObject, GSDataSourceAsEventSource, GSCloudEvent, GSStatus, GSActor} from "@godspeedsystems/core";

    class DataSource extends GSDataSource {
      protected async initClient(): Promise<PlainObject> {
        try {
          
          // initialize your client
        } catch (error) {
          throw error;
        }

      }

      async execute(ctx: GSContext): Promise<any> {
        try {
          // execute methods
          
        } catch (error) {
          throw error;
        }
      }
    }

    class EventSource extends GSDataSourceAsEventSource {
      async subscribeToEvent(
        eventKey: string,
        eventConfig: PlainObject,
        processEvent: (
          event: GSCloudEvent,
          eventConfig: PlainObject
        ) => Promise<GSStatus>
      ): Promise<void> {

        //  subscribeToEvent
      }
    }
    const SourceType = 'BOTH';
    const Type = "shirisha"; // this is the loader file of the plugin, So the final loader file will be `types/${Type.js}`
    const CONFIG_FILE_NAME = "shirisha"; // in case of event source, this also works as event identifier, and in case of datasource works as datasource name
    const DEFAULT_CONFIG = {};

    export {
      DataSource,
      EventSource,
      SourceType,
      Type,
      CONFIG_FILE_NAME,
      DEFAULT_CONFIG
    }
  ``` 
7. For better understanding checkout Examples and watch following videos

      [AWS](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/aws-as-datasource/src/index.ts) (DataSource)

      [CRON](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/cron-as-eventsource/src/index.ts) (EventSource)

      [KAFKA](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/kafka-as-datasource-as-eventsource/src/index.ts) (DataSource-As-EventSource)

### How to create plugins using godspeed?

Here is a video which helps you create a plugin using the godspeed. Do watch for better understanding

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/owQEuBO8_lk" frameborder="0" allowfullscreen></iframe>
</div>


### How to get started with a godspeed plugin if installed from npm

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
    <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/YzvYjYujBMk" frameborder="0" allowfullscreen></iframe>
</div>

