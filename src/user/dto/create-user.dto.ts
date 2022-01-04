import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({ description: '用户名' })
  username: string

  @ApiProperty({ description: '手机号' })
  phone: string

  @ApiProperty({ description: '密码' })
  password: string
}
