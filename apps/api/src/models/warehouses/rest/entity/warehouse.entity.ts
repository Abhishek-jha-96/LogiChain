import { Warehouse } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class WarehouseEntity
  implements RestrictProperties<WarehouseEntity, Warehouse>
{
  id: number
  createdAt: Date
  updatedAt: Date
  name: string
  description: string
  manufacturerId: string
  distributorId: string
  retailerId: string
}
