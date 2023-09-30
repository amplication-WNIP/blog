/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Sdfghjk } from "@prisma/client";

export class SdfghjkServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SdfghjkCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SdfghjkCountArgs>
  ): Promise<number> {
    return this.prisma.sdfghjk.count(args);
  }

  async findMany<T extends Prisma.SdfghjkFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SdfghjkFindManyArgs>
  ): Promise<Sdfghjk[]> {
    return this.prisma.sdfghjk.findMany(args);
  }
  async findOne<T extends Prisma.SdfghjkFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SdfghjkFindUniqueArgs>
  ): Promise<Sdfghjk | null> {
    return this.prisma.sdfghjk.findUnique(args);
  }
  async create<T extends Prisma.SdfghjkCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SdfghjkCreateArgs>
  ): Promise<Sdfghjk> {
    return this.prisma.sdfghjk.create<T>(args);
  }
  async update<T extends Prisma.SdfghjkUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SdfghjkUpdateArgs>
  ): Promise<Sdfghjk> {
    return this.prisma.sdfghjk.update<T>(args);
  }
  async delete<T extends Prisma.SdfghjkDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SdfghjkDeleteArgs>
  ): Promise<Sdfghjk> {
    return this.prisma.sdfghjk.delete(args);
  }
}
