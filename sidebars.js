/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: "category",
      label: "1. Microservices Framework",
      items: [
        {
          type: "category",
          label: "1. Introduction",
          items: [
            {
              type: "doc",
              label: "1.1. Overview",
              id: "microservices-framework/introduction/overview",
            },
            {
              type: "doc",
              label: "1.2. Tenets",
              id: "microservices-framework/introduction/tenets",
            },
            {
              type: "doc",
              label: "1.3. Design Principles",
              id: "microservices-framework/introduction/design-principles",
            },
            {
              type: "doc",
              label: "1.4. Guard Rails",
              id: "microservices-framework/introduction/guard-rails",
            },
          ],
        },

        // {
        //   type: "doc",
        //   label: "1. Introduction",
        //   id: "microservices-framework/introduction",
        // },
        // {
        //   type: "doc",
        //   label: "2. Tenets and Design Principles",
        //   id: "microservices-framework/tenets-and-design-principles",
        // },
        {
          type: "category",
          label: "2. Guide",
          items: [
            {
              type: "doc",
              label: "2.1. Getting Started",
              id: "microservices-framework/guide/get-started",
            },
            {
              type: "doc",
              label: "2.2. Detailed Walkthrough",
              id: "microservices-framework/guide/walkthrough",
            },
            // {
            //   type: "doc",
            //   label: "2.3. Advance Guide",
            //   id: "microservices-framework/getting-started/advance-guide",
            // },
          ],
        },
        {
          type: "doc",
          label: "3. CLI",
          id: "microservices-framework/CLI",
        },
        {
          type: "doc",
          label: "5. Generate CRUD API",
          id: "microservices-framework/CRUD_API",
        },
        {
          type: "category",
          label: "6. Event sources",
          items: [
            {
              type: "doc",
              label: "6.1. Overview",
              id: "microservices-framework/event-sources/overview",
            },
            {
              type: "doc",
              label: "6.2. Event Schema",
              id: "microservices-framework/event-sources/event-schema",
            },

            {
              type: "category",
              label: "6.3. Event Types",
              items: [
                {
                  type: "doc",
                  label: "6.3.1. Overview",
                  id: "microservices-framework/event-sources/event-types/overview",
                },
                {
                  type: "doc",
                  label: "6.3.2. Http Events",
                  id: "microservices-framework/event-sources/event-types/http-events",
                },
                {
                  type: "doc",
                  label: "6.3.3. Cron Events",
                  id: "microservices-framework/event-sources/event-types/cron-events",
                },
                {
                  type: "doc",
                  label: "6.3.4. Kafka Events",
                  id: "microservices-framework/event-sources/event-types/kafka-events",
                },
                {
                  type: "doc",
                  label: "6.3.5. Apollo Graphql Events",
                  id: "microservices-framework/event-sources/event-types/graphql-events",
                },
              ],
            },
            {
              type: "category",
              label: "6.4. Validations",
              items: [
                {
                  type: "doc",
                  label: "6.4.1. Schema Validation",
                  id: "microservices-framework/event-sources/validations/schema-validation",
                },
                {
                  type: "doc",
                  label: "6.4.2. Validation Error",
                  id: "microservices-framework/event-sources/validations/validation-error",
                },
              ],
            },
            // {
            //   type: "doc",
            //   label: "4.4. Schema Validation",
            //   id: "microservices-framework/event-sources/schema-validation"
            // },
            {
              type: "doc",
              label: "6.5. Create custom event source",
              id: "microservices-framework/event-sources/create-custom-event-source",
            },

            {
              type: "doc",
              label: "6.6. Create event source plugin",
              id: "microservices-framework/event-sources/create-eventsource-plugin",
            },
            {
              type: "category",
              label: "6.7. Eventsource Plugins",
              // id: "microservices-framework/event-sources/event-source-plugins",
              items: [
                {
                  type: "doc",
                  label: "6.7.1. Overview",
                  id: "microservices-framework/event-sources/event-source-plugins/Overview",
                },
                {
                  type: "doc",
                  label: "6.7.2. Express - Http Eventsource",
                  id: "microservices-framework/event-sources/event-source-plugins/Express Http Eventsource",
                },
                {
                  type: "doc",
                  label: "6.7.3. Cron Eventsource",
                  id: "microservices-framework/event-sources/event-source-plugins/Cron Eventsource",
                },
                {
                  type: "doc",
                  label: "6.7.4. Kafka Eventsource",
                  id: "microservices-framework/event-sources/event-source-plugins/Kafka Eventsource",
                },
                {
                  type: "doc",
                  label: "6.7.5. GraphQl Eventsource",
                  id: "microservices-framework/event-sources/event-source-plugins/Apollo GraphQl Eventsource",
                },
                {
                  type: "doc",
                  label: "6.7.6. Fastify Eventsource",
                  id: "microservices-framework/event-sources/event-source-plugins/Fastify Eventsource",
                },
              ],
            },
            // {
            //   type: "doc",
            //   label: "4.8. Validation Error",
            //   id: "microservices-framework/event-sources/on-validation-error"
            // },
            // {
            //   type: "doc",
            //   label: "4.7. Swagger Specs",
            //   id: "microservices-framework/event-sources/swagger-specs"
            // },
          ],
        },
        {
          type: "category",
          label: "7. Workflows",
          items: [
            {
              type: "doc",
              label: "7.1. Overview",
              id: "microservices-framework/workflows/overview",
            },
            {
              type: "doc",
              label: "7.2. Native language workflows",
              id: "microservices-framework/workflows/native-language-functions",
            },
            {
              type: "category",
              label: "7.3. Yaml workflows",
              // id: "microservices-framework/workflows/yaml-dsl-functions"
              items: [
                {
                  type: "doc",
                  label: "7.3.1. Overview",
                  id: "microservices-framework/workflows/yaml-workflows/overview",
                },
                {
                  type: "doc",
                  label: "7.3.2. Workflow DSL",
                  id: "microservices-framework/workflows/yaml-workflows/workflow-dsl",
                },
                {
                  type: "doc",
                  label: "7.3.3. Inbuilt workflows",
                  id: "microservices-framework/workflows/yaml-workflows/inbuilt-workflows",
                },
              ],
            },
            // {
            //   type: "doc",
            //   label: "5.3. Custom workflows",
            //   id: "workflows/custom_workflows"
            // },

            // {
            //   type: "doc",
            //   label: "5.4. Retry",
            //   id: "workflows/retry"
            // },
          ],
        },
        {
          type: "category",
          label: "8. DataSources",
          items: [
            {
              type: "doc",
              label: "8.1. Overview",
              id: "microservices-framework/datasources/overview",
            },
            {
              type: "category",
              label: "8.2. Databases",
              items: [
                {
                  type: "doc",
                  label: "8.2.1. Overview",
                  id: "microservices-framework/databases/Overview",
                },
                {
                  type: "doc",
                  label: "8.2.2. MongoDB",
                  id: "microservices-framework/databases/MongoDB",
                },
                {
                   type: "doc",
                   label: "8.2.3. MySQL",
                   id: "microservices-framework/databases/MySQL",
                 },
                 {
                  type: "doc",
                  label: "8.2.4. PostgreSQL",
                  id: "microservices-framework/databases/PostgreSQL",
                 },
               
                 {
                   type: "doc",
                    label: "8.2.5 SQL Server",
                    id: "microservices-framework/databases/SQLServer",
                 },
                 {
                    type: "doc",
                    label: "8.2.6 CokroachDB",
                    id: "microservices-framework/databases/CokroachDB",
                 },
                 {
                    type: "doc",
                    label: "8.2.7 MariaDB",
                    id: "microservices-framework/databases/MariaDB",
                 },
                 {
                  type: "doc",
                  label: "8.2.8. PlanetScale",
                  id: "microservices-framework/databases/PlanetScale",
                },
              ],
            },
            {
              type: "category",
              label: "8.4. Datasource Plugins",
              items: [
                {
                  type: "doc",
                  label: "8.4.1. Overview",
                  id: "microservices-framework/datasources/datasource-plugins/Overview",
                },
                {
                  type: "doc",
                  label: "8.4.2. Prisma Datasource",
                  id: "microservices-framework/datasources/datasource-plugins/Prisma Datasource",
                 },
                 {
                   type: "doc",
                   label: "8.4.3. Axios Datasource",
                   id: "microservices-framework/datasources/datasource-plugins/Axios Datasource",
                 },
                {
                  type: "doc",
                  label: "8.4.4. AWS Datasource",
                  id: "microservices-framework/datasources/datasource-plugins/AWS Datasource",
                },
                {
                  type: "doc",
                  label: "8.4.5. Nodemailer Datasource",
                  id: "microservices-framework/datasources/datasource-plugins/Nodemailer Datasource",
                },
                {
                  type: "doc",
                  label: "8.4.6. Redis Datasource",
                  id: "microservices-framework/datasources/datasource-plugins/Redis Datasource",
                },
                {
                  type: "doc",
                  label: "8.4.7. Mongoose Datasource",
                  id: "microservices-framework/datasources/datasource-plugins/Mongoose Datasource",
                },

                {
                  type: "doc",
                  label: "8.4.8. Kafka Datasource",
                  id: "microservices-framework/datasources/datasource-plugins/Kafka Datasource",
                },
                
                {
                  type: "category",
                  label: "8.4.9 ElasticGraph",
                  items: [
                    {
                      type: "doc",
                      label: "8.4.9.1 Elasticgraph as Datasource",
                      id: "microservices-framework/datasources/datasource-plugins/elasticgraph/elasticgraph",
                    },
                    {
                      type: "doc",
                      label: "8.4.9.2 Feature Set of Elasticgraph",
                      id: "microservices-framework/datasources/datasource-plugins/elasticgraph/feature-set-of-elasticgraph",
                    },
                  ],
                },
                {
                  type: "doc",
                  label: "8.4.10. Memcached Datasource",
                  id: "microservices-framework/datasources/datasource-plugins/Memcached Datasource",
                },
              ],
            },
            {
              type: "doc",
              label: "8.5. Create Custom DataSource",
              id: "microservices-framework/datasources/create-custom-datasource",
            },
          
            {
              type: "doc",
              label: "8.6. Create DataSource Plugin",
              id: "microservices-framework/datasources/create-datasource-plugin",
            },

            {
              type: "doc",
              label: "8.7. Caching",
              id: "microservices-framework/datasources/caching",
            },
          ],
        },
        // {
        //   type: "category",
        //   label: "7. Authentication",
        //   items: [
        //     {
        //       type: "doc",
        //       label: "7.1. Overview",
        //       id: "authentication/Overview"
        //     },
        //     {
        //       type: "doc",
        //       label: "7.2. Configuration",
        //       id: "authentication/configuration"
        //     },
        //   ],
        // },
        {
          type: "category",
          label: "9. Authentication",
          items: [
            {
              type: "doc",
              label: "9.1.Overview",
              id: "microservices-framework/authentication/overview",
            },
            {
              type: "doc",
              label: "9.2.JWT Authentication",
              id: "microservices-framework/authentication/jwt-authentication",
            },
            {
              type: "doc",
              label: "9.3.Custom Authentication",
              id: "microservices-framework/authentication/custom-authentication",
            },
          ],
        },
        {
          type: "category",
          label: "10. Authorization",
          items: [
            {
              type: "doc",
              label: "10.1.Overview",
              id: "microservices-framework/authorization/overview",
            },
            {
              type: "doc",
              label: "10.2.Authz Usecases",
              id: "microservices-framework/authorization/authz-usecases",
            },
          ],
        },
        {
          type: "category",
          label: "11. Configs and Mappings",
          items: [
            {
              type: "doc",
              label: "11.1. Config",
              id: "microservices-framework/config-and-mappings/config",
            },
            {
              type: "doc",
              label: "11.2. Mappings",
              id: "microservices-framework/config-and-mappings/mappings",
            },
          ],
        },
        {
          type: "category",
          label: "12. Inline scripting",
          items: [
            {
              type: "doc",
              label: "12.1. Overview",
              id: "microservices-framework/inline-scripting/overview",
            },
            {
              type: "doc",
              label: "12.2. Script Plugins",
              id: "microservices-framework/inline-scripting/script-plugins",
            },
          ],
        },
        // {
        //   type: "doc",
        //   label: "11. VScode extention",
        //   id: "microservices-framework/vscode-extension/language-tools",
        // },
        {
          type: "category",
          label: "13. Telemetry",
          items: [
            {
              type: "doc",
              label: "13.1. Overview",
              id: "microservices-framework/telemetry/overview",
            },
            {
              type: "category",
              label: "13.2. Configuration",
              items: [
                {
                  type: "doc",
                  label: "13.2.1. Generic",
                  id: "microservices-framework/telemetry/configuration",
                },
                {
                  type: "doc",
                  label: "13.2.2. Traces",
                  id: "microservices-framework/telemetry/tracing",
                },
                {
                  type: "doc",
                  label: "13.2.3. Metrics",
                  id: "microservices-framework/telemetry/metrics",
                },
                {
                  type: "doc",
                  label: "13.2.4. Logs",
                  id: "microservices-framework/telemetry/logging",
                },
              ]
            },
            {
              type: "doc",
              label: "13.3. Custom traces, logs and metrics (BPM)",
              id: "microservices-framework/telemetry/custom-metrics-logs-traces"
            },
          ],
        },
       
      ],

      // {
      //   type: "doc",
      //   label: "1. Introduction",
      //   id: "introduction",
      // },
      // {
      //   type: "doc",
      //   label: "2. Design Principles",
      //   id: "design_principles",
      // },
      // {
      //   type: "category",
      //   label: "3. Getting started",
      //   items: [
      //     {
      //       type: "doc",
      //       label: "3.1. Overview",
      //       id: "getting-started/overview"
      //     },
      //     {
      //       type: "doc",
      //       label: "3.2. Sample project",
      //       id: "getting-started/create-hello-world"
      //     },
      //     {
      //       type: "doc",
      //       label: "3.3. Blog project",
      //       id: "getting-started/create-blog-project"
      //     },
      //     // {
      //     //   type: "doc",
      //     //   label: "3.4. Godspeed on Existing project",
      //     //   id: "getting-started/gs_on_existing_proj"
      //     // }
      //   ]
      // },
      // {
      //   type: "category",
      //   label: "4. Event Sources",
      //   items: [
      //     {
      //       type: "category",
      //       label: "4.1. Events",
      //       items: [
      //         {
      //           type: "doc",
      //           label: "4.1.1. Overview",
      //           id: "events/overview"
      //         },
      //       ],
      //     },
      //     {
      //       type: "doc",
      //       label: "4.2. Overview",
      //       id: "event-sources/overview"
      //     },
      //     {
      //       type: "doc",
      //       label: "4.3. Event Source Plugins",
      //       id: "event-sources/event_source_plugins"
      //     },
      //     {
      //       type: "doc",
      //       label: "4.4. Create Your Event Source",
      //       id: "event-sources/create-your-event-source"
      //     },
      //   ],
      // },
      // {
      //   type: "category",
      //   label: "5. Workflows/Functions",
      //   items: [
      //     {
      //       type: "doc",
      //       label: "5.1. Overview",
      //       id: "workflows/overview"
      //     },
      //     {
      //       type: "doc",
      //       label: "5.2. Custom workflows",
      //       id: "workflows/custom_workflows"
      //     },
      //     {
      //       type: "doc",
      //       label: "5.3. Inbuilt workflows",
      //       id: "workflows/inbuilt_workflows"
      //     },
      //     // {
      //     //   type: "doc",
      //     //   label: "5.4. Retry",
      //     //   id: "workflows/retry"
      //     // },
      //   ],
      // },
      // {
      //   type: "category",
      //   label: "6. Data Sources",
      //   items: [
      //     {
      //       type: "doc",
      //       label: "6.1. Overview",
      //       id: "data_sources/overview"
      //     },
      //     {
      //       type: "doc",
      //       label: "6.2. Data source plugins",
      //       id: "data_sources/datasource_plugins"
      //     },
      //     {
      //       type: "doc",
      //       label: "6.3. Create Your data source",
      //       id: "data_sources/create_your_data_source"
      //     },
      //   ],
      // },
      // // {
      // //   type: "category",
      // //   label: "7. Authentication",
      // //   items: [
      // //     {
      // //       type: "doc",
      // //       label: "7.1. Overview",
      // //       id: "authentication/Overview"
      // //     },
      // //     {
      // //       type: "doc",
      // //       label: "7.2. Configuration",
      // //       id: "authentication/configuration"
      // //     },
      // //   ],
      // // },
      // {
      //   type: "category",
      //   label: "7. Authorization",
      //   items: [
      //     {
      //       type: "doc",
      //       label: "7.1. Overview",
      //       id: "authorization/overview"
      //     },
      //   ],
      // },
      // {
      //   type: "category",
      //   label: "8. Config",
      //   items: [
      //     {
      //       type: "doc",
      //       label: "8.1. Overview",
      //       id: "config/overview"
      //     },
      //   ],
      // },
      // {
      //   type: "category",
      //   label: "9. Caching",
      //   items: [
      //     {
      //       type: "doc",
      //       label: "9.1. Overview",
      //       id: "caching/overview"
      //     },
      //   ],
      // },
      // {
      //   type: "doc",
      //   label: "10. CLI",
      //   id: "CLI"
      // },
      // {
      //   type: "doc",
      //   label: "11. Language Tools",
      //   id: "language_tools"
      // },
      // {
      //   type: "category",
      //   label: "12. Telemetry",
      //   items: [
      //     {
      //       type: "doc",
      //       label: "12.1. Overview",
      //       id: "telemetry/overview"
      //     },
      //   ],
      // },
    
    },

    
    {
      type: "doc",
      label: " FAQs",
      id: "microservices-framework/faqs"
    },
    // {
    //   type: "category",
    //   label: "3. Web-UI Starter Kit",
    //   items: [
    //     {
    //       type: "doc",
    //       label: "3.1. React App",
    //       id: "ai-modules/react-app",
    //     },
    //   ],
    // },
  ],
};

module.exports = sidebars;

// As discussed in the previous blog of the series, we have discussed about four main issues of FOSS community
// 1.unethical uses
// 2. lack of contribution by community.
// 3. lack of sustainability of open core model
//   - difficult to sustain
//   - inherant conflict
// 4. open core model - limited version - only used for marketing - no practical use

// In this blog  ,let us review what could be an alternative approach for the community which is fair for everybody

