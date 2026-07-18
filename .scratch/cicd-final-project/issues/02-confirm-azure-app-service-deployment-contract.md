# Confirm the Azure App Service deployment contract

Type: task
Status: resolved
Blocked by: 01

## Question

Once the team has manually provisioned the Azure App Service, what exact app name, platform/runtime configuration, and GitHub secret name will the workflow use for deployment with `azure/webapps-deploy@v3`?

## Answer

Deploy directly to the Linux Azure App Service named `trabalho-final-cicd`, configured for Node.js 24 LTS; no Docker image or container registry is used. Store the downloaded publish-profile XML in the GitHub repository secret `AZURE_WEBAPP_PUBLISH_PROFILE` and pass it to `azure/webapps-deploy@v3`.

The build produces a ZIP deployment package containing `dist/`, `package.json`, `package-lock.json`, and production-only `node_modules/`. App Service starts the package with `npm run start:prod`. This follows the direct Node.js publish-profile pattern from the supplied [Azure workflow sample](https://raw.githubusercontent.com/Azure/actions-workflow-samples/refs/heads/master/AppService/node.js-webapp-on-azure.yml) and [Azure/webapps-deploy documentation](https://github.com/Azure/webapps-deploy).

## Comments

- 2026-07-18: Resolved after confirming Linux, app name, publish-profile secret, and deployment-package contents.
