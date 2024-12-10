import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SdfghjkService } from "./sdfghjk.service";
import { SdfghjkControllerBase } from "./base/sdfghjk.controller.base";

@swagger.ApiTags("sdfghjks")
@common.Controller("sdfghjks")
export class SdfghjkController extends SdfghjkControllerBase {
  constructor(
    protected readonly service: SdfghjkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
