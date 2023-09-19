---
sidebar_position: 7
title: Config Loading
---

## Introduction

In Godspeed landscape, a configuration can be expressed in two ways.

### Way 1: For simple and small configuration

When the config is simple and small, it is perhaps better to put all of it in a single yaml/json/toml file

**sample_project_module.yaml**

```
  user
    name: 'Ayush'
      address:
        city: 'Dharamsala'
        locality:
          pincode: 176052
          landmark: 'Hill ventures adventure park'

```

### Way 2: For large and complex configuration

But when a configuration is growing large and has many nested components, it is perhaps better to break them in separate folder/file structure, for better readability and maintenance.
Within any folder,

- If there is an index.yaml/toml/json, its keys will be loaded at the root path ending at that folder's name.
- Any other files' data is loaded under the key of that filename
- Nested folders' data is loaded recursively using the same approach, under the key of the nested folders

> The config loader in GS will load collated JSON from nested configurations stored in folder structure and give the same output as if it was stored within a single file.

**sample_project_module**

```
./sample_project_module
  index.yaml
    name: 'Ayush'                     //Contents of index.yaml file
  address
    index.yaml
      city: 'Dharamsala'              //Content of address/index.yaml file
    locality.yaml
      pincode: 176052
      landmark: 'Hill ventures adventure park'
```

### Conclusion

**Both these settings will ead to the same output as shown in Way 1.**
