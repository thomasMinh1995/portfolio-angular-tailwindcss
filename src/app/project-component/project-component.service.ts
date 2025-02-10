import { Injectable } from '@angular/core';

export interface IProject {
  name: string;
  description: string;
  imageUrl: string;
  status: string;
  technologies: string[];
}

@Injectable()
export class ProjectService {
  private projects: IProject[] = [
    {
      name: 'Portfolio Website',
      imageUrl: 'porfolio.gif',
      description: 'My personal portfolio website built with Angular and TailwindCss',
      status: 'active',
      technologies: ['Angular v19', 'TailwindCss',],
    },
    {
      name: 'Personal Post API with Nuxt',
      imageUrl:'',
      description: `This project is created for personal use only. I'm still learning how to work with the Vue.js/Nuxt 3 ecosystem`,
      status: 'active',
      technologies: ['Nuxt', 'TanStack Vue Query: Data fetching', 'Pinia:  State management', 'PrimeVue: Base UI',  'TailwindCSS', 'Docker'],
    },
    {
      name: 'Project 3',
      imageUrl:'',
      description: 'This is a sample project',
      status: 'active',
      technologies: ['Angular', 'NodeJS', 'MongoDB'],
    },
    {
      name: 'Project 4',
      imageUrl:'',
      description: 'This is a sample project',
      status: 'inactive',
      technologies: ['Angular', 'NodeJS', 'MongoDB'],
    },
  ];

  getProjects(): IProject[] {
    return this.projects;
  }
}
