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
      type: "doc",
      label: "1. Introduction",
      id: "introduction",
    },
    {
      type: "doc",
      label: "2. Getting started",
      id: "getting_started",
    },
    {
      type: "category",
      label: "3. Event Sources",
      items: [
        {
          type: "doc",
          label: "3.1. Overview",
          id: "event_sources/overview"
        },
        {
          type: "doc",
          label: "3.2.  Event source plugins",
          id: "event_sources/event_source_plugins"
        },
        {
          type: "doc",
          label: "3.3. Custome Event Source",
          id: "event_sources/custome_event_source"
        },
      
      ],
    },
    {
      type: "category",
      label: "4. Workflows/Functions",
      items: [
        {
          type: "doc",
          label: "4.1. Overview",
          id: "workflows/overview"
        },
        {
          type: "doc",
          label: "4.2. Inbuilt workflows",
          id: "workflows/inbuilt_workflows"
        },
        {
          type: "doc",
          label: "4.3. Recipies/Examples for common use cases",
          id: "workflows/recipies_or_examples"
        },
        {
          type: "doc",
          label: "4.4. Scripting in workflows",
          id: "workflows/scripting_in_workflows"
        },
        {
          type: "doc",
          label: "4.5. Retry",
          id: "workflows/retry"
        },
      ],
    },
    {
      type: "category",
      label: "5. Data Sources",
      items: [
        {
          type: "doc",
          label: "5.1. Overview",
          id: "data_sources/overview"
        },
        {
          type: "doc",
          label: "5.2. Data source plugins",
          id: "data_sources/datasource_plugins"
        },
        {
          type: "doc",
          label: "5.3. Custome data source",
          id: "data_sources/custome_data_source"
        },
      ],
    },
    {
      type: "category",
      label: "6. Authentication",
      items: [
        {
          type: "doc",
          label: "6.1. Overview",
          id: "authentication/overview"
        },
        {
          type: "doc",
          label: "6.2. Configuration",
          id: "authentication/configuration"
        },
        {
          type: "doc",
          label: "6.3. Error handler",
          id: "authentication/error_handler"
        },
      ],
    },
    {
      type: "category",
      label: "7. Authorization",
      items: [
        {
          type: "doc",
          label: "7.1. Overview",
          id: "authorization/overview"
        },
      ],
    },
    {
      type: "category",
      label: "8. Config",
      items: [
        {
          type: "doc",
          label: "8.1. Overview",
          id: "config/overview"
        },
      ],
    },
    {
      type: "category",
      label: "9. Telemetry",
      items: [
        {
          type: "doc",
          label: "9.1. Overview",
          id: "telemetry/overview"
        },
      ],
    },
    {
      type: "doc",
      label: "10. Language Tools",
      id: "language_tools"
    },
    {
      type: "doc",
      label: "11. CLI",
      id: "CLI"
    }
  ]
};

module.exports = sidebars;
