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
import { CategoryModule } from './category/category.module'
import { CycleModule } from './cycle/cycle.module'
import { GoodsModule } from './goods/goods.module'

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
    AuthModule,
    CategoryModule,
    CycleModule,
    GoodsModule
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
