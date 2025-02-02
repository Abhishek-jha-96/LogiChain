import { Field, ObjectType } from '@nestjs/graphql'
import { Distributor as DistributorType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Distributor
  implements RestrictProperties<Distributor, DistributorType>
{
  @Field(() => String)
  uid: string
  @Field(() => Date)
  createdAt: Date
  @Field(() => Date)
  updatedAt: Date
}
