# Developer defined functions
Developers can establish their own JavaScript functions within the project by generating a new JavaScript file at any location. These functions must be exported, allowing them to be invoked in YAML workflows by specifying the JavaScript file path in the 'fn' keyword.

### Example

#### src/events/greet.yaml
```yaml
http.get./greet:
    fn: greet
    params:
      - name: name
        in: query
        schema:
          type: string
        required: true
    responses:
      200:
        content:
          application/json:
            schema:
              type: string  
```

### src/functions/greet.yaml
```yaml
summary: greet the user
description: this function greets the user by accepting the user name
tasks:
  - id: greet_task
    fn: greetings
    args:
      name: <%inputs.query.name%>
```

#### src/functions/greetings.js
```js
module.exports = function greet(name){
    return `Hello ${name}!`;
}
```

When making a request to the `http://localhost:3000/greet` API with the 'name' query parameter set to 'developer,' the expected response is as follows:
```bash
Hello developer!
```