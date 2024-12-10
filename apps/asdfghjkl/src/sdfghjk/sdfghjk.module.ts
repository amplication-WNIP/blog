import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SdfghjkModuleBase } from "./base/sdfghjk.module.base";
import { SdfghjkService } from "./sdfghjk.service";
import { SdfghjkController } from "./sdfghjk.controller";
import { SdfghjkResolver } from "./sdfghjk.resolver";

@Module({
  imports: [SdfghjkModuleBase, forwardRef(() => AuthModule)],
  controllers: [SdfghjkController],
  providers: [SdfghjkService, SdfghjkResolver],
  exports: [SdfghjkService],
})
export class SdfghjkModule {}
