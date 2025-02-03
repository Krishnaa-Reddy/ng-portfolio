import { NgIf } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TruncatePipe } from '../../../pipes/truncate.pipe';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [MatIconModule, NgIf, MatTooltipModule, TruncatePipe],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  project = input.required<Project>();

}
