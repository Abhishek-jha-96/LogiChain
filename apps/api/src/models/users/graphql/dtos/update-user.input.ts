import { User } from '../entity/user.entity'
import { Field, InputType, PartialType, PickType } from '@nestjs/graphql'

@InputType()
export class UpdateUserInput extends PartialType(
  PickType(User, ['image', 'name']),
) {
  @Field(() => String)
  uid: User['uid']
}
