import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm'
import {education} from './education.entity'
import { CreateEduDto } from './dto/createEdu.dto';

@Injectable()
export class EducationService {
    constructor(@InjectRepository(education) private educationRepository: Repository<education>){}

    createEducation(educationInfo: CreateEduDto){
        const newEdu = this.educationRepository.create(educationInfo);
        return this.educationRepository.save(newEdu);
    }

    getEducations(){
        return this.educationRepository.find();
    }
}
