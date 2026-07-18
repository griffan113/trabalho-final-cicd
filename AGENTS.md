# Project Guidance

## Purpose

This repository contains the MBA CI/CD final project: a deliberately minimal NestJS MVC application that demonstrates test, build, and deployment practices.

## Product boundary

- Keep exactly one public server-rendered page.
- The page must show the project title and the six agreed team members with their RM numbers.
- Use Handlebars for MVC rendering.
- Do not add authentication, persistence, APIs, navigation, extra pages, or Docker/container deployment unless the specification is explicitly changed.

## Runtime and quality

- Use Node.js 24 LTS consistently in local development, GitHub Actions, and Azure App Service.
- Preserve linting, formatting validation, unit tests, and the HTTP-level public-page test.
- Favor tests of observable behavior over implementation details. The primary seam is an HTTP request to the public page, asserting its title and complete roster.

## CI/CD contract

- GitHub Actions must expose distinct `test`, `build`, and `deploy` stages.
- Pull requests targeting `main` run validation and build. Pushes to `main` run validation, build, and deploy in that order.
- Deploy the prebuilt ZIP directly to the Linux Azure App Service `trabalho-final-cicd` using `azure/webapps-deploy@v3`.
- Use only the `AZURE_WEBAPP_PUBLISH_PROFILE` GitHub Actions secret for the publish-profile XML. Never commit credentials or publish-profile files.
- Do not introduce infrastructure-as-code or Azure resource provisioning into this repository; the App Service is manually provisioned.

## Documentation

- Keep `README.md` in Brazilian Portuguese and update it when local commands, pipeline behavior, or deployment prerequisites change.
- Implementation decisions and planned work live under `.scratch/cicd-final-project/`.

## Agent skills

### Issue tracker

Issues and specifications are tracked as local Markdown files under `.scratch/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Use the five default canonical triage labels. See `docs/agents/triage-labels.md`.

### Domain docs

This is a single-context repository using `CONTEXT.md` and `docs/adr/`. See `docs/agents/domain.md`.
