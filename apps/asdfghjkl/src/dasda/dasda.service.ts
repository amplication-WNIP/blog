import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DasdaServiceBase } from "./base/dasda.service.base";

@Injectable()
export class DasdaService extends DasdaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
