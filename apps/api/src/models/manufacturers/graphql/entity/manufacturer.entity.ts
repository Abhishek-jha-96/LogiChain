import { Field, ObjectType } from '@nestjs/graphql'
import { Manufacturer as ManufacturerType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Manufacturer
  implements RestrictProperties<Manufacturer, ManufacturerType>
{
  @Field(() => String)
  uid: string
  @Field(() => Date)
  createdAt: Date
  @Field(() => Date)
  updatedAt: Date
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
