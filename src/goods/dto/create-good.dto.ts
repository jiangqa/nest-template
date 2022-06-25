import { ApiProperty } from '@nestjs/swagger'
import { GenderEnum } from '../../../enum/gender.enum'

export class CreateGoodDto {
  @ApiProperty({ description: '商品名称' })
  name: string

  @ApiProperty({ description: '商品图片' })
  img: string

  @ApiProperty({ description: '商品链接' })
  link: string

  @ApiProperty({
    description: '性别',
    enum: GenderEnum,
    default: GenderEnum.NoGender
  })
  gender: GenderEnum

  @ApiProperty({ description: '商品周期' })
  cycleId: number

  @ApiProperty({ description: '商品分类' })
  categoryId: number
}
