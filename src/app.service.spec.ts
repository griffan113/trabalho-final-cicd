import { AppService } from "./app.service";

describe("AppService", () => {
  it("provides the complete immutable team roster", () => {
    const roster = new AppService().getPublicRoster();

    expect(roster.projectTitle).toBe(
      "Criação de um pipeline para Build e deploy de uma aplicação",
    );
    expect(roster.teamMembers).toHaveLength(6);
    expect(roster.teamMembers[0]).toEqual({
      rmNumber: "367615",
      fullName: "Helen Regina Tufanini Rodrigues Bassetto",
    });
  });
});
