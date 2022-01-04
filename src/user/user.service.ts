import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm'
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}
  async create(createUserDto: CreateUserDto) {
    await this.userRepository.insert(createUserDto)
    return this.userRepository.findOne({ username: createUserDto.username })
  }

  async findAll() {
    return await this.userRepository.find({
      select: [
        'id',
        'username',
        'phone',
        'isActive',
        'createTime',
        'updateTime'
      ]
    })
  }

  async findOne(id: number) {
    return this.userRepository.findOne(id)
  }
  async findOneByName(username: string) {
    return this.userRepository.findOne({ username })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
