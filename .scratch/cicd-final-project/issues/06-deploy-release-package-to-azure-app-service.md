# 06 — Deploy the release package to Azure App Service

**What to build:** A production delivery path that deploys the verified NestJS application to the Linux Azure App Service `trabalho-final-cicd` after a push to `main`.

**Blocked by:** 05 — Add pull-request CI validation.

**Status:** resolved

- [x] Pushes to `main` run distinct test, build, and deploy stages, with each stage gated on prior success.
- [x] The build stage creates a deployable ZIP containing the compiled application, package metadata and lockfile, and production-only dependencies.
- [x] The deploy stage uses `azure/webapps-deploy@v3`, targets `trabalho-final-cicd`, and obtains publish-profile credentials exclusively from `AZURE_WEBAPP_PUBLISH_PROFILE`.
- [x] The workflow deploys directly as a Node.js 24 LTS application to Linux App Service; it does not build or deploy a Docker image.
- [x] With the manually provisioned App Service and repository secret available, the deployed public page is reachable and presents the required roster.

## Answer

The workflow packages `dist/`, `views/`, package metadata, the lockfile, and production-only dependencies into `release.zip`. On a push to `main`, its gated `Deploy` job sends that ZIP directly to `trabalho-final-cicd` through `azure/webapps-deploy@v3` and `AZURE_WEBAPP_PUBLISH_PROFILE`. The final live verification remains contingent on the team's manually provisioned App Service and repository secret.
