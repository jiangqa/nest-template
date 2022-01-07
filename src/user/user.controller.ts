import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import {
  ApiOperation,
  ApiTags,
  ApiResponse,
  ApiBearerAuth
} from '@nestjs/swagger'
import { User } from './entities/user.entity'
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard'
import { RoleEnum } from '../../enum/role.enum'
import { Roles } from '../../decorator/roles.decorator'
import { RolesGuard } from '../../guard/roles.guard'

@ApiBearerAuth()
@Controller('user')
@ApiTags('用户')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({
    summary: '插入用户'
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto)
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  @ApiOperation({ summary: '查询所有用户' })
  @ApiResponse({ type: [User] })
  @Roles(RoleEnum.Admin)
  findAll(@Request() req) {
    console.log(req)
    return this.userService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id)
  }
}
