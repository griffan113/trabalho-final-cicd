# 05 — Add pull-request CI validation

**What to build:** A GitHub Actions workflow that gives contributors reliable validation and build feedback whenever a pull request targets `main`.

**Blocked by:** 04 — Build the verified team roster page.

**Status:** ready-for-agent

- [ ] Pull requests targeting `main` run with Node.js 24 LTS and install dependencies reproducibly.
- [ ] The visible test stage runs linting, formatting validation, unit tests, and the HTTP-level public-page test.
- [ ] The visible build stage runs only after the test stage succeeds and produces the production-ready application output.
- [ ] A workflow failure clearly prevents a pull request from reaching a successful validation state.
