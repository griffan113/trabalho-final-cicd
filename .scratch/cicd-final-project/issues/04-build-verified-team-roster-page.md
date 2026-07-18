# 04 — Build the verified team roster page

**What to build:** A runnable NestJS MVC application that lets a course evaluator open one public, accessible page and see the required project title and complete six-member roster.

**Blocked by:** None — can start immediately.

**Status:** resolved

- [x] The public page renders the exact project title and each required RM/full-name roster entry in a semantic heading and unordered list.
- [x] The application uses Handlebars server-side rendering and runs with Node.js 24 LTS.
- [x] Linting, formatting validation, focused unit tests, and an HTTP-level page test pass; the HTTP test asserts the successful user-visible rendering contract.
- [x] The application builds successfully for production startup.

## Answer

Implemented the single NestJS MVC public roster page with a Handlebars template. The Node.js 24 runtime contract is declared in `.nvmrc` and `package.json`; automated quality, unit, HTTP, and production-build checks pass.
