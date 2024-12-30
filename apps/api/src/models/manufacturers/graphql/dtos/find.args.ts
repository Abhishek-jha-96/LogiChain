import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ManufacturersOrderByWithRelationInput } from './order-by.args'
import {
  ManufacturersWhereInput,
  ManufacturersWhereUniqueInput,
} from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.ManufacturerScalarFieldEnum, {
  name: 'ManufacturersScalarFieldEnum',
})

@ArgsType()
class FindManyManufacturersArgsStrict
  implements
    RestrictProperties<
      FindManyManufacturersArgsStrict,
      Omit<Prisma.ManufacturerFindManyArgs, 'include' | 'select'>
    >
{
  where: ManufacturersWhereInput
  orderBy: ManufacturersOrderByWithRelationInput[]
  cursor: ManufacturersWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.ManufacturerScalarFieldEnum])
  distinct: Prisma.ManufacturerScalarFieldEnum[]
}

@ArgsType()
export class FindManyManufacturersArgs extends PartialType(
  FindManyManufacturersArgsStrict,
) {}

@ArgsType()
export class FindUniqueManufacturersArgs {
  where: ManufacturersWhereUniqueInput
}
