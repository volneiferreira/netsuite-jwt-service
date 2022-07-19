# Netsuite JWT Service

## Prerequisites

- Read and execute all instructons on OAuth 2.0 Client Credentials Flow:

[https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_162730264820.html](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_162730264820.html)

## Config

Add your configuration data into [config.json](config.json) file.

- **clientId**: Client ID generated when the integration was created;
- **certificateId**: Certificate ID generated when the certificate was added into Netsuite;
- **accountId**: Your Account ID.
- **scope**: Scopes used in the integration.

## Install and run

Install packages:

```
npm install
```

Run the application:

```
npm run serve
```
