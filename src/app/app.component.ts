import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgxGridpatternComponent } from '@omnedia/ngx-gridpattern';
import { NgxSpotlightComponent } from '@omnedia/ngx-spotlight';
import { features } from './../data/index';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { TitleHeaderComponent } from './shared/title-header/title-header.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NgxGridpatternComponent,
    MatButtonModule,
    NavbarComponent,
    HeroComponent,
    ProjectsComponent,
    AboutComponent,
    NgxSpotlightComponent,
    TechStackComponent,
    WorkExperienceComponent,
    TitleHeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ng-portfolio';
  features = features;

  titleHeaders : Record<string, TitleHeader> = {
    'projects' : { title1: 'A small section of', title2: 'recent projects' },
    'tech-stack' : { title1: 'My', title2: 'Tech stack' },
    'work-experience' : { title1: 'My', title2: 'experience' },
    'about' : { title1: 'Let\'s', title2: 'Connect' },
  }  

  toggleDetails(index: number) {
    this.features[index].showDetails = !this.features[index].showDetails;
  }

  public smoothScrollToElement(element: HTMLElement): void {
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
  
}
