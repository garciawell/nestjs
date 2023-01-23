import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    if (process.env.NODE_ENV === 'production') {
      return {
        type: 'postgres',
        synchronize: false,
        database: this.configService.get<string>('DB_NAME'),
        autoLoadEntities: true,
        url: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false,
        },
      };
    }
    return {
      type: 'sqlite',
      synchronize: process.env.NODE_ENV === 'test' ? true : false,
      database: this.configService.get<string>('DB_NAME'),
      autoLoadEntities: true,
    };
  }
}
