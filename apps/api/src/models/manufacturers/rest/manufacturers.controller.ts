import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common'

import { PrismaService } from 'src/common/prisma/prisma.service'
import { ApiTags } from '@nestjs/swagger'
import { CreateManufacturers } from './dtos/create.dto'
import { ManufacturersQueryDto } from './dtos/query.dto'
import { UpdateManufacturers } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { ManufacturersEntity } from './entity/manufacturers.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from '@foundation/util/types'

@ApiTags('manufacturers')
@Controller('manufacturers')
export class ManufacturersController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ManufacturersEntity })
  @Post()
  create(@Body() createManufacturerDto: CreateManufacturers) {
    return this.prisma.manufacturer.create({ data: createManufacturerDto })
  }

  @ApiOkResponse({ type: [ManufacturersEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: ManufacturersQueryDto) {
    return this.prisma.manufacturer.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: ManufacturersEntity })
  @Get(':uid')
  findOne(@Param('uid') uid: string) {
    return this.prisma.manufacturer.findUnique({ where: { uid } })
  }

  @ApiOkResponse({ type: ManufacturersEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':uid')
  async update(
    @Param('uid') uid: string,
    @Body() updateManufacturersDto: UpdateManufacturers,
    @GetUser() user: GetUserType,
  ) {
    const manufacturers = await this.prisma.manufacturer.findUnique({
      where: { uid },
    })
    checkRowLevelPermission(user, manufacturers.uid)
    return this.prisma.manufacturer.update({
      where: { uid },
      data: updateManufacturersDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':uid')
  async remove(@Param('uid') uid: string, @GetUser() user: GetUserType) {
    const manufacturers = await this.prisma.manufacturer.findUnique({
      where: { uid },
    })
    checkRowLevelPermission(user, manufacturers.uid)
    return this.prisma.manufacturer.delete({ where: { uid } })
  }
}
