import { Injectable } from '@nestjs/common'
import { CreateGoodDto } from './dto/create-good.dto'
import { UpdateGoodDto } from './dto/update-good.dto'
import { Repository } from 'typeorm'
import { Good } from './entities/good.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { ListGoodDto } from './dto/list-good.dto'

@Injectable()
export class GoodsService {
  constructor(
    @InjectRepository(Good)
    private goodsRepository: Repository<Good>
  ) {}
  async create(createGoodDto: CreateGoodDto) {
    const good = new CreateGoodDto()
    good.cycleId = Number(createGoodDto.cycleId)
    good.categoryId = Number(createGoodDto.categoryId)
    good.name = createGoodDto.name
    good.img = createGoodDto.img
    good.link = createGoodDto.img
    good.gender = createGoodDto.gender
    await this.goodsRepository.save(good)
    return 'success'
  }

  async findAll(listGoodDto: ListGoodDto) {
    return await this.goodsRepository.find({
      where: {
        ...listGoodDto
      },
      relations: ['category', 'cycle']
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} good`
  }

  update(id: number, updateGoodDto: UpdateGoodDto) {
    return `This action updates a #${id} good`
  }

  remove(id: number) {
    return `This action removes a #${id} good`
  }
}
