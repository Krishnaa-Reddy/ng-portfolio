import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { NgxGridpatternComponent } from '@omnedia/ngx-gridpattern';
import { NgxShineBorderComponent } from '@omnedia/ngx-shine-border';
import { NgxSpotlightComponent } from '@omnedia/ngx-spotlight';
import { NgxSwapyComponent } from '@omnedia/ngx-swapy';
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';
import { NgxWordPullupComponent } from '@omnedia/ngx-word-pullup';
import { features } from './../data/index';
import { AboutComponent } from './about/about.component';
import { HeroComponent } from './hero/hero.component';
import { MyApproachesComponent } from './my-approaches/my-approaches.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { TitleHeaderComponent } from './shared/title-header/title-header.component';
import { SpotlightComponent } from './spotlight.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgxSwapyComponent,
    SpotlightComponent,
    CommonModule,
    NgxGridpatternComponent,
    NgxTypewriterComponent,
    NgxWordPullupComponent,
    MatButtonModule,
    NgxShineBorderComponent,
    NavbarComponent,
    HeroComponent,
    ProjectsComponent,
    AboutComponent,
    NgxSpotlightComponent,
    TestimonialsComponent,
    WorkExperienceComponent,
    MyApproachesComponent,
    TitleHeaderComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ng-portfolio';
  features = features;

  titleHeaders : Record<string, TitleHeader> = {
    'projects' : { title1: 'A small section of', title2: 'recent projects' },
    'testimonials' : { title1: 'My', title2: 'Tech stack' },
    'work-experience' : { title1: 'My', title2: 'experience' },
    'my-approaches' : { title1: 'My', title2: 'approaches' },
  }  

  toggleDetails(index: number) {
    this.features[index].showDetails = !this.features[index].showDetails;
  }

  public smoothScrollToElement(element: HTMLElement): void {
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
  
}
