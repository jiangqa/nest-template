import { ApiProperty } from '@nestjs/swagger'

export class CreateCycleDto {
  @ApiProperty({ description: '上架周期名称' })
  name: string

  @ApiProperty({ description: '上架时间', type: Date })
  activeTime: Date
}
