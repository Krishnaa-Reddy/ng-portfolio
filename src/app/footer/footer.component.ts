import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { bootstrapGithub, bootstrapInstagram, bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'ng-footer',
  standalone: true,
  imports: [NgIcon, MatIconModule],
  viewProviders: [provideIcons({ bootstrapInstagram, bootstrapLinkedin, bootstrapGithub })],
  templateUrl: './footer.component.html',
  
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  
}
