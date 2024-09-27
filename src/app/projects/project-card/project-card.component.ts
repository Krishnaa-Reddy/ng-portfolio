import { NgIf } from '@angular/common';
import { Component, input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [MatIconModule, NgIf],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  project = input.required<Project>();

}
