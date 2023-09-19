---
sidebar_position: 5
title: Introduction
---

# Essential 3: (Serverless) Workflow engine

In Godspeed land, one can trigger any kind of serverless workflows (akin to Lambda functions) from a diversity of sources. This is programming language, framework and cloud agnostic.

**Technologies used**

- [ArgoEvents](https://argoproj.github.io/argo-events/)
- [ArgoWorkflow](https://argoproj.github.io/workflows/)

#### Salient Feature

**MULTIPLE TRIGGER SOURCES. MULTIPLE TRIGGERED DESTINATIONS**
Argo Events is a CloudEvents compliant, event-driven workflow automation framework for Kubernetes. It integrates with more than 20 trigger sources and can trigger multiple kinds of workflows. Manages everything from simple, linear, real-time to complex, multi-source events. It can trigger K8s objects, Argo Workflows, OpenFAAS functions, AWS Lamdba and other Serverless workloads, etc. on events from a variety of sources like git, webhooks, S3, schedules, messaging queues, gcp pubsub, sns, sqs, etc.

![snowburg](/img/es3.PNG)

<!-- export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '0px',
      color: 'black',
      fontSize:'22px',
      padding: '5px',
      cursor: 'pointer',
    }}
   >
    {children}
  </span>
); -->
