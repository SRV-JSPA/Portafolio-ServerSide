import { Controller, Post, Body, Get } from '@nestjs/common';
import { EducationService } from './education.service';
import { CreateEduDto } from './dto/createEdu.dto';
import { education } from './education.entity';

@Controller('education')
export class EducationController {
    constructor(private eduService: EducationService) { }

    @Post()
    createEdu(@Body() newEdu: CreateEduDto ){
        return this.eduService.createEducation(newEdu)
    }

    @Get()
    getEducations(): Promise<education[]> {
        return this.eduService.getEducations()
    }
}
