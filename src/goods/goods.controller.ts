import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Query,
  Delete,
  Param,
  UseGuards,
  Req
} from '@nestjs/common'
import { GoodsService } from './goods.service'
import { CreateGoodDto } from './dto/create-good.dto'
import { UpdateGoodDto } from './dto/update-good.dto'
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard'
import { RolesGuard } from '../../guard/roles.guard'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags
} from '@nestjs/swagger'
import { Roles } from '../../decorator/roles.decorator'
import { RoleEnum } from '../../enum/role.enum'
import { Good } from '../goods/entities/good.entity'
import { ListGoodDto } from './dto/list-good.dto'

@ApiBearerAuth()
@Controller('goods')
@ApiTags('商品')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  @ApiOperation({
    summary: '插入商品'
  })
  @Roles(RoleEnum.Admin)
  create(@Body() createGoodDto: CreateGoodDto) {
    return this.goodsService.create(createGoodDto)
  }

  @Get()
  @ApiOperation({
    summary: '获取商品'
  })
  @ApiResponse({ type: [Good] })
  findAll(@Query() listGoodDto: ListGoodDto) {
    console.log(listGoodDto)
    return this.goodsService.findAll(listGoodDto)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.goodsService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGoodDto: UpdateGoodDto) {
    return this.goodsService.update(+id, updateGoodDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.goodsService.remove(+id)
  }
}
