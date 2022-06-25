import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne
} from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { GenderEnum } from '../../../enum/gender.enum'
import { Cycle } from '../../cycle/entities/cycle.entity'
import { Category } from '../../category/entities/category.entity'

@Entity()
export class Good {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: 'id'
  })
  readonly id: number

  @Column()
  @ApiProperty({
    description: '商品名称'
  })
  readonly name: string

  @Column()
  @ApiProperty({
    description: '商品图片'
  })
  readonly img: string

  @ManyToOne(() => Cycle)
  @JoinColumn()
  // @Column()
  @ApiProperty({
    description: '商品周期'
  })
  readonly cycle: Cycle

  @Column()
  readonly cycleId: number

  @ManyToOne(() => Category)
  @JoinColumn()
  // @Column()
  @ApiProperty({
    description: '商品分类'
  })
  readonly category: Category

  @Column()
  readonly categoryId: number

  @Column()
  @ApiProperty({
    description: '商品链接'
  })
  readonly link: string

  @Column({
    type: 'enum',
    enum: GenderEnum,
    default: GenderEnum.NoGender
  })
  @ApiProperty({
    description: '性别',
    enum: GenderEnum
  })
  readonly gender: GenderEnum

  @CreateDateColumn()
  @ApiProperty({
    description: '创建时间',
    type: Date
  })
  readonly createTime: Date
}
