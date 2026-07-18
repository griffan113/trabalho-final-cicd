import { Controller, Get, Render } from "@nestjs/common";

import { AppService, PublicRoster } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render("roster")
  publicRoster(): PublicRoster {
    return this.appService.getPublicRoster();
  }
}
