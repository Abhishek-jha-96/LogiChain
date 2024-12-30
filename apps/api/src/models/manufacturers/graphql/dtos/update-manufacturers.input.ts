import { CreateManufacturersInput } from './create-manufacturers.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Manufacturer } from '@prisma/client'

@InputType()
export class UpdateManufacturersInput extends PartialType(
  CreateManufacturersInput,
) {
  uid: Manufacturer['uid']
}
