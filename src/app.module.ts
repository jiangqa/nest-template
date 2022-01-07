import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { UserModule } from './user/user.module'
import { ConfigModule } from '@nestjs/config'
import { databaseConfig } from '../config/index.config'
import { AuthModule } from './auth/auth.module'
import { APP_GUARD } from '@nestjs/core'
import { RateLimiterModule, RateLimiterGuard } from 'nestjs-rate-limiter'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),

    TypeOrmModule.forRootAsync({
      useFactory() {
        return databaseConfig()
      }
    }),
    RateLimiterModule.register({
      points: 100,
      duration: 60
    }),
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RateLimiterGuard
    }
  ]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
