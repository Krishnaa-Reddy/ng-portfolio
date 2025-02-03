import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { bootstrapGithub } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { NgxShineBorderComponent } from '@omnedia/ngx-shine-border';
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';


@Component({
  selector: 'hero',
  standalone: true,
  imports: [
    CommonModule,
    NgxTypewriterComponent,
    MatButtonModule,
    NgxShineBorderComponent,
    NgIcon
  ],
  templateUrl: './hero.component.html',
  viewProviders: [provideIcons({ bootstrapGithub })],
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
