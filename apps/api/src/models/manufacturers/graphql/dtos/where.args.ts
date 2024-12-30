import { InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args'

@InputType()
export class ManufacturersWhereUniqueInput {
  uid: string
}

@InputType()
export class ManufacturerWhereInputStrict
  implements
    RestrictProperties<
      ManufacturerWhereInputStrict,
      Prisma.ManufacturerWhereInput
    >
{
  uid: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  user: UserRelationFilter
  Product: Prisma.ProductListRelationFilter
  Warehouse: Prisma.WarehouseListRelationFilter

  AND: ManufacturersWhereInput[]
  OR: ManufacturersWhereInput[]
  NOT: ManufacturersWhereInput[]
}

@InputType()
export class ManufacturersWhereInput extends PartialType(
  ManufacturerWhereInputStrict,
) {}

@InputType()
export class ManufacturersListRelationFilter {
  every?: ManufacturersWhereInput
  some?: ManufacturersWhereInput
  none?: ManufacturersWhereInput
}

@InputType()
export class ManufacturersRelationFilter {
  is?: ManufacturersWhereInput
  isNot?: ManufacturersWhereInput
}
