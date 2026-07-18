# Trabalho Final — CI/CD

Aplicação web mínima desenvolvida para o trabalho final da disciplina de CI/CD do MBA. O objetivo é demonstrar uma aplicação NestJS MVC com front-end, práticas básicas de qualidade e um pipeline de entrega contínua para o Azure App Service.

## Funcionalidade

A aplicação disponibiliza uma única página pública renderizada no servidor. A página apresenta o título abaixo e a lista dos integrantes do grupo.

> Criação de um pipeline para Build e deploy de uma aplicação

- 367615 — Helen Regina Tufanini Rodrigues Bassetto
- 368987 — Cássio Góes de Moraes Cordeiro
- 367181 — Eliel Michelmann Gaspar
- 367644 — Gabriel Merlin Alfano
- 366806 — Lucas Emanuel Lisboa
- 369223 — Vinicius Silveira Chaves

## Tecnologias

- Node.js 24 LTS
- NestJS com MVC e Handlebars
- Jest para testes unitários e de integração HTTP
- GitHub Actions
- Azure App Service para Linux

## Execução local

Após a implementação da aplicação, utilize Node.js 24 LTS e execute:

```bash
npm ci
npm run start:dev
```

Em seguida, acesse a URL informada pelo NestJS no terminal, normalmente `http://localhost:3000`.

## Qualidade e testes

Os comandos abaixo devem ser executados antes de enviar alterações:

```bash
npm run lint
npm run format:check
npm test
npm run test:e2e
npm run build
```

O teste de maior nível realiza uma requisição HTTP à página pública e confirma o título e todos os integrantes do grupo. Assim, ele valida o comportamento visível para quem acessa a aplicação.

## Pipeline CI/CD

O GitHub Actions organiza a entrega em três etapas explícitas:

1. **Test** — instala as dependências, executa lint, valida a formatação e roda os testes.
2. **Build** — gera a versão de produção da aplicação após o sucesso da etapa de testes.
3. **Deploy** — envia o pacote gerado para o Azure App Service após o sucesso de todas as etapas anteriores.

Pull requests direcionados à branch `main` executam as etapas de teste e build. Pushes para `main` executam também o deploy.

## Deploy no Azure App Service

O deploy é direto para o Azure App Service Linux `trabalho-final-cicd`, configurado com Node.js 24 LTS. Não são utilizados Docker, imagens de contêiner ou registro de contêineres.

Antes do primeiro deploy, a equipe deve:

1. Criar manualmente o Azure App Service Linux com o runtime Node.js 24 LTS.
2. Baixar o arquivo **Publish Profile** no portal do Azure.
3. Criar no repositório GitHub o secret `AZURE_WEBAPP_PUBLISH_PROFILE` com o conteúdo XML completo desse arquivo.

O workflow utiliza `azure/webapps-deploy@v3` e esse secret para publicar um pacote ZIP com a aplicação compilada e suas dependências de produção. Nunca envie o Publish Profile ou qualquer credencial para o repositório.

## Escopo

O projeto não inclui autenticação, banco de dados, APIs, páginas adicionais, infraestrutura como código ou provisionamento automático dos recursos Azure. As evidências finais da entrega serão organizadas manualmente pela equipe em um arquivo ZIP após a conclusão do projeto.

## Planejamento

A especificação e os tickets de implementação estão em `.scratch/cicd-final-project/`.
