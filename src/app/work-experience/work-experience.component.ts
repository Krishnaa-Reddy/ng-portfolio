import { workExperience } from './../../data/index';
import { Component } from '@angular/core';

@Component({
  selector: 'work-experience',
  standalone: true,
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {

  workExperience = workExperience;

}
