import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards
} from '@nestjs/common'
import { CycleService } from './cycle.service'
import { CreateCycleDto } from './dto/create-cycle.dto'
import { UpdateCycleDto } from './dto/update-cycle.dto'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard'
import { RolesGuard } from '../../guard/roles.guard'
import { Roles } from '../../decorator/roles.decorator'
import { RoleEnum } from '../../enum/role.enum'

@ApiBearerAuth()
@Controller('cycle')
@ApiTags('上架周期')
export class CycleController {
  constructor(private readonly cycleService: CycleService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  @ApiOperation({
    summary: '插入周期'
  })
  @Roles(RoleEnum.Admin)
  create(@Body() createCycleDto: CreateCycleDto) {
    return this.cycleService.create(createCycleDto)
  }

  @Get()
  @ApiOperation({
    summary: '所有周期'
  })
  findAll() {
    return this.cycleService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cycleService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCycleDto: UpdateCycleDto) {
    return this.cycleService.update(+id, updateCycleDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cycleService.remove(+id)
  }
}
