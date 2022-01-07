import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { ROLES_KEY } from '../decorator/roles.decorator'
import { RoleEnum } from '../enum/role.enum'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<RoleEnum[]>(
      ROLES_KEY,
      context.getHandler()
    )
    if (!roles?.length) {
      return true
    }
    const { user } = context.switchToHttp().getRequest()
    console.log(user)

    return roles.some((role) => user.roles === role)
  }
}
