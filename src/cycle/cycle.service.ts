import { Injectable } from '@nestjs/common'
import { CreateCycleDto } from './dto/create-cycle.dto'
import { UpdateCycleDto } from './dto/update-cycle.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Cycle } from './entities/cycle.entity'

@Injectable()
export class CycleService {
  constructor(
    @InjectRepository(Cycle)
    private cycleRepository: Repository<Cycle>
  ) {}
  async create(createCycleDto: CreateCycleDto) {
    await this.cycleRepository.insert(createCycleDto)
    return await this.cycleRepository.findOne({
      name: createCycleDto.name
    })
  }

  async findAll() {
    return await this.cycleRepository.find({
      select: ['id', 'name', 'createTime', 'isActive', 'activeTime'],
      order: {
        activeTime: 'DESC'
      },
      where: {
        isActive: true
      }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} cycle`
  }

  update(id: number, updateCycleDto: UpdateCycleDto) {
    return `This action updates a #${id} cycle`
  }

  remove(id: number) {
    return `This action removes a #${id} cycle`
  }
}
