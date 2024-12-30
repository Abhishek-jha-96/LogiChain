import { OmitType } from '@nestjs/swagger'
import { ManufacturersEntity } from '../entity/manufacturers.entity'

export class CreateManufacturers extends OmitType(ManufacturersEntity, [
  'createdAt',
  'updatedAt',
]) {
  uid: string
}
