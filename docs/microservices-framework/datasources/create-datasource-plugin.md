---
title: Create npm plugin for your custom datasource
description: Learn how to create an npm plugin for your custom datasource.
keywords: [npm plugin, custom datasource, CLI, plugin repo]
---
# Create npm plugin for your custom datasource

Godspeed has a [plugin based](https://github.com/godspeedsystems/gs-plugins.git) ecosystem and you can install the plugins using [CLI](/docs/microservices-framework/cli/godspeed-cli.md).Now let us understand  <a href="https://github.com/godspeedsystems/gs-plugins/blob/main/README.md">how can you contribute a plugin</a>.

In this section, let us understand how a developer can contribute a plugin to godspeed [plugin repo](https://github.com/godspeedsystems/gs-plugins.git) or for internal use.

### Steps to create new plug-in in godspeed framework:

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


**If you opt for `DataSource`, the `index.ts` file appears as follows:**

  ```

    import { GSContext,  GSDataSource, GSStatus, PlainObject,} from "@godspeedsystems/core";

    export default class DataSource extends GSDataSource {
    protected async initClient(): Promise<object> {
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
    const SourceType = 'DS';
    const Type = "y"; // this is the loader file of the plugin, So the final loader file will be `types/${Type.js}`
    const CONFIG_FILE_NAME = "y"; // in case of event source, this also works as event identifier, and in case of datasource works as datasource name
    const DEFAULT_CONFIG = {};

    export {
      DataSource,
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
### Watch the videos below for better understanding!

### 1. How to create plugins using godspeed?

Here is a video which helps you create a plugin using the godspeed. Do watch for better understanding

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/owQEuBO8_lk" frameborder="0" allowfullscreen></iframe>
</div>


### 2. How to get started with a godspeed datasource plugin - installed from npm

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
    <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/YzvYjYujBMk" frameborder="0" allowfullscreen></iframe>
</div>
