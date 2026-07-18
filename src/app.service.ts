import { Injectable } from "@nestjs/common";

export interface TeamMember {
  readonly fullName: string;
  readonly rmNumber: string;
}

export interface PublicRoster {
  readonly projectTitle: string;
  readonly teamMembers: readonly TeamMember[];
}

@Injectable()
export class AppService {
  getPublicRoster(): PublicRoster {
    return {
      projectTitle:
        "Criação de um pipeline para Build e deploy de uma aplicação",
      teamMembers: [
        {
          rmNumber: "367615",
          fullName: "Helen Regina Tufanini Rodrigues Bassetto",
        },
        { rmNumber: "368987", fullName: "Cássio Góes de Moraes Cordeiro" },
        { rmNumber: "367181", fullName: "Eliel Michelmann Gaspar" },
        { rmNumber: "367644", fullName: "Gabriel Merlin Alfano" },
        { rmNumber: "366806", fullName: "Lucas Emanuel Lisboa" },
        { rmNumber: "369223", fullName: "Vinicius Silveira Chaves" },
      ],
    };
  }
}
