import { Controller, Post, Get, Body } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { createProjectDto } from './dto/createProject.dto';
import { projects } from './projects.entity';

@Controller('projects')
export class ProjectsController {
    constructor(private projectService: ProjectsService){}

    @Post()
    createProject(@Body() newProject: createProjectDto){
        return this.projectService.createProject(newProject)
    }

    @Get()
    getProjects(): Promise<projects[]>{
        return this.projectService.getProjects()
    }
}
