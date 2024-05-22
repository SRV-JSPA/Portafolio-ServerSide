import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { projects } from './projects.entity';
import { Repository } from 'typeorm';
import { createProjectDto } from './dto/createProject.dto';

@Injectable()
export class ProjectsService {
    constructor(@InjectRepository(projects) private projectsRepository: Repository<projects>){}

    createProject(project: createProjectDto){
        const newProject = this.projectsRepository.create(project)
        return this.projectsRepository.save(newProject)
    }

    getProjects(){
        return this.projectsRepository.find()
    }
}
