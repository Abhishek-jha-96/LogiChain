import { InputType, OmitType } from '@nestjs/graphql'
import { Inventory } from '../entity/inventory.entity'

@InputType()
export class CreateInventoryInput extends OmitType(
  Inventory,
  ['id', 'createdAt', 'updatedAt'],
  InputType,
) {}
