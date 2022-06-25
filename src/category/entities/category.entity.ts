import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: 'id'
  })
  readonly id: number

  @Column()
  @ApiProperty({
    description: '分类名称'
  })
  readonly name: string

  @Column({
    default: true
  })
  @ApiProperty({
    description: '是否活跃'
  })
  isActive: boolean
}
