import { Manufacturer } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ManufacturersEntity
  implements RestrictProperties<ManufacturersEntity, Manufacturer>
{
  uid: string
  createdAt: Date
  updatedAt: Date
}
