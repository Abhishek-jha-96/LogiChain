import { Injectable } from '@nestjs/common'
import {
  FindManyManufacturersArgs,
  FindUniqueManufacturersArgs,
} from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateManufacturersInput } from './dtos/create-manufacturers.input'
import { UpdateManufacturersInput } from './dtos/update-manufacturers.input'

@Injectable()
export class ManufacturersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createManufacturersInput: CreateManufacturersInput) {
    return this.prisma.manufacturer.create({
      data: createManufacturersInput,
    })
  }

  findAll(args: FindManyManufacturersArgs) {
    return this.prisma.manufacturer.findMany(args)
  }

  findOne(args: FindUniqueManufacturersArgs) {
    return this.prisma.manufacturer.findUnique(args)
  }

  update(updateManufacturersInput: UpdateManufacturersInput) {
    const { uid, ...data } = updateManufacturersInput
    return this.prisma.manufacturer.update({
      where: { uid },
      data: data,
    })
  }

  remove(args: FindUniqueManufacturersArgs) {
    return this.prisma.manufacturer.delete(args)
  }
}
