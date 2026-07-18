# CI/CD Final Project — NestJS MVC Application

Status: ready-for-agent

## Problem Statement

The team needs a small, credible application for an MBA CI/CD final project that demonstrates sound software-development and DevOps practices. The deliverable must include a front-end and a pipeline with at least test, build, and deployment stages, culminating in a successful Azure App Service deployment.

## Solution

Deliver a deliberately minimal NestJS MVC web application. Its sole public page presents the project title, **“Criação de um pipeline para Build e deploy de uma aplicação”**, and the complete team roster. The application is rendered server-side with Handlebars and is delivered by a GitHub Actions workflow that validates, builds, packages, and deploys it directly to Azure App Service.

## User Stories

1. As a course evaluator, I want to open a public web page, so that I can verify that the project includes a front-end.
2. As a course evaluator, I want to see the title “Criação de um pipeline para Build e deploy de uma aplicação”, so that I can identify the purpose of the deliverable.
3. As a course evaluator, I want to see the team roster on the page, so that I can identify the project members.
4. As a course evaluator, I want each team member’s RM and full name to be visible, so that I can verify the submitted group.
5. As a visitor, I want the roster to be structured as an accessible list, so that the content is easy to read and navigate.
6. As a developer, I want the page to be rendered through the NestJS MVC application, so that the application clearly demonstrates server-side MVC rather than a disconnected static asset.
7. As a developer, I want automated linting and formatting validation, so that basic code-quality issues are caught before deployment.
8. As a developer, I want automated unit tests, so that the application’s behavior is protected from regressions.
9. As a developer, I want an HTTP-level test of the public page, so that the rendered front-end contract is verified from the user’s perspective.
10. As a contributor, I want pull requests targeting `main` to run validation and build checks, so that incomplete changes do not reach the deployment branch.
11. As a contributor, I want pushes to `main` to trigger deployment only after validation and build succeed, so that Azure receives a known-good package.
12. As a DevOps evaluator, I want the workflow to expose distinct test, build, and deploy stages, so that the required CI/CD pipeline progression is evident.
13. As a deployment operator, I want the workflow to use Node.js 24 LTS consistently, so that local, CI, and App Service environments are compatible.
14. As a deployment operator, I want the workflow to authenticate with an Azure App Service publish profile stored as a GitHub secret, so that deployment credentials are not committed to the repository.
15. As a deployment operator, I want a prebuilt ZIP package to be deployed directly to Azure App Service, so that the build is performed in CI and no Docker/container registry is required.
16. As a course team, I want to manually assemble final submission evidence after delivery, so that repository, pipeline, and live-deployment evidence can be handed in without expanding the application scope.

## Implementation Decisions

- Build a NestJS MVC application using the Handlebars view engine.
- Expose exactly one public page. It contains a semantic heading and an unordered list; it has no navigation, API, authentication, persistence, or additional pages.
- Render the following immutable roster content:
  - `367615 Helen Regina Tufanini Rodrigues Bassetto`
  - `368987 Cássio Góes de Moraes Cordeiro`
  - `367181 Eliel Michelmann Gaspar`
  - `367644 Gabriel Merlin Alfano`
  - `366806 Lucas Emanuel Lisboa`
  - `369223 Vinicius Silveira Chaves`
- Use Node.js 24 LTS for development, GitHub Actions, package metadata, and Azure App Service.
- Use GitHub Actions as the CI/CD platform. Pull requests to `main` run validation and build; pushes to `main` run validation, build, then deploy.
- Model the workflow as three clearly named stages: **test**, **build**, and **deploy**. The test stage includes dependency installation, linting, formatting validation, and automated tests.
- Produce the deployable artifact during the build stage. It is a ZIP package containing the compiled output, package metadata and lockfile, plus production-only dependencies.
- Deploy directly to the manually provisioned Linux Azure App Service named `trabalho-final-cicd`; do not build or deploy a Docker container.
- Configure the Azure service for Node.js 24 LTS and start the app through its production start command.
- Use `azure/webapps-deploy@v3` for deployment. Supply the downloaded publish-profile XML through the repository secret `AZURE_WEBAPP_PUBLISH_PROFILE`.
- Manual Azure resource provisioning and manual creation of the publish-profile secret are prerequisites owned by the team, not pipeline responsibilities.

## Testing Decisions

- The primary test seam is the public HTTP interface: make a request to the application and assert a successful response containing the required title and all six roster entries. This verifies user-visible behavior rather than controller or template implementation details.
- Retain NestJS unit tests for focused application behavior where they add value, but favor the HTTP-level test for the page’s end-to-end rendering contract.
- The test stage must run linting, formatting validation, unit tests, and the HTTP-level page test before any build or deployment can proceed.
- The repository currently contains no application or test prior art; establish the above HTTP-level seam as the project’s testing convention.
- Successful workflow execution is demonstrated by the independently visible test, build, and deploy stages. Deployment must be gated on prior stage success.

## Out of Scope

- Dockerfiles, container images, container registries, and container-based Azure App Service deployment.
- Infrastructure as code and automated Azure resource provisioning.
- Authentication, authorization, accounts, databases, persistence, APIs, navigation, and pages beyond the single roster page.
- Deployment slots, multi-environment promotion, rollback automation, and runtime observability beyond what Azure App Service provides by default.
- Automatically generating the final course-submission evidence ZIP.

## Further Notes

- The Azure App Service must be created manually as a Linux Node.js 24 LTS app before deployment. The team must download its publish profile and add the complete XML value to `AZURE_WEBAPP_PUBLISH_PROFILE` in GitHub Actions secrets.
- The direct publish-profile approach follows the provided Azure Node.js workflow reference and the `azure/webapps-deploy` action documentation.
- After delivery, the team will manually gather repository, pipeline-run, and live-application evidence into the final submission ZIP.
