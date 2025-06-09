---
title: Nodemailer Datasource Plugin
description: A powerful email integration plugin that enables seamless email delivery in Godspeed applications using Nodemailer. Features include dynamic templating, error resilience, secure delivery, and support for various email services like Gmail and SMTP.
keywords: [nodemailer, email delivery, smtp, email templates, transactional email, godspeed plugin, email service, messaging, email notifications, email integration]
---

**[Link to Plugin Source Code](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/mailer-as-datasource)**

Amp up your communication game by using a mailer as a powerful data source. Connect seamlessly to send information through emails. Transform your app into a messaging maestro, unlocking a world of possibilities.

Sending emails in your Node.js application has never been smoother. The Godspeed Nodemailer Plugin provides seamless integration between the robust Godspeed framework and Nodemailer, the go-to solution for email delivery in Node.js.

## Features

**- Effortless Setup:** Get up and running in minutes with our easy-to-follow setup guide.    
**- Dynamic Templating:** Craft personalized emails with dynamic content using popular templating engines.    
**- Error Resilience:** Robust error handling ensures reliable email delivery, even in challenging scenarios.   
**- Scalable and Secure:** Designed for scalability and security, so your email system can grow with your application.

Whether you're sending transactional emails, newsletters, or notifications, this plugin empowers you to deliver messages with Godspeed. Let's elevate your email game together!

### How to Add 
Create a godspeed project from the CLI, open the created project in vscode and then add the plugin:

```
godspeed plugin add @godspeedsystems/plugins-mailer-as-datasource
```

### Example usage

### Config
```yaml title=src/datasources/mailer.yaml
type: mailer
service: gmail       
user: godspeed@gmail.com
pass: rmeb bjak xcam xkub    # app specific password
```

### Event for Producer
```yaml title=src/events/mail_send_event.yaml
http.post./email:
  summary: Send email to user
  description: Sends an email to a user using the mailer datasource
  fn: send_email
  authn: false
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            recipient:
              type: string
            subject:
              type: string
            body:
              type: string
          required:
            - recipient
            - subject
            - body
  responses:
    '200':
      description: Email sent successfully
      content:
        application/json:
          schema:
            type: object
            properties:
              success:
                type: boolean
                example: true
              data:
                type: object # Or a more specific schema if the mailer returns structured data
    '400':
      description: Failed to send email
      content:
        application/json:
          schema:
            type: object
            properties:
              success:
                type: boolean
              error:
                type: string
```
### Typescript Workflow to send mail
```typescript title=src/functions/send_email.ts

import { GSContext, GSStatus, GSDataSource } from "@godspeedsystems/core";
export default async function (ctx: GSContext) {
  const { body} = ctx.inputs.data;
  const mailerClient: GSDataSource = ctx.datasources.mailer;

  try {
    const response = await mailerClient.execute(ctx, {
      to: body.recipient,
      subject: body.subject,
      text: body.body
    });
    return new GSStatus(true, 200, "Email Sent successfully", response);
  } catch (error: any) {
      const errorData = error.stack || error;
      return new GSStatus(false, 400, "Failed to send email", errorData);
  }
}
```



## Reference links
**-** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/mailer-as-datasource)     
**-** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-mailer-as-datasource)
