# Establish the supported Node.js runtime

Type: research
Status: resolved

## Question

Which currently supported Node.js runtime should the NestJS application and manually provisioned Azure App Service use, based on the official Node.js and Azure App Service documentation, so the GitHub Actions workflow and production runtime stay compatible?

## Answer

Use **Node.js 24 LTS** in development, GitHub Actions, `package.json`, and Azure App Service. Configure Linux App Service as `NODE|24-lts` or Windows App Service as `WEBSITE_NODE_DEFAULT_VERSION=~24`; retain the App Service major-line selector rather than a minor/patch pin.

Findings and official sources: [Node.js runtime compatibility research](../research-node-runtime-compatibility.md).
