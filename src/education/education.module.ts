import { Module } from '@nestjs/common';
import { EducationController } from './education.controller';
import { EducationService } from './education.service';
import { education } from './education.entity';
import {TypeOrmModule} from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([education])],
  controllers: [EducationController],
  providers: [EducationService]
})
export class EducationModule {}
