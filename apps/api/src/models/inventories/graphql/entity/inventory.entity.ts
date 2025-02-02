import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Inventory as InventoryType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Inventory implements RestrictProperties<Inventory, InventoryType> {
  @Field(() => ID) // ✅ Marking `id` as a GraphQL field
  id: number

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  updatedAt: Date

  @Field(() => Number)
  productId: number

  @Field(() => Number)
  warehouseId: number

  @Field(() => Number)
  quantity: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
