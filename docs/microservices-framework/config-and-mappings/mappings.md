---
sidebar_position: 3
title: Mappings
---

# Mappings

Mappings is a global object which will be available in your microservice. You can define anything in the mappings i.e. key/value pair map, array, etc. You can access these mappings inside your workflows at any time.

## Project structure
Mappings are present in `src/mappings` directory. The default format is yaml and you can store mappings in the nested directories also. The nested directories are also accessible in the same `mappings` object.
```
.
├── config
└── src
    └── mappings
        └── index.yaml
        └── generate.yaml
```

## Sample mappings
This is a sample mapping which is accessible in the workflows inside mappings object using `mappings.Gender` and `mappings.generate.genId`   
```yaml title="index.yaml"
Gender:
  Male: M
  Female: F
  Others: O
```

```yaml title="generate.yaml"
genId: 12345
```
:::tip Note
If the file name is index.yaml then its content is available directly at global level i.e. you don't need to write index explicitly while accessing the mappings object like `mappings.Gender`.    
However, for other file names you need to mention the file name while accessing the mappings object like `mappings.generate.genId`
:::

Sample workflow accessing mappings object:
```
  - id: httpbinCof_step1
    description: Hit http bin with some dummy data. It will send back same as response
    fn: datasource.api.post./anything
    args:
      params:
      data:
        personal_email_id: 'ala.eforwich@email.com'
        gender: <% mappings.Gender[inputs.body.Gender] %>
        id:  <% mappings.generate.genId %>
```

## Use mappings constants in other mapping files
You can use mapping constants in other mapping files using coffee/js scripting.

For example, you have mapping files `index.yaml`, `relations.json` and `reference.yaml`. Use the mappings from first two files as reference in the third file as follows:   
 
```yaml title="index.yaml"
Gender:
  Male: M
  Female: F
  Others: O
```

```json title="relations.json"
{
    "id": 1,
    "title": "Hello World",
    "completed": false,
    "gender": "<%mappings.Gender.Male%>"
}
```

```yaml title="reference.yaml"
NewGender: <% mappings.Gender.Others %>
title:  <% mappings.relations.title %>
```