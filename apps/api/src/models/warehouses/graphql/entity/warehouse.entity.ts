import { ObjectType } from '@nestjs/graphql'
import { Warehouse as WarehouseType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Warehouse implements RestrictProperties<Warehouse, WarehouseType> {
  id: number
  createdAt: Date
  updatedAt: Date
  name: string
  description: string
  manufacturerId: string
  distributorId: string
  retailerId: string
}
