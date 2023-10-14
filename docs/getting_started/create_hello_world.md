# Steps for creating a new project.
## Creating a godspeed project.

Let's create a project that includes a simple 'hello world' example for both [events](/docs/events/overview.md) and [functions](/docs/workflows/overview.md) to provide an overview of how these components function within the Godspeed framework.

1. Create a project using Godspeed CLI with below command:  
```bash
godspeed create hello-world # hello-world is the name of the app
```

Below is the sample for creating a project
```bash
> godspeed create hello-world # hello-world is the name of the app

     ~~~~~~ Godspeed CLI ~~~~~~

…  waiting   Cloning project template.
   success   Cloning template successful.
…  waiting   Generating project with default examples.
…  waiting   Generating project files.
   success   Successfully generated godspeed project  files.
…  waiting   Installing project dependencies.
   success   Successfully installed project          dependencies.
   success   

Successfully created the project hello-world.
Use `godspeed --help` command for available commands. Happy building microservices with Godspeed!. 

```
2.    Running the dev server. Navigate to the project root directory and run the below command.
```bash
> godspeed dev
```

It will start your app on localhost at default port number 3000, You can modify the port number as per your requirement. You can try out and check the hello-world API live.

**src/eventsources/http.yaml**
```yaml
type: express
port: 3000
```

