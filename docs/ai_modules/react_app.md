# Web-UI Starter Kit
## Introduction

Godspeed Web-UI Starter Kit simplifies the generation of a foundational front-end from OpenAPI/Swagger API specs. An AI agent creates the template with pre-established API connections.

> An Engineering Powered AI Scaffolding agent to help you generate codebase from bare minimum requirements.

Currently we support [React](https://react.dev/).

| Framework | Support     |
| --------- | ----------- |
| React     | ✅          |
| Vue       | Coming Soon |
| Svelte    | Coming Soon |
| Angular   | Coming Soon |
| Vanila JS | Coming Soon |

---

##### Tech Stack For React

* React-Query
* React-Router
* Tailwind

---

##### Essentials for Running this Package:

- OpenAI API/Microservice spec [Link](https://swagger.io/specification/)
- OpenAI/ChatGPT API Secret Key [Link](https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key)

---


### Steps for creating a New Project
* Install Godspeed GS-Kit by `npm i @godspeedsystems/uikit`
* Go to a directory /root
* create a .env file with these keys

  ```
  OPENAI_API_KEY=sk-xxx
  OPENAI_ORG_KEY=org-xxx
  ```

  > Note: If you dont have `OPENAI_ORG_KEY` then skip it
  >
* run -

  ```
  npx @godspeedsystems/uikit {app_type}
  ```
* Enter any app type that you want, currently we are supporting 'React-Web' for react web app.
   ```
    npx @godspeedsystems/uikit react-web
   ```
* Other tamplates are ***coming soon***. 

* It will ask you for the location and name of your OpenAPI file.
```
> npx @godspeedsystems/uikit react-web
[WARN] Importing from 'langchain' is deprecated. See https://js.langchain.com/docs/getting-started/install#updating-from-0052 for upgrade instructions.
┌  Generate front-end boilerplate using Godspeed
│
◆  What is the name of your project?
│  gskit-app_GodspeedTrialProject
└


```
* hit `Enter` after   
* Then it will ask about the where is the OpenAPI Spec file is located. Mention your file path over there.
```
> npx @godspeedsystems/uikit react-web
[WARN] Importing from 'langchain' is deprecated. See https://js.langchain.com/docs/getting-started/install#updating-from-0052 for upgrade instructions.
┌  Generate front-end boilerplate using Godspeed
│
◇  What is the name of your project?
│  gskit-app-godspeedTrial
{ name: 'gskit-app-godspeedTrial' }
│
◆  Where is your OpenAPI spec file located?
│  ./api.yaml_
└
```
* AI agent will read the OpenAPI spec and generate a react project with fetch hooks and tailwind configured.
* depends on the OpenAPI file it will take few seconds to create a project. In the below case the file name is api.yaml.
```
> npx @godspeedsystems/uikit react-web

[WARN] Importing from 'langchain' is deprecated. See https://js.langchain.com/docs/getting-started/install#updating-from-0052 for upgrade instructions.
┌  Generate front-end boilerplate using Godspeed
│
◇  What is the name of your project?
│  gskit-app-godspeedTrial
{ name: 'gskit-app-godspeedTrial' }
│
◇  Where is your OpenAPI spec file located?
│  ./api.yaml
│
◒  Cloning template.cloned godspeedsystems/gskit-react#main to ./gskit-app-godspeedTrial
◇  Template cloned
│
◇  Pick a Data fetching library
│  React Query
│
◓  Generating Fetch Hooks...
```
* After the Project is created it looks like...
```
> npx @godspeedsystems/uikit react-web

[WARN] Importing from 'langchain' is deprecated. See https://js.langchain.com/docs/getting-started/install#updating-from-0052 for upgrade instructions.
┌  Generate front-end boilerplate using Godspeed
│
◇  What is the name of your project?
│  gskit-app-godspeedTrial
{ name: 'gskit-app-godspeedTrial' }
│
◇  Where is your OpenAPI spec file located?
│  ./api.yaml
│
◒  Cloning template.cloned godspeedsystems/gskit-react#main to ./gskit-app-godspeedTrial
◇  Template cloned
│
◇  Pick a Data fetching library
│  React Query
│
◇  react-query fetch hooks generated
│
◇  Fetch hooks written to file
```
* One folder with the Project name will create in the root directory. ( your react project folder )
* Go to the new app folder and install the dependencies by `npm install`
* Run `npm start` command to run the react project.
* The Project will run on http://localhost:3000.
```
Compiled successfully!

You can now view gskit-react in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.188:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```
* if Port 3000 is busy it will ask to change the port.
```
? Something is already running on port 3000. Probably:
  node /Users/other_port_path
  in /Users/other_port_path

Would you like to run the app on another port instead? › (Y/n)
```
* After This the project folder will created. 

### What you will end up with

* React js application.
* Your Tailwind gets Configured.
* Your React Query is configured.       
* Ready for further development.
