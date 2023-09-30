/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SdfghjkService } from "../sdfghjk.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SdfghjkCreateInput } from "./SdfghjkCreateInput";
import { SdfghjkWhereInput } from "./SdfghjkWhereInput";
import { SdfghjkWhereUniqueInput } from "./SdfghjkWhereUniqueInput";
import { SdfghjkFindManyArgs } from "./SdfghjkFindManyArgs";
import { SdfghjkUpdateInput } from "./SdfghjkUpdateInput";
import { Sdfghjk } from "./Sdfghjk";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SdfghjkControllerBase {
  constructor(
    protected readonly service: SdfghjkService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Sdfghjk })
  @nestAccessControl.UseRoles({
    resource: "Sdfghjk",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: SdfghjkCreateInput): Promise<Sdfghjk> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Sdfghjk] })
  @ApiNestedQuery(SdfghjkFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Sdfghjk",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Sdfghjk[]> {
    const args = plainToClass(SdfghjkFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Sdfghjk })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Sdfghjk",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: SdfghjkWhereUniqueInput
  ): Promise<Sdfghjk | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Sdfghjk })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Sdfghjk",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: SdfghjkWhereUniqueInput,
    @common.Body() data: SdfghjkUpdateInput
  ): Promise<Sdfghjk | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Sdfghjk })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Sdfghjk",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: SdfghjkWhereUniqueInput
  ): Promise<Sdfghjk | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
