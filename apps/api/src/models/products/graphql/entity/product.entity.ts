import { Field, ObjectType } from '@nestjs/graphql'
import { Product as ProductType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Product implements RestrictProperties<Product, ProductType> {
  @Field()
  id: number

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date

  @Field()
  name: string

  @Field({ nullable: true })
  description: string

  @Field({ nullable: true })
  image: string

  @Field()
  manufacturerId: string
}
