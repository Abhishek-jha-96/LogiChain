import { Product } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ProductEntity
  implements RestrictProperties<ProductEntity, Product>
{
  id: number
  createdAt: Date
  updatedAt: Date
  name: string
  description: string
  image: string
  manufacturerId: string
}
