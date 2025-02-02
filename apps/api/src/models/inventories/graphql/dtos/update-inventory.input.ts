import { CreateInventoryInput } from './create-inventory.input'
import { Field, ID, InputType, PartialType } from '@nestjs/graphql'
import { Inventory } from '@prisma/client'

@InputType()
export class UpdateInventoryInput extends PartialType(CreateInventoryInput) {
  @Field(() => ID)
  id: Inventory['id']
}
