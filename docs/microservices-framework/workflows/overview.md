---
title: Workflows or Functions in Meta Framework
---

The Meta Framework allows you to write business logic in [Typescript and Javascript functions](/docs/microservices-framework/workflows/native-language-functions.md) or [YAML Workflows](./yaml-workflows/overview.md)

You may use any language depending on your choice. We suggest to prefer Typescript over Javascript for type check reasons. And we recommend to use YAML when you wish to express logic in minimal lines of code. In the end, all three ways will allow you to express any business logic based on  your needs.


### Video explanation of functions

<div style={{ margin: '20px auto', textAlign: 'center' }}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/66TxoXEPKUc" frameBorder="0" allowFullScreen></iframe>
</div>

### Writing event handler functions
#### Typescript
```typescript
module.exports = function greet(GSContext: ctx){
    return `Hello ${ctx.inputs.data.query.name}!`;
}
```
#### Javascript
```javascript
module.exports = function greet(ctx){
    return `Hello ${ctx.inputs.data.query.name}!`;
}
```

#### Yaml
```yaml
summary: greet the user
description: this function greets the user by accepting the user name
tasks:
  - id: greet_task
    fn: greetings
    args:
      name: <%inputs.query.name%>
```