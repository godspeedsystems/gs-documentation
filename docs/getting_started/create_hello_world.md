# Steps for creating a new project.
## Creating a godspeed project.
Let's create a project that includes a simple 'hello world' example for both [events](/docs/events/overview.md) and [functions](/docs/workflows/overview.md) to provide an overview of how these components function within the Godspeed framework.

```bash
  godspeed create hello-world # hello-world is the name of the app
```

** below is the sample for creating a project** 
    
```bash

       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝


…  waiting   Cloning project template.
✔  success   Cloning template successful.
…  waiting   Generating project with default examples.
…  waiting   Generating project files.
✔  success   Successfully generated godspeed project files.


dependencies installed successfully!

Successfully created the project hello-world.
Use `godspeed help` command for available commands. 

Happy building microservices with Godspeed! 🚀🎉


```
     
```

    .
    ├── src
        ├── datasources
        │   ├── types
        │   |    └── axios.ts
        |   |
        │   └── api.yaml
        │
        ├── events
        |   |
        │   └── helloworld.yaml
        |
        ├── eventsources
        │   ├── types
        │   |    └── express.ts
        |   |
        │   └── http.yaml
        |
        └── functions
            |
            └── helloworld.yaml


```


4. Running the dev server. Navigate to the project root directory and run.

```bash
  godspeed dev
```

5. It will start your app on localhost on default port number 3000, if you can modify the port number as per your requirement. You can try out your hello-world API is live.

**src/eventsources/http.yaml**
```yaml
type: express
port: 3000
```

