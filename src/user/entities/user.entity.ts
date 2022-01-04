import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: 'id'
  })
  readonly id: number

  @Column()
  @ApiProperty({
    description: '用户名'
  })
  readonly username: string

  @Column()
  @ApiProperty({
    description: '手机号'
  })
  readonly phone: string

  @Column()
  @ApiProperty({
    description: '密码'
  })
  readonly password: string

  @CreateDateColumn()
  @ApiProperty({
    description: '创建时间',
    type: Date
  })
  readonly createTime: Date

  @UpdateDateColumn()
  @ApiProperty({
    description: '更新时间',
    type: Date
  })
  readonly updateTime: Date

  @Column({
    default: true
  })
  @ApiProperty({
    description: '是否活跃',
    type: Boolean
  })
  isActive: boolean
}
