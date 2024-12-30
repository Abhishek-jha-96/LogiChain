import { ObjectType } from '@nestjs/graphql'
import { Manufacturer as ManufacturersType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Manufacturers
  implements RestrictProperties<Manufacturers, ManufacturersType>
{
  uid: string
  createdAt: Date
  updatedAt: Date
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
