import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ProductOrderByRelationAggregateInput } from 'src/models/products/graphql/dtos/order-by.args'
import { UserOrderByWithRelationInput } from 'src/models/users/graphql/dtos/order-by.args'
import { WarehouseOrderByRelationAggregateInput } from 'src/models/warehouses/graphql/dtos/order-by.args'

@InputType()
export class ManufacturersOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ManufacturersOrderByWithRelationInputStrict,
      Prisma.ManufacturerOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  uid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  user: UserOrderByWithRelationInput
  Product: ProductOrderByRelationAggregateInput
  Warehouse: WarehouseOrderByRelationAggregateInput
}

@InputType()
export class ManufacturersOrderByWithRelationInput extends PartialType(
  ManufacturersOrderByWithRelationInputStrict,
) {}

@InputType()
export class ManufacturersOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
