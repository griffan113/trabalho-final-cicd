# Node.js runtime compatibility research

## Recommendation

Use **Node.js 24 LTS** across local development, GitHub Actions, `package.json`, and Azure App Service. Pin the CI runtime to the major line (for example, `node-version: '24'`), declare `"engines": { "node": "24.x" }`, and configure the manually provisioned App Service to the Node 24 LTS stack.

For a Linux App Service, set `linuxFxVersion` to `NODE|24-lts`. For a Windows App Service, set `WEBSITE_NODE_DEFAULT_VERSION` to `~24`. Do not pin a minor or patch version in App Service; Azure regularly patches the platform runtime and explicitly recommends the major-line form.

## Findings

- The Node.js release policy says production applications should use Active LTS or Maintenance LTS lines. Node 24 is currently LTS, while Node 26 is Current; Node 24 is therefore the production-appropriate common runtime. [Node.js Releases](https://nodejs.org/en/about/previous-releases)
- Azure App Service documents `NODE|24-lts` as the Linux runtime setting and says it controls both application runtime and automated package restore in Kudu. [Configure a Node.js app for Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/configure-language-nodejs)
- The same Azure guidance uses `~24` for Windows App Service, recommends avoiding a specific minor/patch runtime, and says the version should also be declared in `package.json`. [Configure a Node.js app for Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/configure-language-nodejs)

## Sources

- https://nodejs.org/en/about/previous-releases
- https://learn.microsoft.com/en-us/azure/app-service/configure-language-nodejs
