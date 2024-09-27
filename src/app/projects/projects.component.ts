import { Component } from '@angular/core';
import { ProjectCardComponent } from "./project-card/project-card.component";
import { NgFor } from '@angular/common';
import { projects } from '../../data';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [ProjectCardComponent, NgFor, MatIconModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = projects;

}
