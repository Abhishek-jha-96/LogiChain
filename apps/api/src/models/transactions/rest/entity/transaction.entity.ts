import { Transaction } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class TransactionEntity
  implements RestrictProperties<TransactionEntity, Transaction>
{
  id: number
  createdAt: Date
  updatedAt: Date
  productId: number
  fromWarehouseId: number
  toWarehouseId: number
}
