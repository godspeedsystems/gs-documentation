# Steps for creating a new project.


## Creating a godspeed project.

Let's create a project that includes a simple 'hello world' example for both [events](/docs/microservices-framework/event-sources/event-schema.md) and [functions](/docs/microservices-framework/workflows/overview.md) to provide an overview of how these components function within the Godspeed framework.

1. Create a project using Godspeed CLI with below command:
```bash
godspeed create hello-world # hello-world is the name of the app
```

Below is the sample for creating a project
```bash
> godspeed create hello-world # hello-world is the name of the app

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
Framework will give you below folder structure.
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

2. 3000 is the default port number,if you want to provide your custom port number, you can modify the port number from **"./src/eventsources/http.yaml"**

```yaml
type: express
port: 3000
```
3.  Run `godspeed serve` to start the development server.

```bash
godspeed serve
```
4. The server is up and running on port 3000 ([http://localhost:3000/helloworld](http://localhost:3000/helloworld))


<img src="https://ik.imagekit.io/pavanKillada/helloworld.webp?updatedAt=1697782618204" alt="hello world output"/>

**Voila!** Your API backend is up and running. You can use Postman to test your API's.



### Let's try Our sample project Repl:

<a href="https://replit.com/@GodspeedSystems/Godspeed-sample-project">
<img src="https://ik.imagekit.io/pavanKillada/replit.png?updatedAt=1699698406263" width="800" height="400" alt="replit" />
</a>


Happy building with Godspeed!
