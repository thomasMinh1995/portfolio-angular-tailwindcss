import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ExperiencesSectionComponent } from "./experiences-section/experiences-section.component";
import { FooterComponent } from "./footer/footer.component";
import { ProjectComponentComponent } from "./project-component/project-component.component";

@Component({
  selector: 'app-root',
  template: `
    <app-navigation></app-navigation>
    <router-outlet></router-outlet>
    <app-hero-section></app-hero-section>

    <app-about-us></app-about-us>

    <app-experiences-section></app-experiences-section>

    <app-project-component></app-project-component>

    <app-footer></app-footer>
  `,
  styleUrl: './app.component.css',
  imports: [NavigationComponent, RouterOutlet, HeroSectionComponent, AboutUsComponent, ExperiencesSectionComponent, FooterComponent, ProjectComponentComponent]
})
export class AppComponent {
  title = 'my-project';
}
