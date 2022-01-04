import { Controller, Post, Request, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LocalAuthGuard } from './guard/local-auth.guard'
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger'
import { LoginDto } from './dto/login.dto'

@Controller('auth')
@ApiTags('认证')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({
    type: LoginDto
  })
  @ApiOperation({
    summary: '登录'
  })
  async login(@Request() req) {
    return this.authService.login(req.user)
  }
}
