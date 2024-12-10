import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DasdaModuleBase } from "./base/dasda.module.base";
import { DasdaService } from "./dasda.service";
import { DasdaController } from "./dasda.controller";
import { DasdaResolver } from "./dasda.resolver";

@Module({
  imports: [DasdaModuleBase, forwardRef(() => AuthModule)],
  controllers: [DasdaController],
  providers: [DasdaService, DasdaResolver],
  exports: [DasdaService],
})
export class DasdaModule {}
