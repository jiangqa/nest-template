import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { UserModule } from './user/user.module'
import { ConfigModule } from '@nestjs/config'
import { databaseConfig } from '../config/index.config'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot(databaseConfig()),
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
