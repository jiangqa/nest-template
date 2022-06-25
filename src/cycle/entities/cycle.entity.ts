import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'

@Entity()
export class Cycle {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: 'id'
  })
  readonly id: number

  @Column({
    unique: true
  })
  @ApiProperty({
    description: '上架周期名称'
  })
  readonly name: string

  @Column({
    default: true
  })
  @ApiProperty({
    description: '是否活跃'
  })
  isActive: boolean

  @Column()
  @ApiProperty({
    description: '活跃开始时间',
    type: Date
  })
  readonly activeTime: Date

  @CreateDateColumn()
  @ApiProperty({
    description: '创建时间',
    type: Date
  })
  readonly createTime: Date
}
