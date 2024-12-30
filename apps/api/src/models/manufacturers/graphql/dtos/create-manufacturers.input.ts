import { InputType, PickType } from '@nestjs/graphql'
import { Manufacturers } from '../entity/manufacturers.entity'

@InputType()
export class CreateManufacturersInput extends PickType(
  Manufacturers,
  ['uid'],
  InputType,
) {}
