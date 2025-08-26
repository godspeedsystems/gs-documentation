---
title: Environment Variables
description: Learn how to set up and use environment variables in a Godspeed project using the .env file.
keywords: [environment variables, .env file, security, configuration, API keys, secrets]
---
# Environment Variables

In a Godspeed project, the .env file is a standard way to define environment-specific variables. 
Using this file offers several advantages:

- **Security:** Sensitive information (like API keys and secrets) is stored outside of the codebase, helping prevent accidental exposure.
- **Environment-Based Configuration:** You can specify different values for variables based on your environment, allowing seamless transitions between development, testing, and production.
- **Easy Access Across the Project:** The variables defined in .env can be accessed easily in Godspeed configurations, functions and scripts.

.env file is placed in the root directory of your project.
```
|
├── .env
```

> **Note**: For sensitive information such as secrets or passwords, it is recommended to use environment variables in this way to avoid hardcoding values directly in your configuration files.


## How to Set Up and Use the .env File

**Define Variables in the .env File:**
 Add key-value pairs for each environment variable. Here’s an example of what you might define in a Godspeed project:

`.env`
```
    # API configurations

    API_URL=https://api.example.com
    API_KEY=your_api_key_here

    # Database configurations
    DATABASE_URL=postgres://user:password@localhost:5432/mydatabase

    # JWT Authentication configurations
    JWT_SECRET=my_jwt_secret
    JWT_ISSUER=https://my-issuer.com
    JWT_AUDIENCE=https://my-audience.com

    # Third-party service credentials
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    GOOGLE_CLIENT_SECRET=your_callback_url
```


 ### To access environment variables directly:

  You can access env variables directly using **process.env** in your code if:  

   - Your application is small or you have **simple configuration needs**.
   - You want to keep things lightweight without adding external dependencies.
   - You’re deploying on a platform that easily handles environment variables, such as **cloud services** (AWS, Heroku) or **Docker containers**.
   - Your configuration is **mostly static** and doesn’t require complex overrides or defaults.
    

  **Syntax to refer to these variables in YAML** 
  ```
   <% process.env.VARIABLE_NAME %>   //with scripting
  ```
  **Syntax to refer to these variables in typescript**
  
   ```
   process.env.VARIABLE_NAME         //without scripting

   ``` 