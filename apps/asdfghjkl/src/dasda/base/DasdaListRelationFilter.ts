/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DasdaWhereInput } from "./DasdaWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DasdaListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DasdaWhereInput,
  })
  @ValidateNested()
  @Type(() => DasdaWhereInput)
  @IsOptional()
  @Field(() => DasdaWhereInput, {
    nullable: true,
  })
  every?: DasdaWhereInput;

  @ApiProperty({
    required: false,
    type: () => DasdaWhereInput,
  })
  @ValidateNested()
  @Type(() => DasdaWhereInput)
  @IsOptional()
  @Field(() => DasdaWhereInput, {
    nullable: true,
  })
  some?: DasdaWhereInput;

  @ApiProperty({
    required: false,
    type: () => DasdaWhereInput,
  })
  @ValidateNested()
  @Type(() => DasdaWhereInput)
  @IsOptional()
  @Field(() => DasdaWhereInput, {
    nullable: true,
  })
  none?: DasdaWhereInput;
}
export { DasdaListRelationFilter as DasdaListRelationFilter };
