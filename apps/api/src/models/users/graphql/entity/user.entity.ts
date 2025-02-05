import { Field, InputType, ObjectType, registerEnumType } from '@nestjs/graphql'
import { User as UserType, $Enums } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType($Enums.AuthProviderType, {
  name: 'AuthProviderType',
})

@ObjectType()
export class User implements RestrictProperties<User, UserType> {
  @Field(() => String)
  uid: string
  @Field(() => Date)
  createdAt: Date
  @Field(() => Date)
  updatedAt: Date
  @Field({ nullable: true })
  name: string
  @Field({ nullable: true })
  image: string
}

@InputType()
export class LoginInput {
  @Field(() => String)
  email: string
  password: string
}

@ObjectType()
export class AuthOutput {
  user: User
  @Field(() => String)
  token: string
}
