import { Field, ObjectType } from '@nestjs/graphql'
import { Retailer as RetailerType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Retailer implements RestrictProperties<Retailer, RetailerType> {
  @Field(() => Date)
  updatedAt: Date
  @Field(() => String)
  uid: string
  @Field(() => Date)
  createdAt: Date
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
