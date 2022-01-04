import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const config = () => {
  return {
    server_port: parseInt(process.env.SERVER_PORT)
  }
}
export const databaseConfig = (): TypeOrmModuleOptions => {
  const envConfig = process.env
  return {
    type: 'mysql',
    host: envConfig.DATABASE_HOST,
    port: parseInt(envConfig.DATABASE_PORT),
    username: envConfig.DATABASE_USERNAME,
    password: envConfig.DATABASE_PASSWORD,
    database: envConfig.DATABASE,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true
  }
}
export default config
