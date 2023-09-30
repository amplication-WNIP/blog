import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SdfghjkServiceBase } from "./base/sdfghjk.service.base";

@Injectable()
export class SdfghjkService extends SdfghjkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
