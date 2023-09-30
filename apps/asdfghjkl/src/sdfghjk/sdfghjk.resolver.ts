import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SdfghjkResolverBase } from "./base/sdfghjk.resolver.base";
import { Sdfghjk } from "./base/Sdfghjk";
import { SdfghjkService } from "./sdfghjk.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Sdfghjk)
export class SdfghjkResolver extends SdfghjkResolverBase {
  constructor(
    protected readonly service: SdfghjkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
