/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    'welcome',
    {
      type: "category",
      label: "Microservices Framework",
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
              label: "1.2. Why Godspeed?",
              id: "microservices-framework/introduction/benefits",
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
        {
          type: "category",
          label: "2. Getting Started",
          items: [
            {
              type: "doc",
              label: "2.1. Installation",
              id: "microservices-framework/guide/get-started",
            },
            {
              type: "doc",
              label: "2.2. My First Project",
              id: "microservices-framework/guide/first-project",
            },
            {
              type: "doc",
              label: "2.3. Detailed Walthrough",
              id: "microservices-framework/guide/walkthrough",
            },
            {
              type: "doc",
              label: "2.4. Environment Configuration",
              id: "microservices-framework/config-and-mappings/config",
            },
          ],
        },
        {
          type: "doc",
          label: "3. FAQs & Guides",
          id: "microservices-framework/guides",
        },    
        {
          type: "doc",
          label: "4. CLI",
          id: "microservices-framework/CLI",
        },
        {
          type: "doc",
          label: "5. Generate CRUD APIs",
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
              label: "6.2. Custom event source",
              id: "microservices-framework/event-sources/create-custom-event-source",
            },

            {
              type: "doc",
              label: "6.3. Create npm plugin",
              id: "microservices-framework/event-sources/create-eventsource-plugin",
            },
            {
              type: "doc",
              label: "6.4. Eventsource Plugins",
              id: "microservices-framework/event-sources/event-source-plugins/Overview",
            },
            {
              type: "doc",
              label: "6.5. Plugin- Express for HTTP",
              id: "microservices-framework/event-sources/event-source-plugins/Express Http Eventsource",
            },
                        {
              type: "doc",
              label: "6.6. Plugin- Fastify for HTTP",
              id: "microservices-framework/event-sources/event-source-plugins/Fastify Eventsource",
            }, 
            {
              type: "doc",
              label: "6.7. Plugin- Cron",
              id: "microservices-framework/event-sources/event-source-plugins/Cron Eventsource",
            },
            {
              type: "doc",
              label: "6.8. Plugin- Kafka",
              id: "microservices-framework/event-sources/event-source-plugins/Kafka Eventsource",
            },
            {
              type: "doc",
              label: "6.9. Plugin- GraphQl",
              id: "microservices-framework/event-sources/event-source-plugins/Apollo GraphQl Eventsource",
            },    
            {
              type: "doc",
              label: "6.10. Setup Middleware",
              id: "microservices-framework/event-sources/event-source-plugins/Setup Middleware",
            },      
          ],
        },         
        {
          type: "category",
          label: "7. API & Event",
          items: [
            {
              type: "doc",
              label: "7.1. Overview",
              id: "microservices-framework/event-sources/events-overview",
            },    
            {
              type: "doc",
              label: "7.2. Event Types",
              id: "microservices-framework/event-sources/event-types/overview",
            },   
            {
              type: "doc",
              label: "7.3. Writing API & Event",
              id: "microservices-framework/event-sources/write-apis",
            },  
            {
              type: "doc",
              label: "7.4. HTTP API",
              id: "microservices-framework/event-sources/event-types/http-events",
            },
            {
              type: "doc",
              label: "7.5. Cron Event",
              id: "microservices-framework/event-sources/event-types/cron-events",
            },
            {
              type: "doc",
              label: "7.6. Kafka Event",
              id: "microservices-framework/event-sources/event-types/kafka-events",
            },
            {
              type: "doc",
              label: "7.7. Graphql API",
              id: "microservices-framework/event-sources/event-types/graphql-events",
            },  
            {
              type: "doc",
              label: "7.8. Reusing Definitions with $ref",
              id: "microservices-framework/definitions",
            },         
            {
              type: "doc",
              label: "7.9. Schema Validation",
              id: "microservices-framework/event-sources/validations/schema-validation",
            },
            {
              type: "doc",
              label: "7.10. Handle Validation Errors",
              id: "microservices-framework/event-sources/validations/validation-error",
            },
          ],
        },
        {
          type: "category",
          label: "8. Event Handler Functions",
          items: [
            {
              type: "doc",
              label: "8.1. Overview",
              id: "microservices-framework/workflows/overview",
            },
            {
              type: "doc",
              label: "8.2. Typescript and Javascript functions",
              id: "microservices-framework/workflows/native-language-functions",
            },
            {
              type: "doc",
              label: "8.3. Response Serialization",
              id: "microservices-framework/workflows/response-serialization",
            }
          ],
        },
        {
          type: "category",
          label: "9. DataSources",
          items: [
            {
              type: "doc",
              label: "9.1. Overview",
              id: "microservices-framework/datasources/overview",
            },
            {
              type: "category",
              label: "9.2. Databases",
              items: [
                {
                  type: "doc",
                  label: "9.2.1. Database Support",
                  id: "microservices-framework/databases/Overview",
                },
                {
                  type: "doc",
                  label: "9.2.2. MongoDB",
                  id: "microservices-framework/databases/MongoDB",
                },
                {
                   type: "doc",
                   label: "9.2.3. MySQL",
                   id: "microservices-framework/databases/MySQL",
                 },
                 {
                  type: "doc",
                  label: "9.2.4. PostgreSQL",
                  id: "microservices-framework/databases/PostgreSQL",
                 },
               
                 {
                   type: "doc",
                    label: "9.2.5 SQL Server",
                    id: "microservices-framework/databases/SQLServer",
                 },
                {
                  type: "doc",
                  label: "9.2.6. SqLite",
                  id: "microservices-framework/databases/SQLite",
                },
                {
                  type: "doc",
                  label: "9.2.7 CokroachDB",
                  id: "microservices-framework/databases/CokroachDB",
               },
               {
                  type: "doc",
                  label: "9.2.8 MariaDB",
                  id: "microservices-framework/databases/MariaDB",
               },
               {
                type: "doc",
                label: "9.2.9. PlanetScale",
                id: "microservices-framework/databases/PlanetScale",
              },
              ],
            },
            {
              type: "doc",
              label: "9.3. Custom DataSource",
              id: "microservices-framework/datasources/create-custom-datasource",
            },
            {
              type: "doc",
              label: "9.4. Create npm Plugin",
              id: "microservices-framework/datasources/create-datasource-plugin",
            },
            {
              type: "doc",
              label: "9.5. Caching",
              id: "microservices-framework/datasources/caching",
            },
            {
              type: "doc",
              label: "9.6. Datasource Plugins",
              id: "microservices-framework/datasources/datasource-plugins/Overview",
            },
            {
              type: "doc",
              label: "9.7. Plugin- Prisma",
              id: "microservices-framework/datasources/datasource-plugins/Prisma Datasource",
            },
            {
              type: "doc",
              label: "9.8. Plugin- Axios",
              id: "microservices-framework/datasources/datasource-plugins/Axios Datasource",
            },         
            {
              type: "doc",
              label: "9.9. Plugin- AWS",
              id: "microservices-framework/datasources/datasource-plugins/AWS Datasource",
            },
            {
              type: "doc",
              label: "9.10. Plugin- Mailer",
              id: "microservices-framework/datasources/datasource-plugins/Nodemailer Datasource",
            },
            {
              type: "doc",
              label: "9.11. Plugin- Redis",
              id: "microservices-framework/datasources/datasource-plugins/Redis Datasource",
            },
            {
              type: "doc",
              label: "9.12. Plugin- Mongoose",
              id: "microservices-framework/datasources/datasource-plugins/Mongoose Datasource",
            },
            {
              type: "doc",
              label: "9.13. Plugin- Kafka",
              id: "microservices-framework/datasources/datasource-plugins/Kafka Datasource",
            },
            {
              type: "doc",
              label: "9.14. Plugin- Text-to-SQL",
              id: "microservices-framework/datasources/datasource-plugins/Text to Sql Datasource",
            },
            {
              type: "doc",
              label: "9.15. Plugin- SendGrid",
              id: "microservices-framework/datasources/datasource-plugins/Sendgrid Datasource",
            },
            {
              type: "doc",
              label: "9.16. Plugin- ChatGPT",
              id: "microservices-framework/datasources/datasource-plugins/ChatGPT datasource",
            },
            {
              type: "category",
              label: "9.17. Plugin- ElasticGraph",
              items: [
                {
                  type: "doc",
                  label: "9.17.1. Elasticgraph",
                  id: "microservices-framework/datasources/datasource-plugins/elasticgraph/elasticgraph",
                },
                {
                  type: "doc",
                  label: "9.17.2. Feature Set of Elasticgraph",
                  id: "microservices-framework/datasources/datasource-plugins/elasticgraph/feature-set-of-elasticgraph",
                },
              ],
            },
            {
              type: "doc",
              label: "9.18. Plugin- Memcache",
              id: "microservices-framework/datasources/datasource-plugins/Memcached Datasource",
            },
          ],
        },
        {
          type: "category",
          label: "10. Authentication",
          items: [
            {
              type: "doc",
              label: "10.1. Overview",
              id: "microservices-framework/authentication/overview",
            },
            {
              type: "doc",
              label: "10.2. JWT Authentication",
              id: "microservices-framework/authentication/jwt-authentication",
            },
            {
              type: "doc",
              label: "10.3. OAuth2 Authentication",
              id: "microservices-framework/authentication/oauth2-authentication",
            },
            
          ],
        },
        {
          type: "doc",
          label: "11. Config",
          id: "microservices-framework/config-and-mappings/config",
        },
        {
          type: "doc",
          label: "12. Env",
          id: "microservices-framework/config-and-mappings/env",
        },
        {
          type: "doc",
          label: "13. Mappings",
          id: "microservices-framework/config-and-mappings/mappings",
        },
        {
          type: "category",
          label: "14. Inline scripting for YAML configs",
          items: [
            {
              type: "doc",
              label: "14.1. Overview",
              id: "microservices-framework/inline-scripting/overview",
            },
            {
              type: "doc",
              label: "14.2. Script Plugins",
              id: "microservices-framework/inline-scripting/script-plugins",
            },
          ],
        },
        {
          type: "category",
          label: "15. Observability & Monitoring",
          items: [
            {
              type: "doc",
              label: "15.1. Overview",
              id: "microservices-framework/telemetry/overview",
            },
            {
              type: "doc",
              label: "15.2. Architecture",
              id: "microservices-framework/telemetry/architecture",
            },
            {
              type: "doc",
              label: "15.3. Enable OpenTelemetry",
              id: "microservices-framework/telemetry/configuration",
            },
            {
              type: "doc",
              label: "15.4. Traces",
              id: "microservices-framework/telemetry/tracing",
            },
            {
              type: "doc",
              label: "15.5. Metrics",
              id: "microservices-framework/telemetry/metrics",
            },
            {
              type: "doc",
              label: "15.6. Logs",
              id: "microservices-framework/telemetry/logging",
            },
            {
              type: "doc",
              label: "16.3. Custom traces, logs and metrics (BPM)",
              id: "microservices-framework/telemetry/custom-metrics-logs-traces"
            },
          ],
        },
        {
            type: "category",
            label: "16. Deployment",
            items: [
              {
                type: 'doc',
                label: 'Deploy on Render',
                id: 'microservices-framework/deploy-on-render',
              },
            // {
            //   type: 'doc',
            //   label: '16.2 Deploy using Docker',
            //   id: 'deploy-using-docker',
        //   },
            ]
        },
      ],
    },
    {
      type: "category",
      label: "Saarthi",
      items: [
        {
          type: 'doc',
          label: 'Welcome',
          id: 'saarthi/index'
        },
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'saarthi/getting-started/installing',
            'saarthi/getting-started/connecting-api-provider',
            'saarthi/getting-started/your-first-task'
          ]
        },
        {
          type: "category",
          label: "Agents",
          items: [
            {
              type: 'doc',
              label: 'Using Multiple Agents',
              id: 'saarthi/basic-usage/using-modes',
            },
            {
              type: 'doc',
              label: 'Ask',
              id: 'saarthi/modes/ask',
            },
            {
              type: 'doc',
              label: 'Code',
              id: 'saarthi/modes/code',
            },
            {
              type: 'doc',
              label: 'Coach',
              id: 'saarthi/modes/coach',
            },
           {
              type: 'doc',
              label: 'Code Review',
              id: 'saarthi/modes/code-review',
            },
            {
              type: 'doc',
              label: 'Product Manager',
              id: 'saarthi/modes/pm-lead',
            },
     
            {
              type: 'doc',
              label: 'Debug',
              id: 'saarthi/modes/debug',
            },
            {
              type: 'doc',
              label: 'QA',
              id: 'saarthi/modes/qa-modes',
            },
            {
              type: 'doc',
              label: 'Devops',
              id: 'saarthi/modes/devops',
            },
            {
              type: 'doc',
              label: 'Architect',
              id: 'saarthi/modes/architect',
            },
            {
              type: 'doc',
              label: 'Orchestrator',
              id: 'saarthi/modes/orchestrator',
            },
          ],
        },
        {
          type: 'category',
          label: 'Basic Usage',
          items: [
            'saarthi/basic-usage/the-chat-interface',
            'saarthi/basic-usage/typing-your-requests',
            'saarthi/basic-usage/how-tools-work',
            'saarthi/basic-usage/context-mentions',
            'saarthi/tips-and-tricks',
          ],
        },
        {
          type: 'category',
          label: 'Features',
          items: [
            'saarthi/features/api-configuration-profiles',
            'saarthi/features/auto-approving-actions',
            'saarthi/features/browser-use',
            'saarthi/features/checkpoints',
            'saarthi/features/code-actions',
            'saarthi/features/custom-instructions',
            'saarthi/features/custom-modes',
            'saarthi/features/enhance-prompt',
            'saarthi/features/fast-edits',
            'saarthi/advanced-usage/footgun-prompting',
            'saarthi/features/intelligent-context-condensing',
            'saarthi/features/keyboard-shortcuts',
            'saarthi/features/model-temperature',
            'saarthi/features/saarthiignore',
            'saarthi/features/settings-management',
            'saarthi/features/shell-integration',
            'saarthi/features/suggested-responses',
            {
              type: 'category',
              label: 'MCP',
              items: [
                {
                  type: 'doc',
                  id: 'saarthi/features/mcp/overview',
                  label: 'MCP Overview'
                },
                'saarthi/features/mcp/using-mcp-in-saarthi',
                'saarthi/features/mcp/what-is-mcp',
                'saarthi/features/mcp/server-transports',
                'saarthi/features/mcp/mcp-vs-api',
                // 'saarthi/features/mcp/recommended-mcp-servers',
              ],
            },
            {
              type: 'category',
              label: 'Experimental',
              items: [
                'saarthi/features/experimental/experimental-features',
                'saarthi/features/experimental/codebase-indexing',
                'saarthi/features/experimental/concurrent-file-reads',
                'saarthi/features/experimental/power-steering',
              ],
            },
            'saarthi/features/more-features',
          ],
        },
        {
          type: 'category',
          label: 'Advanced Usage',
          items: [
            {
              type: 'category',
              label: 'Available Tools',
              items: [
                'saarthi/advanced-usage/available-tools/tool-use-overview',
                'saarthi/advanced-usage/available-tools/access-mcp-resource',
                'saarthi/advanced-usage/available-tools/apply-diff',
                'saarthi/advanced-usage/available-tools/ask-followup-question',
                'saarthi/advanced-usage/available-tools/attempt-completion',
                'saarthi/advanced-usage/available-tools/browser-action',
                'saarthi/advanced-usage/available-tools/codebase-search',
                'saarthi/advanced-usage/available-tools/execute-command',
                'saarthi/advanced-usage/available-tools/insert-content',
                'saarthi/advanced-usage/available-tools/list-code-definition-names',
                'saarthi/advanced-usage/available-tools/list-files',
                'saarthi/advanced-usage/available-tools/new-task',
                'saarthi/advanced-usage/available-tools/read-file',
                'saarthi/advanced-usage/available-tools/search-files',
                'saarthi/advanced-usage/available-tools/search-and-replace',
                'saarthi/advanced-usage/available-tools/switch-mode',
                'saarthi/advanced-usage/available-tools/use-mcp-tool',
                'saarthi/advanced-usage/available-tools/write-to-file',
              ],
            },
            'saarthi/advanced-usage/context-poisoning',
            'saarthi/advanced-usage/large-projects',
            'saarthi/advanced-usage/local-models',
            'saarthi/advanced-usage/local-development-setup',
            'saarthi/advanced-usage/prompt-engineering',
            'saarthi/advanced-usage/prompt-structure',
            'saarthi/advanced-usage/rate-limits-costs',
          ],
        },
        {
          type: 'category',
          label: 'Model Providers',
          items: [
            'saarthi/providers/anthropic',
            'saarthi/providers/bedrock',
            'saarthi/providers/deepseek',
            'saarthi/providers/chutes',
            'saarthi/providers/gemini',
            'saarthi/providers/glama',
            'saarthi/providers/groq',
            'saarthi/providers/human-relay',
            'saarthi/providers/lmstudio',
            'saarthi/providers/litellm',
            'saarthi/providers/mistral',
            'saarthi/providers/ollama',
            'saarthi/providers/openai',
            'saarthi/providers/openai-compatible',
            'saarthi/providers/openrouter',
            'saarthi/providers/requesty',
            'saarthi/providers/unbound',
            'saarthi/providers/vertex',
            'saarthi/providers/vscode-lm',
            'saarthi/providers/xai',
          ]
        },
        'saarthi/faq'
      ]
    },
    {
      type: "category",
      label: "Release-Notes",
      items: [
        {
          type: "doc",
          label: "Framework",
          id: "release-notes/framework-release"
        },
        {
          type: "doc",
          label: "Saarthi",
          id: "release-notes/saarthi-release",
        },
      ],
    },
  ],  
};

module.exports = sidebars;
