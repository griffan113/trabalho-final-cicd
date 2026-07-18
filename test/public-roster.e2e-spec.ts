import { NestExpressApplication } from "@nestjs/platform-express";
import { Test } from "@nestjs/testing";
import request from "supertest";

import { AppModule } from "../src/app.module";
import { configureViewEngine } from "../src/main";

describe("Public roster page (e2e)", () => {
  let app: NestExpressApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    configureViewEngine(app);
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it("renders the project title and complete team roster", async () => {
    const response = await request(app.getHttpServer()).get("/").expect(200);

    expect(response.text).toContain("<h1>");
    expect(response.text).toContain("<ul>");
    expect(response.text).toContain(
      "Criação de um pipeline para Build e deploy de uma aplicação",
    );
    expect(response.text).toContain(
      "367615 Helen Regina Tufanini Rodrigues Bassetto",
    );
    expect(response.text).toContain("368987 Cássio Góes de Moraes Cordeiro");
    expect(response.text).toContain("367181 Eliel Michelmann Gaspar");
    expect(response.text).toContain("367644 Gabriel Merlin Alfano");
    expect(response.text).toContain("366806 Lucas Emanuel Lisboa");
    expect(response.text).toContain("369223 Vinicius Silveira Chaves");
  });
});
