# Level up your data-fetching game with Axios

In Godspeed, Axios is used as a datasource plugin for making HTTP requests to external APIs or services. 
This allows your application to communicate with third-party services or other microservices by sending requests
and receiving responses in a structured way. Axios simplifies the process of making requests, 
handling authentication, managing headers, handling errors, 
and retrying requests, which is especially useful for complex workflows or external integrations.

## Step-by-Step Guide:

### **Step 1: Configure Axios as a Datasource**

1. Create a godspeed project from the CLI and by default the axios plugin is integrated into your project if not, add the plugin from the CLI and select the **"axios-as-datasource" plugin** to integrate the plugin.

   ```bash
   godspeed plugin add
   ```

2. **Open the Axios Configuration file**: In your project, go to `src/datasources/<api.yaml>`. This file will define the base configuration for Axios.

3. **Define the Axios Settings**: Configure Axios to set the base URL and any custom headers or authentication needed for interacting with the third-party API.

   Example `api.yaml`:

   ```yaml
   type: axios
   base_url: https://httpbin.org

   timeout: 5000  # Timeout in milliseconds
   headers:
     Authorization: "Bearer <YOUR_ACCESS_TOKEN>"
     Content-Type: application/json

   retry:
     max_attempts: 3
     interval: PT10S  # Retry every 10 seconds if there's an error
     type: constant
     
   ```

   ### Explanation:
   - **base_url**: The base URL of the third-party API. You can use `https://httpbin.org` as base url for testing.
   - **timeout**: Time in milliseconds before an Axios request times out.
   - **headers**: Custom headers for authentication or content type.
   - **retry**: Retry configuration for failed API calls.

---

### **Step 2: Set Up an Event**

1. **Create an Event to Trigger the Workflow**: Define an HTTP event to trigger the workflow and call the third-party API.
 Example `fetchData.yaml`:

```yaml
http.get./fetch-data:
  fn: fetchDataWorkflow
  authn: false
  params:
    - name: test_input
      in: query
      required: true
      schema:
        type: string
  responses:
    200:
      content:
        application/json:
          schema:
            type: object
```
  ### Explanation:
   - **http.get./fetch-data:**: The first line of any http event defines the (protocol.Method./end-point)
   Here, /fetch-data is the end point which will send a get request to third party API by calling a workflow.
   - **fn**: fn defines the workflow function to be called. here it is, fetchDataWorkflow.


### **Step 3: Set Up Workflow to Use the Axios Datasource**

 Go to `src/functions/` and create a file (e.g., `fetchDataWorkflow.yaml`).Use the Axios configuration to make the API call. You can specify the endpoint, HTTP method, and any parameters needed for the request.

```yaml
  summary: Calls the third-party API using Axios
  tasks:
  - id: fetchDataWorkflow
    fn: datasource.api.get./anything
    args:
      data:
        <% inputs.query.id %>
    on_error:
      continue: false
```

   ### Explanation:

   - **fn: datasource.api.get./anything** - References a predefined Axios function `axiosRequest` to make the API call which contains:-

     - **api**: it will be the name of confguration file of the axios datasource. User can give it any name like api1, api2. Same name will be used here.
     - **get**: HTTP method for example, Get/Post/Put
     - **/anything**: The endpoint of the API, relative to the base URL. Here, /anything is the endpoint given by user relative to the base url defined in api.yaml above. So it will send request to this url https://httpbin.org/anything
     - **params**: Optional query parameters.

   - **on_error**: Defines error handling if the API call fails.


### Step 4: Start the Server and Test the API:
   ```bash
   godspeed serve
   ```

   - Go to `http://localhost:3000/api-docs` to access Swagger UI.
   - Test the `/fetch-data` endpoint to ensure the third-party API call is working and data is being returned.

---

Following these steps, you’ll be able to interact with third-party APIs in Godspeed using Axios while keeping the configuration modular and manageable.