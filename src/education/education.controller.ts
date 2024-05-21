import { Controller, Post, Body } from '@nestjs/common';
import { EducationService } from './education.service';
import { CreateEduDto } from './dto/createEdu.dto';

@Controller('education')
export class EducationController {
    constructor(private eduService: EducationService) { }

    @Post()
    createEdu(@Body() newEdu: CreateEduDto ){
        return this.eduService.createEducation(newEdu)
    }
}
