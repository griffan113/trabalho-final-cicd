import { NestExpressApplication } from "@nestjs/platform-express";
import { NestFactory } from "@nestjs/core";
import { engine } from "express-handlebars";
import { join } from "node:path";

import { AppModule } from "./app.module";

export function configureViewEngine(app: NestExpressApplication): void {
  app.engine(
    "hbs",
    engine({
      extname: ".hbs",
      defaultLayout: false,
    }),
  );
  app.setViewEngine("hbs");
  app.setBaseViewsDir(join(process.cwd(), "views"));
}

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  configureViewEngine(app);
  await app.listen(process.env.PORT ?? 3000);
}

if (require.main === module) {
  void bootstrap();
}
