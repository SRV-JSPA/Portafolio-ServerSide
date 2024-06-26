import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EducationModule } from './education/education.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'mysql',
    port: 3306,
    username: 'root',
    password: 'pereira',
    database: 'portafolio',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),EducationModule, ProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
