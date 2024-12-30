import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ManufacturersService } from './manufacturers.service'
import { Manufacturers } from './entity/manufacturers.entity'
import {
  FindManyManufacturersArgs,
  FindUniqueManufacturersArgs,
} from './dtos/find.args'
import { CreateManufacturersInput } from './dtos/create-manufacturers.input'
import { UpdateManufacturersInput } from './dtos/update-manufacturers.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { GetUserType } from '@foundation/util/types'

@Resolver(() => Manufacturers)
export class ManufacturersResolver {
  constructor(
    private readonly manufacturersService: ManufacturersService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Manufacturers)
  createManufacturers(
    @Args('createManufacturersInput') args: CreateManufacturersInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.manufacturersService.create(args)
  }

  @Query(() => [Manufacturers], { name: 'manufacturers' })
  findAll(@Args() args: FindManyManufacturersArgs) {
    return this.manufacturersService.findAll(args)
  }

  @Query(() => Manufacturers, { name: 'manufacturers' })
  findOne(@Args() args: FindUniqueManufacturersArgs) {
    return this.manufacturersService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Manufacturers)
  async updateManufacturers(
    @Args('updateManufacturersInput') args: UpdateManufacturersInput,
    @GetUser() user: GetUserType,
  ) {
    const manufacturers = await this.prisma.manufacturer.findUnique({
      where: { uid: args.uid },
    })
    checkRowLevelPermission(user, manufacturers.uid)
    return this.manufacturersService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Manufacturers)
  async removeManufacturers(
    @Args() args: FindUniqueManufacturersArgs,
    @GetUser() user: GetUserType,
  ) {
    const manufacturers = await this.prisma.manufacturer.findUnique(args)
    checkRowLevelPermission(user, manufacturers.uid)
    return this.manufacturersService.remove(args)
  }
}
