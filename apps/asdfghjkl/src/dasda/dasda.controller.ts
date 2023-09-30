import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DasdaService } from "./dasda.service";
import { DasdaControllerBase } from "./base/dasda.controller.base";

@swagger.ApiTags("dasdas")
@common.Controller("dasdas")
export class DasdaController extends DasdaControllerBase {
  constructor(
    protected readonly service: DasdaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
