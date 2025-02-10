import { Component } from '@angular/core';
import { IProject, ProjectService } from './project-component.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-component',
  imports: [CommonModule],
  templateUrl: './project-component.component.html',
  styleUrl: './project-component.component.css',
  providers: [ProjectService]
})
export class ProjectComponentComponent {
  projects: IProject[] = [];
  constructor(private projectService: ProjectService) {
    this.projects = projectService.getProjects();
  }
}
