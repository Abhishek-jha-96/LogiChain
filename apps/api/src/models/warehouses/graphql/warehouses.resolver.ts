import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { WarehousesService } from './warehouses.service'
import { Warehouse } from './entity/warehouse.entity'
import {
  FindManyWarehouseArgs,
  FindUniqueWarehouseArgs,
} from './dtos/find.args'
import { CreateWarehouseInput } from './dtos/create-warehouse.input'
import { UpdateWarehouseInput } from './dtos/update-warehouse.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { GetUserType } from '@foundation/util/types'

@Resolver(() => Warehouse)
export class WarehousesResolver {
  constructor(
    private readonly warehousesService: WarehousesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Warehouse)
  createWarehouse(@Args('createWarehouseInput') args: CreateWarehouseInput) {
    return this.warehousesService.create(args)
  }

  @Query(() => [Warehouse], { name: 'warehouses' })
  findAll(@Args() args: FindManyWarehouseArgs) {
    return this.warehousesService.findAll(args)
  }

  @Query(() => Warehouse, { name: 'warehouse' })
  findOne(@Args() args: FindUniqueWarehouseArgs) {
    return this.warehousesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Warehouse)
  async updateWarehouse(
    @Args('updateWarehouseInput') args: UpdateWarehouseInput,
    @GetUser() user: GetUserType,
  ) {
    const warehouse = await this.prisma.warehouse.findUnique({
      where: { id: args.id },
    })
    checkRowLevelPermission(user)
    return this.warehousesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Warehouse)
  async removeWarehouse(
    @Args() args: FindUniqueWarehouseArgs,
    @GetUser() user: GetUserType,
  ) {
    const warehouse = await this.prisma.warehouse.findUnique(args)
    checkRowLevelPermission(user)
    return this.warehousesService.remove(args)
  }
}
