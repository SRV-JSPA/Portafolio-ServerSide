import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EducationModule } from './education/education.module';
import {TypeOrmModule} from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 33069,
    username: 'root',
    password: 'pereira',
    database: 'portafolio',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),EducationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
