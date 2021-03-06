import { Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByName(username)
    if (user && user.password === pass) {
      const { password, ...result } = user
      return result
    }
    return null
  }
  async login(user) {
    console.log(user)
    const payload = { phone: user.phone, sub: user.id, roles: user.roles }
    return {
      access_token: this.jwtService.sign(payload),
      user: payload
    }
  }
}
