---
sidebar_position: 3
title: Plugins
---

# Script Plugins

Plugins are utility JS/TS synchronous functions designed to enhance inline scripting capabilities. You can write any piece of code in a plugin and access it inside your inline scripts at any time.

They can be use like this         
```
date: <% time_epoch_convertEpochToDate(inputs.body.datetimestamp) %>
```

:::tip
Note: These are not to be confused with eventsource and datasource plugins. 
:::

## Project structure
Plugins are present in `src/plugins` directory. The default format is js/ts and you can store plugins in the nested directories also.
```
.
├── config
└── src
    └── plugins
        └── index.ts
        └── time
            └── epoch.ts
        └── epoch
            └── convertEpoch.ts
```
## How they are loaded?
:::tip Note
1. If the file name is index.ts then its content is available directly at global level i.e. you don't need to write index explicitly while accessing the plugin e.g. `randomInt`.    
2. For other file names you need to mention the file name using underscore notation while accessing the plugins function inside your workflow e.g. `time_epoch_convertEpochToDate`
3. If it's a default import then you don't need to mention the plugin function name e.g. `epoch_convertEpoch`
:::

## Sample plugins
These are the sample plugins file which export plugin functions named `randomInt` and `convertEpochToDate`.
```ts title="plugins/index.ts"
export function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

```ts title="plugins/time/epoch.ts"
import format from 'date-fns/format';

export function convertEpochToDate(inputTimestamp: string){
    const newDateTime = new Date(inputTimestamp);
    return format(newDateTime, 'yyyy-MM-dd HH:mm:ss');
}
```

```ts title="plugins/epoch/convertEpoch.ts"
import format from 'date-fns/format';

export default function convertEpoch(inputTimestamp: string){
    const newDateTime = new Date(inputTimestamp);
    return format(newDateTime, 'yyyy-MM-dd HH:mm:ss');
}
```
<!-- 
## Sample workflow using plugins
You can use these plugins in your workflows as given below:
```
  - id: httpbinCof_step1
    description: Hit http bin with some dummy data. It will send back same as response
    fn: datasource.api.post./anything
    args:
      data:
        personal_email_id: 'ala.eforwich@email.com'
        id: <% 'UID-' + randomInt(1,9) %>
        date: <% time_epoch_convertEpochToDate(inputs.body.datetimestamp) %>
        default_date: <% epoch_convertEpoch(inputs.body.datetimestamp) %>

``` -->