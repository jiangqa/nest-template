import { ApiProperty } from '@nestjs/swagger'
import { GenderEnum } from '../../../enum/gender.enum'
import { Cycle } from '../../cycle/entities/cycle.entity'
import { Category } from '../../category/entities/category.entity'
import { OneToOne } from 'typeorm'

export class ListGoodDto {
  @ApiProperty({
    description: '性别',
    enum: GenderEnum,
    required: false,
    default: ''
  })
  gender: GenderEnum

  @ApiProperty({ description: '商品周期', required: false, default: '' })
  cycleId: number

  @ApiProperty({ description: '商品分类', required: false, default: '' })
  categoryId: number
}
