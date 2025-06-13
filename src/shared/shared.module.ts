import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService} from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import mongoConfig from '../config/mongo.config';
import jwtConfig from '../config/jwt.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [mongoConfig, jwtConfig],
    }),
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('mongo.uri'),
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [ConfigModule, MongooseModule],
})
export class SharedModule {}
