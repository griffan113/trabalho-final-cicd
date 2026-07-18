# Wayfinder Map: CI/CD Final Project

## Destination

An implementation-ready specification for a minimal NestJS MVC application that presents the agreed project title and team list, validated and deployed to Azure App Service through a GitHub Actions pipeline.

## Notes

Use `/grilling` and `/domain-modeling` when resolving human decisions. The required workflow is GitHub Actions with test, build, and deploy stages; deployment uses `azure/webapps-deploy@v3` and an Azure App Service publish profile supplied by the team. The scope is intentionally limited to the course deliverable.

## Decisions so far

- [Establish the supported Node.js runtime](./issues/01-node-runtime-compatibility.md) — use Node.js 24 LTS consistently in development, CI, and Azure App Service.
- [Confirm the Azure App Service deployment contract](./issues/02-confirm-azure-app-service-deployment-contract.md) — deploy the Node.js 24 LTS ZIP package directly to the Linux App Service `trabalho-final-cicd` using its publish profile.
- [Define the course submission evidence](./issues/03-define-course-submission-evidence.md) — assemble the final evidence ZIP manually after delivery; it does not affect the implementation specification.

## Not yet specified

<!-- No remaining in-scope fog. -->

## Out of scope

- Infrastructure as code and automated Azure resource provisioning; the Azure App Service is provisioned manually.
- Authentication, persistence, API features, navigation, and additional application pages.
