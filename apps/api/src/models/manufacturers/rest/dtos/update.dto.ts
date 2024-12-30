import { PartialType } from '@nestjs/swagger'
import { CreateManufacturers } from './create.dto'
import { Manufacturer } from '@prisma/client'

export class UpdateManufacturers extends PartialType(CreateManufacturers) {
  uid: Manufacturer['uid']
}
