---
sidebar_position: 180
title: Notification API
---

This will cover Email, SMS, whatsapp. It is open to extend any other type of notification and channel.

The response will be in JSON format by default.

Templates are supported in email and SMS. These templates must be created on providers.

Developer must be passing the templateID and placeholder values in sequence.

#### Proposed first integration providers :

    email providers : Sendgrid, others to be filled after client's discussion

    SMS providers :  to be filled after client's discussion

    whatsapp providers : to be filled after client's discussion

## Notification service can be run as independent microservices and as a module within other microservices.

## 1. SendEmail

### Request URL

```
   Content Type: application/json ; charset= utf- 8
   Method: POST
   URL: /api/notification/v1/publish/sendEmail
```

### Parameters for the request Json

```
     recipientsTo      STRING
     message           STRING
     from              STRING
     Subject           STRING

```

### Parameters for the response JSON

```
   Status_Code: INTEGER
```

## Here recipientsTo and from must be validated as valid email format.

## 2. sendBulkEmail

### Request URL

```
   Content Type: application/json ; charset= utf- 8
   Method: POST
   URL: URL: /api/notification/v1/publish/sendBulkEmail
```

### Parameters for the request Json

```

   recipientsToList      [STRING, STRING...]
   message                STRING
   from                   STRING
   Subject                STRING

```

### Parameters for the response JSON

```
   Status_Code: INTEGER
```

---

## 3. sendBulkTemplateEmail

### Request URL

```
   Content Type: application/json ; charset= utf- 8
   Method: POST
   URL: URL: /api/notification/v1/publish/sendBulkTemplateEmail
```

### Parameters for the request Json

```
   recipientsToList      [STRING, STRING...]
   templateId             INTEGER
   templateParam          [{“placeholder1” : “value1”}, {“placeholder2” : “value2”} ]
   from                   STRING
   Subject                STRING

```

### Parameters for the response JSON

```
   Status_Code: INTEGER
```

---

## 4. SendSMS

### Request URL

```
   Content Type: application/json ; charset= utf- 8
   Method: POST
   URL: URL: /api/notification/v1/publish/sendSMS
```

### Parameters for the request Json

```
   recipientsTo           INTEGER
   message                STRING
   from                   INTEGER
```

### Parameters for the response JSON

```
   Status_Code: INTEGER
```

Here recipientsTo and from must be valid mobile numbers. Message conent and length should meet the criteria of SMS.

---

## 5. SendBulkSMS

### Request URL

```
   Content Type: application/json ; charset= utf- 8
   Method: POST
   URL: URL: /api/notification/v1/publish/sendBulkSMS
```

### Parameters for the request Json

```
   recipientsToList       [INTEGER, INTEGER]
   message                STRING
   from                   INTEGER
```

### Parameters for the response JSON

```
   Status_Code: INTEGER
```

Here recipientsTo and from must be valid mobile numbers. Message content & length should meet the criteria of SMS.

---

## 6. SendWhatsAppText

### Request URL

```
   Content Type: application/json ; charset= utf- 8
   Method: POST
   URL: URL: /api/notification/v1/publish/sendWhatsappText
```

### Parameters for the request Json

```
   recipientsTo           INTEGER
   message                STRING
   message_type           "TEXT"
   Channel                “whatsapp”
   from                   INTEGER
```

### Parameters for the response JSON

```
   Status_Code: INTEGER
```

Here recipientsTo and from must be valid mobile numbers. Message should meet the criteria prescribed by Whatsapp.

---

## 7. Glossary

### Conventions

```
      Status - HTTP status code of response.

      All response is in JSON format.

      All request parameters are mandatory unless explicitly marked as [optional]

```

### Status Codes

#### All status codes are standard HTTP status codes. The below ones are used in this API.

```
     2XX - Success of some kind

     4XX - Error occurred in client’s part

     5XX - Error occurred in server’s part

```

#### following are the status codes

```
      Status Code    Description

      200             OK

      201             Created

      202             Accepted (Request accepted, and queued for execution)

      400             Bad request

      401             Authentication failure

      403             Forbidden

      404             Resource not found

      405             Method Not Allowed

      412             Precondition Failed

      413             Request Entity Too Large

      500             Internal Server Error

      501             Not Implemented

      503             Service Unavailable

      504             Invalid data

```
