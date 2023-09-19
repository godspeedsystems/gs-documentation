---
sidebar_position: 3
title: 3.3.4 Request Body and File Size Limit
---

### Request Body and File Size Limit:

The following configuration sets limits for the request body size and file size in a config.

```
request_body_limit:  50 * 1024 * 1024
file_size_limit : 50 * 1024 * 1024

```

### request_body_limit:

This variable sets the limit for the request body size. It checks if config.request_body_limit is defined in the application's configuration. If it is, the value from the configuration is used; otherwise, it defaults to 50* 1024 * 1024 bytes (50 megabytes).

### file_size_limit:

This variable sets the limit for the file size. Similar to request_body_limit, it checks if config.file_size_limit is defined in the configuration. If it is, the value from the configuration is used; otherwise, it defaults to 50 * 1024 * 1024 bytes (50 megabytes).