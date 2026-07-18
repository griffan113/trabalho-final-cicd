# 06 — Deploy the release package to Azure App Service

**What to build:** A production delivery path that deploys the verified NestJS application to the Linux Azure App Service `trabalho-final-cicd` after a push to `main`.

**Blocked by:** 05 — Add pull-request CI validation.

**Status:** ready-for-agent

- [ ] Pushes to `main` run distinct test, build, and deploy stages, with each stage gated on prior success.
- [ ] The build stage creates a deployable ZIP containing the compiled application, package metadata and lockfile, and production-only dependencies.
- [ ] The deploy stage uses `azure/webapps-deploy@v3`, targets `trabalho-final-cicd`, and obtains publish-profile credentials exclusively from `AZURE_WEBAPP_PUBLISH_PROFILE`.
- [ ] The workflow deploys directly as a Node.js 24 LTS application to Linux App Service; it does not build or deploy a Docker image.
- [ ] With the manually provisioned App Service and repository secret available, the deployed public page is reachable and presents the required roster.
