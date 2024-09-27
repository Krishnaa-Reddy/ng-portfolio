import { Component } from '@angular/core';
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';
import { MatButtonModule } from '@angular/material/button';
import { NgxShineBorderComponent } from '@omnedia/ngx-shine-border';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgxGridpatternComponent } from '@omnedia/ngx-gridpattern';
import { NgxSwapyComponent } from '@omnedia/ngx-swapy';
import { NgxWordPullupComponent } from '@omnedia/ngx-word-pullup';
import { NavbarComponent } from '../navbar/navbar.component';
import { SpotlightComponent } from '../spotlight.component';

@Component({
  selector: 'hero',
  standalone: true,
  // imports: [NgxTypewriterComponent, MatButtonModule, NgxShineBorderComponent],
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
    HeroComponent
  ],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  features = [
    {
      title: 'Dynamic Spotlight',
      description:
        'Experience a responsive spotlight that follows your cursor.',
      details:
        "Our spotlight component uses Angular's powerful rendering engine to create a smooth, performant effect that responds to user interaction in real-time.",
      showDetails: false,
    },
    {
      title: 'Animated Content',
      description: 'Enjoy smooth animations as content loads and interacts.',
      details:
        "We leverage Angular's animation system to create fluid transitions and engaging user experiences that bring your content to life.",
      showDetails: false,
    },
    {
      title: 'Responsive Design',
      description: 'Seamlessly adapts to any screen size or device.',
      details:
        "Using a combination of Angular's flexibility and modern CSS techniques, our components look great on everything from mobile phones to large desktop displays.",
      showDetails: false,
    },
    {
      title: 'Interactive Elements',
      description: 'Engage with the content through interactive UI components.',
      details:
        "We create rich, interactive experiences using Angular's powerful templating and event binding systems, allowing for deeply engaging user interfaces.",
      showDetails: false,
    },
  ];

  toggleDetails(index: number) {
    this.features[index].showDetails = !this.features[index].showDetails;
  }
}
