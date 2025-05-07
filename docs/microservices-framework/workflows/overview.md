---
title: Workflows or Functions in Meta Framework
---

The Meta Framework allows you to write business logic in [Typescript and Javascript functions](/docs/microservices-framework/workflows/native-language-functions.md)
You may use any language depending on your choice. We suggest to prefer Typescript over Javascript for type check reasons. 


### Video explanation of functions

<!-- <div style={{ margin: '20px auto', textAlign: 'center' }}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/66TxoXEPKUc" frameBorder="0" allowFullScreen></iframe>
</div> -->

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/E33GqpTr4iw?si=Er9oRp9L6YzH8EJt" frameborder="0" allowfullscreen></iframe>
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

